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

export function extractMaxPrice(query: string): number | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  // 1. Full number match: e.g. "1800000", "1.800.000", "1,800,000", "rp 2.000.000", "under 1800000", "< 1500000"
  const fullNumMatch = q.match(/(?:under|<|dibawah|max|maksimal|kurang dari|rp\.?\s*|\b)\s*(?:rp\.?\s*)?(\d{1,3}(?:[.,]\d{3})+|\d{6,8})\b/i);
  if (fullNumMatch) {
    const numStr = fullNumMatch[1].replace(/[.,]/g, '');
    const val = parseInt(numStr, 10);
    if (!isNaN(val) && val >= 500000 && val <= 50000000) {
      return val;
    }
  }

  // 2. Million match with "jt" or "juta": e.g. "1.8jt", "2.5 juta", "2jt", "under 1.8 million"
  const millionMatch = q.match(/(?:under|<|dibawah|max|maksimal|kurang dari|\b)\s*(?:rp\.?\s*)?(\d+(?:[.,]\d+)?)\s*(?:jt|juta|million)\b/i);
  if (millionMatch) {
    const priceVal = parseFloat(millionMatch[1].replace(',', '.'));
    if (!isNaN(priceVal)) {
      return Math.round(priceVal * 1000000);
    }
  }

  // 3. Keyword + decimal match: e.g. "under 1.8", "max 2.5", "harga 2"
  const keywordDecimalMatch = q.match(/(?:harga|budget|biaya|under|<|dibawah|max|maksimal)\s*(?:rp\.?\s*)?(\d+(?:[.,]\d+)?)\b/i);
  if (keywordDecimalMatch) {
    const valStr = keywordDecimalMatch[1].replace(',', '.');
    const val = parseFloat(valStr);
    if (!isNaN(val)) {
      if (val >= 500000) return Math.round(val);
      if (val <= 50) return Math.round(val * 1000000);
    }
  }

  return null;
}

export function parseNaturalLanguageQuery(query: string): ParseQueryResult {
  const q = query.toLowerCase().trim();

  if (!q) {
    return {
      filteredListings: KOS_LISTINGS,
      extractedBadges: [],
      summaryText: 'Showing all verified boarding houses across Indonesia.',
      maxPrice: null,
      selectedCityOrArea: null,
      genderType: null,
    };
  }

  const badges: ExtractedFilterBadge[] = [];
  let selectedCityOrArea: string | null = null;
  let genderType: string | null = null;

  // 1. Detect Price Filter
  const maxPrice = extractMaxPrice(q);
  if (maxPrice !== null) {
    const millionVal = maxPrice / 1000000;
    const labelText = maxPrice >= 1000000
      ? `< Rp ${millionVal % 1 === 0 ? millionVal : millionVal.toFixed(1)} Juta / bln`
      : `< Rp ${maxPrice.toLocaleString('id-ID')} / bln`;

    badges.push({
      id: 'price-filter',
      label: labelText,
      category: 'price',
    });
  }

  // 2. Detect Locations
  const locationsMap: { [key: string]: string } = {
    setiabudi: 'Setiabudi',
    kemanggisan: 'Kemanggisan',
    dramaga: 'Dramaga',
    tembalang: 'Tembalang',
    cisitu: 'Cisitu',
    margonda: 'Margonda',
    menteng: 'Menteng',
    tanahabang: 'Tanah Abang',
    kebonkacang: 'Tanah Abang',
    tanjungduren: 'Grogol',
    grogol: 'Grogol',
    kelapagading: 'Kelapa Gading',
    rawamangun: 'Rawamangun',
    kemang: 'Kemang',
    senopati: 'Senopati',
    cilandak: 'Cilandak',
    tebet: 'Tebet',
    blokm: 'Blok M',
    kuningan: 'Kuningan',
    radiodalam: 'Pondok Indah',
    pancoran: 'Pancoran',
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
  if (q.includes('ac') && !q.includes('access')) {
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
      if (!item.facilities.some((f) => f.toLowerCase().includes('private bathroom') || f.toLowerCase().includes('mandi dalam'))) {
        return false;
      }
    }
    if (q.includes('ac') && !q.includes('access')) {
      if (!item.facilities.some((f) => f.toLowerCase().includes('ac'))) {
        return false;
      }
    }
    if (q.includes('mrt') || q.includes('krl')) {
      const hasTransitPOI = item.nearbyPOIs.some(
        (p) =>
          p.type === 'transit' ||
          p.name.toLowerCase().includes('mrt') ||
          p.name.toLowerCase().includes('krl') ||
          p.name.toLowerCase().includes('stasiun') ||
          p.name.toLowerCase().includes('halte')
      );
      if (!hasTransitPOI) {
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
  const q = userQuestion.toLowerCase().trim();

  if (q.includes('price') || q.includes('harga') || q.includes('biaya') || q.includes('sewa')) {
    return `The rental rate for ${listing.name} is Rp ${listing.price.toLocaleString('id-ID')} / month with a security deposit of Rp ${listing.deposit.toLocaleString('id-ID')}.`;
  }

  if (q.includes('rule') || q.includes('peraturan') || q.includes('syarat') || q.includes('tamu')) {
    return `House rules at ${listing.name}: ${listing.rules.join('. ')}.`;
  }

  if (q.includes('location') || q.includes('lokasi') || q.includes('alamat') || q.includes('dekat')) {
    const poiSummary = listing.nearbyPOIs.map((p) => `${p.name} (${p.distance})`).join(', ');
    return `${listing.name} is located at ${listing.address}. Nearby transit & hubs: ${poiSummary}.`;
  }

  if (q.includes('facility') || q.includes('fasilitas') || q.includes('wifi') || q.includes('ac')) {
    return `${listing.name} includes: ${listing.facilities.join(', ')}.`;
  }

  return `Halo! I am Bobi AI concierge for ${listing.name}. Feel free to ask about room rates, rules, or nearby transport!`;
}
