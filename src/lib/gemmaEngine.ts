import { KosListing, KOS_LISTINGS } from '@/data/kosListings';

export interface ExtractedFilterBadge {
  id: string;
  label: string;
  category: 'price' | 'location' | 'type' | 'facility' | 'transit';
}

export interface ParseQueryResult {
  filteredListings: KosListing[];
  extractedBadges: ExtractedFilterBadge[];
  summaryText: string;
  maxPrice: number | null;
  selectedCityOrArea: string | null;
  genderType: string | null;
}

export function parseNaturalLanguageQuery(query: string): ParseQueryResult {
  const q = query.toLowerCase().trim();

  if (!q) {
    return {
      filteredListings: KOS_LISTINGS,
      extractedBadges: [],
      summaryText: 'Showing all 6 verified boarding houses across Indonesia.',
      maxPrice: null,
      selectedCityOrArea: null,
      genderType: null,
    };
  }

  const badges: ExtractedFilterBadge[] = [];
  let maxPrice: number | null = null;
  let selectedCityOrArea: string | null = null;
  let genderType: string | null = null;

  // 1. Detect Price Filter
  // Matches "under 2.5jt", "< 2.5jt", "dibawah 2.5 juta", "max 2jt", "under 2jt", "1.5jt", etc.
  const millionMatch = q.match(/(?:under|<|dibawah|max|maksimal|kurang dari|\b)\s*(\d+(?:[.,]\d+)?)\s*(?:jt|juta|million)/i);
  if (millionMatch) {
    const priceVal = parseFloat(millionMatch[1].replace(',', '.'));
    if (!isNaN(priceVal)) {
      maxPrice = priceVal * 1000000;
      badges.push({
        id: 'price-filter',
        label: `< Rp ${priceVal} Juta / bln`,
        category: 'price',
      });
    }
  }

  // 2. Detect Locations
  const locationsMap: { [key: string]: string } = {
    setiabudi: 'Setiabudi',
    kemanggisan: 'Kemanggisan',
    dramaga: 'Dramaga',
    tembalang: 'Tembalang',
    cisitu: 'Cisitu',
    margonda: 'Margonda',
    jakarta: 'Jakarta',
    bogor: 'Bogor',
    semarang: 'Semarang',
    bandung: 'Bandung',
    depok: 'Depok',
    binus: 'Kemanggisan',
    ipb: 'Dramaga',
    undip: 'Tembalang',
    itb: 'Cisitu',
    ui: 'Margonda',
  };

  for (const [key, locName] of Object.entries(locationsMap)) {
    if (q.includes(key)) {
      selectedCityOrArea = locName;
      if (!badges.some((b) => b.category === 'location')) {
        badges.push({
          id: `loc-${key}`,
          label: locName,
          category: 'location',
        });
      }
      break;
    }
  }

  // 3. Detect Gender / Type Filter
  if (q.includes('putri') || q.includes('female') || q.includes('cewek')) {
    genderType = 'Putri';
    badges.push({ id: 'type-putri', label: 'Khusus Putri', category: 'type' });
  } else if (q.includes('putra') || q.includes('male') || q.includes('cowok')) {
    genderType = 'Putra';
    badges.push({ id: 'type-putra', label: 'Khusus Putra', category: 'type' });
  } else if (q.includes('campur') || q.includes('unisex')) {
    genderType = 'Campur';
    badges.push({ id: 'type-campur', label: 'Kos Campur', category: 'type' });
  }

  // 4. Detect Facility Keywords
  if (q.includes('mandi dalam') || q.includes('private bathroom') || q.includes('en-suite') || q.includes('km dalam')) {
    badges.push({ id: 'fac-bathroom', label: 'Mandi Dalam', category: 'facility' });
  }
  if (q.includes('mrt') || q.includes('krl') || q.includes('stasiun') || q.includes('transit')) {
    badges.push({ id: 'fac-transit', label: 'Dekat MRT/KRL', category: 'transit' });
  }
  if (q.includes('wifi') || q.includes('internet')) {
    badges.push({ id: 'fac-wifi', label: 'Free WiFi', category: 'facility' });
  }
  if (q.includes('ac')) {
    badges.push({ id: 'fac-ac', label: 'Ber-AC', category: 'facility' });
  }
  if (q.includes('wfh') || q.includes('desk') || q.includes('meja')) {
    badges.push({ id: 'fac-wfh', label: 'WFH / Study Desk', category: 'facility' });
  }

  // Execute Filter logic
  const filteredListings = KOS_LISTINGS.filter((item) => {
    // Price check
    if (maxPrice !== null && item.price > maxPrice) {
      return false;
    }

    // Location check
    if (selectedCityOrArea) {
      const locLower = selectedCityOrArea.toLowerCase();
      const matchCity = item.city.toLowerCase().includes(locLower);
      const matchArea = item.area.toLowerCase().includes(locLower);
      const matchAddress = item.address.toLowerCase().includes(locLower);
      const matchName = item.name.toLowerCase().includes(locLower);
      if (!matchCity && !matchArea && !matchAddress && !matchName) {
        return false;
      }
    }

    // Gender check
    if (genderType && item.type !== genderType && item.type !== 'Campur') {
      return false;
    }

    // Facility checks
    if (q.includes('mandi dalam') || q.includes('km dalam') || q.includes('private bathroom')) {
      if (!item.facilities.some((f) => f.toLowerCase().includes('private bathroom'))) {
        return false;
      }
    }
    if (q.includes('ac') && !item.facilities.some((f) => f.toLowerCase().includes('ac'))) {
      return false;
    }
    if (q.includes('mrt') || q.includes('krl')) {
      if (!item.nearbyPOIs.some((p) => p.type === 'transit')) {
        return false;
      }
    }

    return true;
  });

  const summaryText = `Gemma AI analyzed query: Found ${filteredListings.length} matching kos ${
    filteredListings.length === 1 ? 'entry' : 'entries'
  }.`;

  return {
    filteredListings,
    extractedBadges: badges,
    summaryText,
    maxPrice,
    selectedCityOrArea,
    genderType,
  };
}

