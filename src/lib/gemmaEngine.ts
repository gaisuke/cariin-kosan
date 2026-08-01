import { KOS_LISTINGS, KosListing } from '@/data/kosListings';

export interface ExtractedFilterBadge {
  id: string;
  label: string;
  category: string;
}

export interface ParsedQuery {
  rawQuery: string;
  maxPrice: number | null;
  selectedCityOrArea: string | null;
  genderType: string | null;
  extractedBadges: ExtractedFilterBadge[];
  filteredListings: KosListing[];
  summaryText: string;
}

/**
 * Extracts numeric price limits from user natural language query.
 * Handles inputs like:
 * - "under 1800000", "1.800.000", "1800000", "rp 1.800.000", "under 1.800.000"
 * - "under 1.8jt", "under 2.5 juta", "< 2jt", "dibawah 2 juta"
 * - "budget 1.8", "under 1.8"
 */
export function extractMaxPrice(query: string): number | null {
  if (!query) return null;
  const q = query.toLowerCase().trim();

  // 1. Full number match: e.g. "under 1800000", "under 1.800.000", "1,800,000", "2000000"
  const fullNumMatch = q.match(/(?:under|<|dibawah|max|maksimal|kurang dari|rp\.?\s*|\b)\s*(?:rp\.?\s*)?(\d{1,3}(?:[.,]\d{3})+|\d{6,8})\b/i);
  if (fullNumMatch) {
    const cleaned = fullNumMatch[1].replace(/[.,]/g, '');
    const val = parseInt(cleaned, 10);
    if (!isNaN(val) && val >= 500000) {
      return val;
    }
  }

  // 2. Million shorthand match: e.g. "under 1.8jt", "< 2.5 juta", "2jt", "dibawah 1,8 juta"
  const millionMatch = q.match(/(?:under|<|dibawah|max|maksimal|kurang dari|\b)\s*(?:rp\.?\s*)?(\d+(?:[.,]\d+)?)\s*(?:jt|juta|million)\b/i);
  if (millionMatch) {
    const numStr = millionMatch[1].replace(',', '.');
    const val = parseFloat(numStr);
    if (!isNaN(val)) {
      return Math.round(val * 1000000);
    }
  }

  // 3. Keyword decimal match: e.g. "under 1.8", "harga 2", "budget 1.5"
  const keywordDecimalMatch = q.match(/(?:harga|budget|biaya|under|<|dibawah|max|maksimal)\s*(?:rp\.?\s*)?(\d+(?:[.,]\d+)?)\b/i);
  if (keywordDecimalMatch) {
    const numStr = keywordDecimalMatch[1].replace(',', '.');
    const val = parseFloat(numStr);
    if (!isNaN(val)) {
      if (val >= 500000) return val;
      if (val <= 50) return Math.round(val * 1000000);
    }
  }

  return null;
}

/**
 * Fast, deterministic client-side Natural Language Parser for instantly parsing queries.
 */