export function generateBobiResponse(listing: KosListing, userQuestion: string): string {
  const q = userQuestion.toLowerCase();

  // Question: Late night entry / Curfew / 24h
  if (q.includes('late night') || q.includes('curfew') || q.includes('jam malam') || q.includes('24h') || q.includes('24 jam') || q.includes('pulang malam')) {
    const has24h = listing.facilities.some((f) => f.toLowerCase().includes('24h') || f.toLowerCase().includes('24 jam'));
    if (has24h) {
      return `Yes! ${listing.name} offers 24/7 access. Occupants receive a personal electronic keycard/fob to enter at any hour safely.`;
    } else {
      const curfewRule = listing.rules.find((r) => r.toLowerCase().includes('curfew') || r.toLowerCase().includes('hours'));
      return `Notice regarding entry: ${curfewRule || 'There is a curfew around 10 PM / 11 PM.'} Please check with ${listing.landlord.name} if you require special late-night permissions.`;
    }
  }

  // Question: Internet / WiFi speed
  if (q.includes('internet') || q.includes('wifi') || q.includes('speed') || q.includes('koneksi')) {
    const wifiFac = listing.facilities.find((f) => f.toLowerCase().includes('wifi'));
    return `WiFi Specs: ${listing.name} is equipped with high-speed fiber internet (${wifiFac || '100Mbps High Speed'}). Verified by Gemma AI to be ideal for video calls, streaming, and student assignments.`;
  }

  // Question: Total cost including deposit
  if (q.includes('cost') || q.includes('total') || q.includes('deposit') || q.includes('bayar') || q.includes('biaya')) {
    const total = listing.price + listing.deposit;
    const formatPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
    return `Cost Breakdown for ${listing.name}:\n• Monthly Rent: ${formatPrice.format(listing.price)}\n• Refundable Security Deposit: ${formatPrice.format(listing.deposit)}\n👉 First Month Move-in Total: ${formatPrice.format(total)} (Deposit is fully refunded upon checkout according to terms).`;
  }

  // Question: Guest visits / Rules
  if (q.includes('guest') || q.includes('tamu') || q.includes('teman') || q.includes('visit') || q.includes('rule') || q.includes('peraturan')) {
    return `Rules for ${listing.name}:\n${listing.rules.map((r, i) => `${i + 1}. ${r}`).join('\n')}`;
  }

  // Question: Parking
  if (q.includes('parkir') || q.includes('parking') || q.includes('motor') || q.includes('mobil') || q.includes('car')) {
    const parkingFac = listing.facilities.filter((f) => f.toLowerCase().includes('park') || f.toLowerCase().includes('garage') || f.toLowerCase().includes('motorbike'));
    return `Parking Facilities: ${parkingFac.length > 0 ? parkingFac.join(', ') : 'Motorbike parking available on site.'}`;
  }

  // Default Gemma response
  return `Hi! I'm Bobi, your Gemma AI concierge for ${listing.name}. Located in ${listing.area}, ${listing.city} at ${listing.price.toLocaleString('id-ID')} IDR/mo. Features ${listing.facilities.slice(0, 4).join(', ')}. How else can I assist you with your booking inquiry?`;
}