export function parseNaturalLanguageQuery(query: string): ParsedQuery {
  const q = query.toLowerCase().trim();
  const badges: ExtractedFilterBadge[] = [];

  let maxPrice: number | null = extractMaxPrice(q);
  let selectedCityOrArea: string | null = null;
  let genderType: string | null = null;

  if (maxPrice !== null) {
    const formattedPrice = (maxPrice / 1000000).toFixed(maxPrice % 1000000 === 0 ? 0 : 1);
    badges.push({
      id: 'price-filter',
      label: `Max Rp ${formattedPrice} Juta`,
      category: 'price',
    });
  }

  // Detect Locations & Major Landmark Keywords
  const locationsMap: { [key: string]: string } = {
    sudirman: 'Sudirman',
    thamrin: 'Thamrin',
    scbd: 'SCBD',
    gatotsubroto: 'Gatot Subroto',
    gatsu: 'Gatot Subroto',
    semanggi: 'Semanggi',
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
    salemba: 'Salemba',
    cempakaputih: 'Cempaka Putih',
    sunter: 'Sunter',
    pluit: 'Pluit',
    jagakarsa: 'Jagakarsa',
    jatinegara: 'Jatinegara',
    puriindah: 'Puri Indah',
    kembangan: 'Puri Indah',
    palmerah: 'Palmerah',
    slipi: 'Palmerah',
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

  // Detect Gender / Type Filter
  if (q.includes('putri') || q.includes('female') || q.includes('cewek')) {
    genderType = 'Putri';
    badges.push({ id: 'type-putri', label: 'Khusus Putri', category: 'type' });
  } else if (q.includes('putra') || q.includes('male') || q.includes('cowok')) {
    genderType = 'Putra';
    badges.push({ id: 'type-putra', label: 'Khusus Putra', category: 'type' });
  }

  // Facility / POI Badges
  if (q.includes('mrt')) badges.push({ id: 'fac-mrt', label: 'Dekat MRT', category: 'transit' });
  if (q.includes('krl') || q.includes('stasiun')) badges.push({ id: 'fac-krl', label: 'Dekat KRL', category: 'transit' });
  if (q.includes('wifi') || q.includes('internet')) badges.push({ id: 'fac-wifi', label: 'High-speed WiFi', category: 'facility' });
  if (q.includes('ac') && !q.includes('access')) badges.push({ id: 'fac-ac', label: 'AC', category: 'facility' });
  if (q.includes('mandi dalam') || q.includes('private bathroom') || q.includes('km dalam')) {
    badges.push({ id: 'fac-bathroom', label: 'Kamar Mandi Dalam', category: 'facility' });
  }

  // Filter listings based on extracted rules
  const filteredListings = KOS_LISTINGS.filter((item) => {
    // 1. Price check
    if (maxPrice !== null && item.price > maxPrice) {
      return false;
    }

    // 2. Gender check
    if (genderType && item.type !== genderType && item.type !== 'Campur') {
      return false;
    }

    // 3. Location / Landmark / Sub-District check
    if (selectedCityOrArea) {
      const locLower = selectedCityOrArea.toLowerCase();
      const matchCity = item.city.toLowerCase().includes(locLower);
      const matchArea = item.area.toLowerCase().includes(locLower);
      const matchAddress = item.address.toLowerCase().includes(locLower);
      const matchName = item.name.toLowerCase().includes(locLower);
      const matchDescription = item.description.toLowerCase().includes(locLower);
      const matchPOI = item.nearbyPOIs.some((p) => p.name.toLowerCase().includes(locLower));

      if (!matchCity && !matchArea && !matchAddress && !matchName && !matchDescription && !matchPOI) {
        return false;
      }
    }

    // Landmark specific search terms (e.g. "sudirman", "thamrin", "scbd", "gatsu", "salemba", "kemanggisan")
    const landmarkKeys = ['sudirman', 'thamrin', 'scbd', 'gatsu', 'gatot subroto', 'salemba', 'kemanggisan', 'binus', 'tebet', 'setiabudi', 'kuningan'];
    for (const key of landmarkKeys) {
      if (q.includes(key)) {
        const matchAddr = item.address.toLowerCase().includes(key);
        const matchName = item.name.toLowerCase().includes(key);
        const matchArea = item.area.toLowerCase().includes(key);
        const matchDesc = item.description.toLowerCase().includes(key);
        const matchPOI = item.nearbyPOIs.some((p) => p.name.toLowerCase().includes(key));
        if (!matchAddr && !matchName && !matchArea && !matchDesc && !matchPOI) {
          return false;
        }
      }
    }

    // 4. Transit check (MRT / KRL)
    if (q.includes('mrt') || q.includes('krl') || q.includes('stasiun')) {
      const hasTransitPOI = item.nearbyPOIs.some(
        (p) =>
          p.type === 'transit' ||
          p.name.toLowerCase().includes('mrt') ||
          p.name.toLowerCase().includes('krl') ||
          p.name.toLowerCase().includes('stasiun') ||
          p.name.toLowerCase().includes('halte')
      );
      const hasTransitFacility = item.facilities.some((f) => f.toLowerCase().includes('mrt') || f.toLowerCase().includes('krl'));
      if (!hasTransitPOI && !hasTransitFacility) {
        return false;
      }
    }

    // 5. Facility check (WiFi)
    if (q.includes('wifi') || q.includes('internet')) {
      if (!item.facilities.some((f) => f.toLowerCase().includes('wifi') || f.toLowerCase().includes('internet'))) {
        return false;
      }
    }

    return true;
  });

  const summaryText = filteredListings.length > 0
    ? `Ditemukan ${filteredListings.length} pilihan kosan untuk query "${query}".`
    : `Tidak ada kosan yang memenuhi kriteria "${query}". Coba sesuaikan budget atau lokasi!`;

  return {
    rawQuery: query,
    maxPrice,
    selectedCityOrArea,
    genderType,
    extractedBadges: badges,
    filteredListings,
    summaryText,
  };
}

/**
 * Fallback Bobi AI Concierge chat responder logic with flexible parameter ordering.
 */
export function generateBobiResponse(param1: any, param2?: any): string {
  let listing: KosListing | null = null;
  let userQuestion = '';

  if (typeof param1 === 'string') {
    userQuestion = param1;
  } else if (param1 && typeof param1 === 'object' && !Array.isArray(param1)) {
    listing = param1 as KosListing;
  } else if (Array.isArray(param1)) {
    listing = param1[0] || null;
  }

  if (typeof param2 === 'string') {
    userQuestion = param2;
  }

  const topMatch = listing || KOS_LISTINGS[0];

  if (topMatch) {
    return `Halo! Saya Bobi 🤖. Berdasarkan pertanyaan Anda "${userQuestion || 'informasi kos'}", rekomendasi terbaik adalah **${topMatch.name}** di area ${topMatch.area} dengan harga Rp ${topMatch.price.toLocaleString('id-ID')}/bulan. Fasilitas utama: ${topMatch.facilities.slice(0, 3).join(', ')}.`;
  }

  return `Halo! Saya Bobi 🤖. Mohon maaf, saat ini belum ada informasi kosan yang sesuai dengan pertanyaan "${userQuestion}". Silakan coba cari area atau budget lainnya!`;
}
