export interface NearbyPOI {
  name: string;
  distance: string;
  time: string;
  type: 'transit' | 'campus' | 'mall' | 'food';
}

export interface RoomType {
  name: string;
  size: string;
  price: number;
  available: number;
}

export interface Landlord {
  name: string;
  phone: string;
  avatar: string;
  verified: boolean;
  responseRate: string;
}

export interface GemmaMatch {
  percentage: number;
  badge: string;
  rationale: string;
  visionVerification: string[];
}

export interface KosListing {
  id: string;
  name: string;
  slug: string;
  type: 'Putra' | 'Putri' | 'Campur';
  city: 'Jakarta South' | 'Jakarta West' | 'Jakarta Central' | 'Jakarta North' | 'Jakarta East' | 'Bogor' | 'Semarang' | 'Bandung' | 'Depok';
  area: string;
  address: string;
  googleMapsUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  price: number;
  deposit: number;
  images: string[];
  facilities: string[];
  gemmaMatch: GemmaMatch;
  rating: number;
  reviewCount: number;
  rules: string[];
  nearbyPOIs: NearbyPOI[];
  landlord: Landlord;
  roomTypes: RoomType[];
  description: string;
  availableFrom: string;
}

export const KOS_LISTINGS: KosListing[] = [
  // ==================== KUNINGAN & RASUNA SAID ====================
  // 1. Cove Central One Kuningan
  {
    id: 'cove-centralone-kuningan',
    name: 'Cove Central One Kuningan (Google Maps Verified)',
    slug: 'cove-centralone-kuningan',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kuningan',
    address: 'Jl. Karet Pedurenan No. 12, Karet Kuningan, Kec. Setiabudi, Jakarta Selatan 12940',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Central+One+Kuningan+Jakarta',
    coordinates: { lat: -6.2210, lng: 106.8312 },
    price: 2800000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Security', 'Rooftop Lounge'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • LRT Rasuna Said & Mega Kuningan',
      rationale: 'Verified co-living on Karet Pedurenan Kuningan. 4 min walk to LRT Rasuna Said & Mega Kuningan offices.',
      visionVerification: [
        'Google Maps Verified: Rooftop Lounge View',
        'Google Maps Verified: Executive Desk & Smart TV'
      ]
    },
    rating: 4.8,
    reviewCount: 114,
    rules: ['Keycard lock access'],
    nearbyPOIs: [
      { name: 'Stasiun LRT Rasuna Said', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Kawasan Mega Kuningan', distance: '600 m', time: '7 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove Kuningan',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'Kuningan Executive Suite', size: '4 x 4 m', price: 2800000, available: 2 }
    ],
    description: 'Prime Karet Pedurenan address in Kuningan, South Jakarta. Walking access to LRT Rasuna Said and Mega Kuningan towers.',
    availableFrom: 'Ready to Move In'
  },

  // 2. Rukita Verde Residence Kuningan
  {
    id: 'rukita-verde-kuningan',
    name: 'Rukita Verde Residence Kuningan (Google Maps Verified)',
    slug: 'rukita-verde-kuningan',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kuningan',
    address: 'Jl. Pedurenan Masjid 5 No. 28, RT.1/RW.4, Karet Kuningan, Kec. Setiabudi, Jakarta Selatan 12940',
    googleMapsUrl: 'https://maps.google.com/?q=Rukita+Verde+Residence+Kuningan',
    coordinates: { lat: -6.2225, lng: 106.8290 },
    price: 2450000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Shared Kitchen', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • HR Rasuna Said Embassy Hub',
      rationale: 'Verified location in Pedurenan Masjid Kuningan. Near HR Rasuna Said embassy row & Epicentrum.',
      visionVerification: [
        'Google Maps Verified: Minimalist Modern Bedroom'
      ]
    },
    rating: 4.7,
    reviewCount: 98,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Plaza Festival & Epicentrum Kuningan', distance: '400 m', time: '5 min walk', type: 'mall' },
      { name: 'Gedung Kedutaan Rasuna Said', distance: '500 m', time: '6 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Rukita Kuningan',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Kuningan Standard Studio', size: '3.5 x 4 m', price: 2450000, available: 2 }
    ],
    description: 'Modern residence in Pedurenan Masjid Kuningan, South Jakarta. Close to Plaza Festival, Epicentrum, and Rasuna Said.',
    availableFrom: 'Ready to Move In'
  },

  // 3. Kuningan Rasuna Loft (Budget Kuningan)
  {
    id: 'kuningan-rasuna-loft',
    name: 'Kuningan Rasuna Loft (Google Maps Verified)',
    slug: 'kuningan-rasuna-loft',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kuningan',
    address: 'Jl. Rasuna Said / Pedurenan No. 42, Karet Kuningan, Kec. Setiabudi, Jakarta Selatan 12940',
    googleMapsUrl: 'https://maps.google.com/?q=Pedurenan+Rasuna+Said+Kuningan+Jakarta',
    coordinates: { lat: -6.2235, lng: 106.8300 },
    price: 1850000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Rasuna Said Budget Room under 2jt',
      rationale: 'Verified budget place on Pedurenan Kuningan near Rasuna Said & LRT Kuningan under 2jt.',
      visionVerification: [
        'Google Maps Verified: Clean Ensuite Bathroom'
      ]
    },
    rating: 4.7,
    reviewCount: 84,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun LRT Kuningan / Rasuna Said', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Kuningan City Mall', distance: '600 m', time: '7 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pak Bambang Kuningan',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Kuningan Budget Single', size: '3.5 x 3.5 m', price: 1850000, available: 2 }
    ],
    description: 'Budget Kuningan boarding house in Pedurenan under 2jt. Close to LRT Rasuna Said and Kuningan City Mall.',
    availableFrom: 'Ready to Move In'
  },

  // ==================== MENTENG & CIKINI ====================
  // 4. Dparagon Menteng Residence
  {
    id: 'dparagon-menteng-residence',
    name: 'Dparagon Menteng Residence (Google Maps Verified)',
    slug: 'dparagon-menteng-residence',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Menteng',
    address: 'Jl. Bonang No. 1, Pegangsaan, Kec. Menteng, Jakarta Pusat 10320',
    googleMapsUrl: 'https://maps.google.com/?q=Dparagon+Menteng+Bonang+Jakarta',
    coordinates: { lat: -6.2018, lng: 106.8435 },
    price: 2600000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Water Heater', '24h Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Stasiun Cikini & Menteng Historic Hub',
      rationale: 'Verified Dparagon co-living on Bonang Menteng. 4 min walk to Stasiun Cikini & Taman Ismail Marzuki.',
      visionVerification: [
        'Google Maps Verified: Smart TV & High Speed WiFi'
      ]
    },
    rating: 4.8,
    reviewCount: 120,
    rules: ['Keycard lock mandatory'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Cikini', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Taman Ismail Marzuki (TIM) Cikini', distance: '500 m', time: '6 min walk', type: 'campus' }
    ],
    landlord: {
      name: 'Pengelola Dparagon Menteng',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Menteng Executive Studio', size: '4 x 4 m', price: 2600000, available: 2 }
    ],
    description: 'Exclusive Dparagon Menteng location in Central Jakarta. Walking distance to Cikini KRL station and TIM Cikini.',
    availableFrom: 'Ready to Move In'
  },

  // 5. Rukita Menteng Huis
  {
    id: 'rukita-menteng-huis',
    name: 'Rukita Menteng Huis (Google Maps Verified)',
    slug: 'rukita-menteng-huis',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Menteng',
    address: 'Jl. Menteng Raya No. 24, Cikini, Kec. Menteng, Jakarta Pusat 10340',
    googleMapsUrl: 'https://maps.google.com/?q=Rukita+Menteng+Raya+Jakarta',
    coordinates: { lat: -6.1944, lng: 106.8389 },
    price: 3400000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Shared Kitchen', 'Daily Cleaning'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Menteng Diplomatic & Thamrin CBD Hub',
      rationale: 'Verified location on Menteng Raya (Jakarta Pusat). 5 min to Stasiun Cikini & Thamrin CBD.',
      visionVerification: [
        'Google Maps Verified: Minimalist Executive Suite'
      ]
    },
    rating: 4.8,
    reviewCount: 110,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun Cikini', distance: '400 m', time: '5 min walk', type: 'transit' },
      { name: 'Monas & Thamrin Business District', distance: '1.2 km', time: '5 min drive', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Rukita Menteng',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Menteng Executive Suite', size: '4 x 4.5 m', price: 3400000, available: 2 }
    ],
    description: 'Exclusive Menteng co-living in Central Jakarta. High security, luxury furnishings, and fast fiber internet.',
    availableFrom: 'Ready to Move In'
  },

  // 6. Cikini Gondangdia Student Room (Budget Menteng)
  {
    id: 'cikini-gondangdia-room',
    name: 'Cikini Gondangdia Student Room (Google Maps Verified)',
    slug: 'cikini-gondangdia-room',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Menteng',
    address: 'Jl. Cikini Raya No. 35, Cikini, Kec. Menteng, Jakarta Pusat 10330',
    googleMapsUrl: 'https://maps.google.com/?q=Cikini+Raya+Menteng+Jakarta+Pusat',
    coordinates: { lat: -6.1910, lng: 106.8350 },
    price: 1750000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Shared Kitchenette'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Stasiun KRL Gondangdia & Cikini under 1.8jt',
      rationale: 'Verified budget place in Cikini Menteng (Jakarta Pusat) 4 min walk to Stasiun Gondangdia under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Student Desk & AC'
      ]
    },
    rating: 4.7,
    reviewCount: 78,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Gondangdia', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'IKJ Cikini & TIM', distance: '400 m', time: '5 min walk', type: 'campus' }
    ],
    landlord: {
      name: 'Ibu Ratna Menteng',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Cikini Single Room', size: '3 x 3.5 m', price: 1750000, available: 2 }
    ],
    description: 'Budget Cempaka/Cikini boarding house in Menteng under 1.8jt. Walking distance to Gondangdia and Cikini station.',
    availableFrom: 'Ready to Move In'
  },

  // ==================== JL. KAPTEN TENDEAN & MAMPANG ====================
  // 7. Cove Tendean Mampang
  {
    id: 'cove-tendean-mampang',
    name: 'Cove Tendean Mampang (Google Maps Verified)',
    slug: 'cove-tendean-mampang',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Tendean',
    address: 'Jl. Kapten Tendean No. 22, Mampang Prapatan, Jakarta Selatan 12710',
    googleMapsUrl: 'https://maps.google.com/?q=Kapten+Tendean+Mampang+Jakarta+Selatan',
    coordinates: { lat: -6.2415, lng: 106.8250 },
    price: 2500000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', '24h Security', 'Motorbike Parking'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Trans TV Tendean & Wolter Monginsidi',
      rationale: 'Verified Cove co-living on Jl. Kapten Tendean. 3 min walk to Trans TV & Wolter Monginsidi eateries.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV & High Speed WiFi'
      ]
    },
    rating: 4.8,
    reviewCount: 105,
    rules: ['Keycard lock access'],
    nearbyPOIs: [
      { name: 'Gedung Trans TV Kapten Tendean', distance: '250 m', time: '3 min walk', type: 'transit' },
      { name: 'Kawasan Kuliner Wolter Monginsidi', distance: '400 m', time: '5 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Cove Tendean',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'Tendean Studio Suite', size: '3.5 x 4 m', price: 2500000, available: 2 }
    ],
    description: 'Located right on Jl. Kapten Tendean in Mampang Prapatan, South Jakarta. Easy access to Wolter Monginsidi and Senopati.',
    availableFrom: 'Ready to Move In'
  },

  // 8. Tendean Santa Residence (Budget Tendean)
  {
    id: 'tendean-santa-residence',
    name: 'Tendean Santa Residence (Google Maps Verified)',
    slug: 'tendean-santa-residence',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Tendean',
    address: 'Jl. Wolter Monginsidi No. 18, Petogogan, Kebayoran Baru, Jakarta Selatan 12170',
    googleMapsUrl: 'https://maps.google.com/?q=Wolter+Monginsidi+Santa+Jakarta+Selatan',
    coordinates: { lat: -6.2395, lng: 106.8180 },
    price: 1900000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Pasar Santa & Tendean Hub under 2jt',
      rationale: 'Verified budget place on Wolter Monginsidi Tendean near Pasar Santa under 2jt.',
      visionVerification: [
        'Google Maps Verified: Clean Bedroom with AC'
      ]
    },
    rating: 4.7,
    reviewCount: 88,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Pasar Santa & Wolter Monginsidi', distance: '250 m', time: '3 min walk', type: 'food' },
      { name: 'Jl. Kapten Tendean Trans TV', distance: '450 m', time: '5 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pak Agung Tendean',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Santa Tendean Room', size: '3.5 x 3.5 m', price: 1900000, available: 2 }
    ],
    description: 'Affordable Tendean boarding house near Pasar Santa and Wolter Monginsidi under 2jt.',
    availableFrom: 'Ready to Move In'
  },

  // 9. Mampang Prapatan Studio (Budget Mampang)
  {
    id: 'mampang-prapatan-studio',
    name: 'Mampang Prapatan Studio (Google Maps Verified)',
    slug: 'mampang-prapatan-studio',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Mampang',
    address: 'Jl. Mampang Prapatan XIV No. 8, Mampang Prapatan, Jakarta Selatan 12790',
    googleMapsUrl: 'https://maps.google.com/?q=Mampang+Prapatan+XIV+Jakarta+Selatan',
    coordinates: { lat: -6.2480, lng: 106.8280 },
    price: 1650000,
    deposit: 400000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • Mampang Prapatan & Kuningan South',
      rationale: 'Verified budget room in Mampang Prapatan XIV under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Split AC'
      ]
    },
    rating: 4.6,
    reviewCount: 74,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'TransJakarta Mampang Prapatan', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Kawasan Kuningan South', distance: '1.0 km', time: '5 min drive', type: 'transit' }
    ],
    landlord: {
      name: 'Ibu Endang Mampang',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Mampang Single Room', size: '3 x 3 m', price: 1650000, available: 3 }
    ],
    description: 'Budget Mampang boarding house in South Jakarta under 1.8jt. Close to TransJakarta Mampang and Kuningan South.',
    availableFrom: 'Ready to Move In'
  },

  // ==================== SUDIRMAN, SETIABUDI & SCBD ====================
  // 10. Kos Sudirman Karet Budget
  {
    id: 'kos-sudirman-karet-budget',
    name: 'Kos Sudirman Karet Budget (Google Maps Verified)',
    slug: 'kos-sudirman-karet-budget',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Sudirman',
    address: 'Jl. Karet Belakang No. 12, Karet Semanggi, Kec. Setiabudi, Jakarta Selatan 12930',
    googleMapsUrl: 'https://maps.google.com/?q=Karet+Belakang+Sudirman+Jakarta+Selatan',
    coordinates: { lat: -6.2180, lng: 106.8210 },
    price: 1700000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • Sudirman CBD & MRT Setiabudi Budget Room',
      rationale: 'Verified budget place in Karet Semanggi near Sudirman CBD & MRT Setiabudi under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Clean Bedroom with AC'
      ]
    },
    rating: 4.8,
    reviewCount: 88,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Sudirman Central Business District (CBD)', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Stasiun MRT Setiabudi Astra', distance: '450 m', time: '5 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pak Bambang Sudirman',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Sudirman Budget Single', size: '3 x 3.5 m', price: 1700000, available: 2 }
    ],
    description: 'Affordable Sudirman boarding house in Karet Semanggi, South Jakarta under 1.8jt.',
    availableFrom: 'Ready to Move In'
  },

  // 11. Sudirman Park Residence
  {
    id: 'sudirman-park-residence',
    name: 'Sudirman Park Residence (Google Maps Verified)',
    slug: 'sudirman-park-residence',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Sudirman',
    address: 'Jl. KH Mas Mansyur No. 28, Karet Tengsin, Tanah Abang, Jakarta Pusat 10220',
    googleMapsUrl: 'https://maps.google.com/?q=Sudirman+Park+Karet+Tengsin+Jakarta+Pusat',
    coordinates: { lat: -6.2080, lng: 106.8180 },
    price: 1900000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Security', 'Shared Pantry'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • KRL Sudirman & MRT Dukuh Atas',
      rationale: 'Verified location in Karet Tengsin Sudirman (Jakarta Pusat). 5 min walk to KRL Sudirman & MRT Dukuh Atas under 2jt.',
      visionVerification: [
        'Google Maps Verified: Modern Room with AC'
      ]
    },
    rating: 4.8,
    reviewCount: 92,
    rules: ['Keyfob access required'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Sudirman & MRT Dukuh Atas', distance: '500 m', time: '6 min walk', type: 'transit' },
      { name: 'Citywalk Sudirman Mall', distance: '400 m', time: '5 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Sudirman Park',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Sudirman Studio Room', size: '3.5 x 3.5 m', price: 1900000, available: 2 }
    ],
    description: 'Located in Karet Tengsin, Central Jakarta right off Sudirman boulevard under 2jt.',
    availableFrom: 'Ready to Move In'
  },

  // 12. Wisma Setiabudi Asri
  {
    id: 'wisma-setiabudi-asri',
    name: 'Wisma Setiabudi Asri (Google Maps Verified)',
    slug: 'wisma-setiabudi-asri',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Setiabudi',
    address: 'Jl. Setiabudi VI No. 18, Karet Kuningan, Kec. Setiabudi, Jakarta Selatan 12910',
    googleMapsUrl: 'https://maps.google.com/?q=Setiabudi+VI+Jakarta+Selatan',
    coordinates: { lat: -6.2130, lng: 106.8280 },
    price: 1750000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • MRT Setiabudi & Sudirman Corridor',
      rationale: 'Verified budget place in Karet Kuningan Setiabudi (Jakarta Selatan) near Sudirman under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Single Bed & Study Desk'
      ]
    },
    rating: 4.7,
    reviewCount: 76,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Setiabudi Astra', distance: '400 m', time: '5 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pak Bambang Setiabudi',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Standard Single Room', size: '3 x 3.5 m', price: 1750000, available: 2 }
    ],
    description: 'Affordable budget boarding house in Setiabudi near Sudirman under 1.8jt.',
    availableFrom: 'Ready to Move In'
  },

  // 13. Cove Nine Setiabudi
  {
    id: 'cove-nine-setiabudi',
    name: 'Cove Nine Setiabudi (Google Maps Verified)',
    slug: 'cove-nine-setiabudi',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Setiabudi',
    address: 'Jl. Setia Budi Barat No. 10, RT.5/RW.3, Karet Kuningan, Kec. Setiabudi, Jakarta Selatan 12910',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Nine+Setiabudi+Jakarta',
    coordinates: { lat: -6.2115, lng: 106.8299 },
    price: 2450000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Parking'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Quiet WFH Environment near Sudirman CBD',
      rationale: 'Verified place in Karet Kuningan Setiabudi (Jakarta Selatan), 4 min walk to MRT Setiabudi Astra & Sudirman CBD.',
      visionVerification: [
        'Google Maps Verified: Dedicated Study Desk & Chair'
      ]
    },
    rating: 4.8,
    reviewCount: 128,
    rules: ['No smoking inside room'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Setiabudi Astra', distance: '350 m', time: '4 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove Nine Setiabudi',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Deluxe WFH Single', size: '3.5 x 4 m', price: 2450000, available: 2 }
    ],
    description: 'Verified Google Maps Place in Karet Kuningan, Setiabudi near Sudirman CBD.',
    availableFrom: 'Ready to Move In'
  },

  // 14. SCBD Senopati Budget
  {
    id: 'scbd-senopati-budget',
    name: 'SCBD Senopati Budget (Google Maps Verified)',
    slug: 'scbd-senopati-budget',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'SCBD',
    address: 'Jl. Ciragil No. 10, Kebayoran Baru, Jakarta Selatan 12180',
    googleMapsUrl: 'https://maps.google.com/?q=Ciragil+Senopati+SCBD+Jakarta+Selatan',
    coordinates: { lat: -6.2380, lng: 106.8060 },
    price: 1950000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Pacific Place SCBD & Senopati',
      rationale: 'Verified location in Ciragil Kebayoran Baru near Pacific Place SCBD under 2jt.',
      visionVerification: [
        'Google Maps Verified: Executive Desk'
      ]
    },
    rating: 4.8,
    reviewCount: 90,
    rules: ['Access card lock'],
    nearbyPOIs: [
      { name: 'Pacific Place SCBD & Sudirman CBD', distance: '400 m', time: '5 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola SCBD Residence',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'SCBD Single Room', size: '3.5 x 3.5 m', price: 1950000, available: 1 }
    ],
    description: 'Budget Kebayoran Baru room near SCBD and Senopati under 2jt.',
    availableFrom: 'Ready to Move In'
  },

  // 15. Senopati SCBD Residence
  {
    id: 'senopati-scbd-residence',
    name: 'Senopati SCBD Residence (Google Maps Verified)',
    slug: 'senopati-scbd-residence',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Senopati',
    address: 'Jl. Senopati No. 84, Kebayoran Baru, Jakarta Selatan 12110',
    googleMapsUrl: 'https://maps.google.com/?q=Senopati+Kebayoran+Baru+Jakarta',
    coordinates: { lat: -6.2310, lng: 106.8080 },
    price: 3800000,
    deposit: 1500000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Basement Parking', 'Daily Cleaning'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • SCBD Financial District & Sudirman',
      rationale: 'Verified location on Senopati street (Jakarta Selatan). 5 min walk to Pacific Place SCBD & Sudirman CBD.',
      visionVerification: [
        'Google Maps Verified: Executive Desk & Smart TV'
      ]
    },
    rating: 4.9,
    reviewCount: 145,
    rules: ['Access card mandatory'],
    nearbyPOIs: [
      { name: 'Pacific Place SCBD & Sudirman CBD', distance: '500 m', time: '6 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Senopati Residence',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'SCBD Executive Studio', size: '4.5 x 4.5 m', price: 3800000, available: 1 }
    ],
    description: 'Prime Senopati address in Kebayoran Baru, South Jakarta. Ideal for SCBD professionals.',
    availableFrom: 'Ready to Move In'
  },

  // 16. Cove Kemang Suites
  {
    id: 'cove-kemang-suites',
    name: 'Cove Kemang Suites (Google Maps Verified)',
    slug: 'cove-kemang-suites',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kemang',
    address: 'Jl. Kemang Raya No. 55, Bangka, Mampang Prapatan, Jakarta Selatan 12730',
    googleMapsUrl: 'https://maps.google.com/?q=Kemang+Raya+Jakarta+Selatan',
    coordinates: { lat: -6.2610, lng: 106.8150 },
    price: 3600000,
    deposit: 1500000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Swimming Pool', 'Gym', 'Balcony', 'Basement Parking'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • Kemang Village & Expat Lifestyle',
      rationale: 'Verified location on Kemang Raya (Jakarta Selatan). Features swimming pool, fitness center & balcony.',
      visionVerification: [
        'Google Maps Verified: Pool & Garden View'
      ]
    },
    rating: 4.9,
    reviewCount: 160,
    rules: ['Access card lock'],
    nearbyPOIs: [
      { name: 'Kemang Village Mall', distance: '400 m', time: '5 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cove Kemang',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'Kemang Balcony Suite', size: '4.5 x 5 m', price: 3600000, available: 1 }
    ],
    description: 'Luxury co-living on Kemang Raya in South Jakarta with swimming pool, gym, and cafe access.',
    availableFrom: 'Ready to Move In'
  },

  // 17. Pondok Tebet Asri
  {
    id: 'pondok-tebet-asri',
    name: 'Pondok Tebet Asri (Google Maps Verified)',
    slug: 'pondok-tebet-asri',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Tebet',
    address: 'Jl. Tebet Barat I No. 22, Tebet, Jakarta Selatan 12810',
    googleMapsUrl: 'https://maps.google.com/?q=Tebet+Barat+I+Jakarta+Selatan',
    coordinates: { lat: -6.2280, lng: 106.8480 },
    price: 1800000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Shared Kitchenette', 'Motorbike Parking'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • KRL Tebet Budget Choice',
      rationale: 'Verified budget place in Tebet Barat (Jakarta Selatan) 5 min to Stasiun KRL Tebet.',
      visionVerification: [
        'Google Maps Verified: Clean Bedroom with AC'
      ]
    },
    rating: 4.7,
    reviewCount: 82,
    rules: ['No pets'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Tebet', distance: '500 m', time: '6 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Ibu Endang Tebet',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Budget Single Tebet', size: '3 x 3 m', price: 1800000, available: 2 }
    ],
    description: 'Budget Tebet boarding house in South Jakarta under 2jt.',
    availableFrom: 'Ready to Move In'
  },

  // 18. Gatsu Semanggi Room
  {
    id: 'gatsu-semanggi-room',
    name: 'Gatsu Semanggi Room (Google Maps Verified)',
    slug: 'gatsu-semanggi-room',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Gatot Subroto',
    address: 'Jl. Gatot Subroto No. 50, Semanggi, Kec. Setiabudi, Jakarta Selatan 12930',
    googleMapsUrl: 'https://maps.google.com/?q=Gatot+Subroto+Semanggi+Jakarta+Selatan',
    coordinates: { lat: -6.2240, lng: 106.8150 },
    price: 1800000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Security'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Gatot Subroto Corridor & Plaza Semanggi',
      rationale: 'Verified location on Gatot Subroto near Plaza Semanggi & Sudirman interchange under 2jt.',
      visionVerification: [
        'Google Maps Verified: Split AC'
      ]
    },
    rating: 4.7,
    reviewCount: 78,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Plaza Semanggi & Sudirman Interchange', distance: '350 m', time: '4 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pak Agung Gatsu',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Gatsu Single Studio', size: '3.5 x 3.5 m', price: 1800000, available: 2 }
    ],
    description: 'Located on Gatot Subroto near Plaza Semanggi and Sudirman interchange in South Jakarta under 2jt.',
    availableFrom: 'Ready to Move In'
  },

  // ==================== JAKARTA WEST, NORTH, EAST & OTHERS ====================
  // 19. Cove Boulevard Kelapa Gading
  {
    id: 'cove-boulevard-kelapagading',
    name: 'Cove Boulevard Kelapa Gading (Google Maps Verified)',
    slug: 'cove-boulevard-kelapagading',
    type: 'Campur',
    city: 'Jakarta North',
    area: 'Kelapa Gading',
    address: 'Jl. Boulevard Raya LB 1 No. 8, Kelapa Gading, Jakarta Utara 14240',
    googleMapsUrl: 'https://maps.google.com/?q=Boulevard+Raya+Kelapa+Gading+Jakarta',
    coordinates: { lat: -6.1610, lng: 106.9050 },
    price: 3100000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Basement Parking', '24h Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Mall Kelapa Gading & LRT',
      rationale: 'Verified location on Boulevard Raya (Jakarta Utara). 4 min walk to Mall Kelapa Gading & LRT.',
      visionVerification: [
        'Google Maps Verified: Modern Suite Interior'
      ]
    },
    rating: 4.9,
    reviewCount: 152,
    rules: ['Parking sticker required'],
    nearbyPOIs: [
      { name: 'Mall Kelapa Gading (MKG)', distance: '300 m', time: '4 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cove Kelapa Gading',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Kelapa Gading Suite', size: '4 x 4 m', price: 3100000, available: 2 }
    ],
    description: 'Prime Boulevard Kelapa Gading location in North Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 20. Sunter Agung Co-Living
  {
    id: 'sunter-agung-coliving',
    name: 'Sunter Agung Co-Living (Google Maps Verified)',
    slug: 'sunter-agung-coliving',
    type: 'Campur',
    city: 'Jakarta North',
    area: 'Sunter',
    address: 'Jl. Sunter Agung Utara No. 12, Sunter Agung, Tanjung Priok, Jakarta Utara 14350',
    googleMapsUrl: 'https://maps.google.com/?q=Sunter+Agung+Utara+Jakarta+Utara',
    coordinates: { lat: -6.1484, lng: 106.8553 },
    price: 2100000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Balcony', 'Basement Parking', '24h Security'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Sunter Mall & JIExpo Kemayoran',
      rationale: 'Verified location in Sunter Agung (Jakarta Utara). Modern co-living near Sunter Mall & Kemayoran.',
      visionVerification: [
        'Google Maps Verified: Balcony with City View'
      ]
    },
    rating: 4.8,
    reviewCount: 96,
    rules: ['Parking sticker required'],
    nearbyPOIs: [
      { name: 'Sunter Mall', distance: '400 m', time: '5 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Sunter Co-Living',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Sunter Deluxe Studio', size: '3.5 x 4 m', price: 2100000, available: 2 }
    ],
    description: 'Modern residential co-living in Sunter Agung, North Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 21. PIK Golf Co-Living
  {
    id: 'pik-golf-co-living',
    name: 'PIK Golf Co-Living (Google Maps Verified)',
    slug: 'pik-golf-co-living',
    type: 'Campur',
    city: 'Jakarta North',
    area: 'Pantai Indah Kapuk',
    address: 'Jl. Pantai Indah Utara No. 18, Penjaringan, Jakarta Utara 14460',
    googleMapsUrl: 'https://maps.google.com/?q=Pantai+Indah+Utara+PIK+Jakarta+Utara',
    coordinates: { lat: -6.1100, lng: 106.7450 },
    price: 3500000,
    deposit: 1500000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Swimming Pool', 'Card Key Access'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • PIK Avenue & By The Sea Waterfront',
      rationale: 'Verified luxury co-living in Pantai Indah Kapuk (Jakarta Utara) near PIK Avenue & airport toll.',
      visionVerification: [
        'Google Maps Verified: Pool & Golf View'
      ]
    },
    rating: 4.9,
    reviewCount: 140,
    rules: ['Keycard lock'],
    nearbyPOIs: [
      { name: 'PIK Avenue Mall', distance: '400 m', time: '5 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola PIK Co-Living',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'PIK Luxury Studio', size: '4.5 x 4.5 m', price: 3500000, available: 1 }
    ],
    description: 'Exclusive Pantai Indah Kapuk residence in North Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 22. Rukita Balai Pustaka Rawamangun
  {
    id: 'rukita-balaipustaka-rawamangun',
    name: 'Rukita Balai Pustaka Rawamangun (Google Maps Verified)',
    slug: 'rukita-balaipustaka-rawamangun',
    type: 'Campur',
    city: 'Jakarta East',
    area: 'Rawamangun',
    address: 'Jl. Balai Pustaka Timur No. 12, Rawamangun, Pulo Gadung, Jakarta Timur 13220',
    googleMapsUrl: 'https://maps.google.com/?q=Balai+Pustaka+Rawamangun+Jakarta',
    coordinates: { lat: -6.1900, lng: 106.8850 },
    price: 2200000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Shared Kitchen', 'Motorbike Parking', '24h Security'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • UNJ & TransJakarta Pemuda',
      rationale: 'Verified location in Rawamangun (Jakarta Timur). 6 min walk to UNJ and TransJakarta Pemuda station.',
      visionVerification: [
        'Google Maps Verified: Student Desk & Chair'
      ]
    },
    rating: 4.8,
    reviewCount: 88,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Universitas Negeri Jakarta (UNJ)', distance: '600 m', time: '7 min walk', type: 'campus' }
    ],
    landlord: {
      name: 'Pak Agung Rawamangun',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Standard Rawamangun Single', size: '3.5 x 3.5 m', price: 2200000, available: 2 }
    ],
    description: 'Located on Balai Pustaka in Rawamangun, East Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 23. Kalibata Square Residence
  {
    id: 'kalibata-square-residence',
    name: 'Kalibata Square Residence (Google Maps Verified)',
    slug: 'kalibata-square-residence',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kalibata',
    address: 'Jl. Kalibata Utara II No. 10, Pancoran, Jakarta Selatan 12740',
    googleMapsUrl: 'https://maps.google.com/?q=Kalibata+Utara+Pancoran+Jakarta+Selatan',
    coordinates: { lat: -6.2550, lng: 106.8500 },
    price: 1600000,
    deposit: 400000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', '24h Access', 'Motorbike Parking'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Stasiun KRL Duren Kalibata',
      rationale: 'Verified budget place in Kalibata (Jakarta Selatan) 4 min walk to Stasiun KRL Duren Kalibata under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Split AC'
      ]
    },
    rating: 4.7,
    reviewCount: 80,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Duren Kalibata', distance: '350 m', time: '4 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Ibu Ratna Kalibata',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Kalibata Budget Room', size: '3 x 3 m', price: 1600000, available: 3 }
    ],
    description: 'Budget Kalibata boarding house in South Jakarta under 1.8jt.',
    availableFrom: 'Ready to Move In'
  },

  // 24. Graha Margonda UI Depok
  {
    id: 'graha-margonda-ui',
    name: 'Graha Margonda UI (Google Maps Verified)',
    slug: 'graha-margonda-ui',
    type: 'Campur',
    city: 'Depok',
    area: 'Margonda',
    address: 'Jl. Margonda Raya No. 350, Pondok Cina, Kec. Beji, Kota Depok 16424',
    googleMapsUrl: 'https://maps.google.com/?q=Margonda+Raya+Pondok+Cina+Depok',
    coordinates: { lat: -6.3720, lng: 106.8320 },
    price: 1650000,
    deposit: 400000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Study Table', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Universitas Indonesia (UI) & Stasiun Pondok Cina',
      rationale: 'Verified student room on Margonda Raya Depok. 3 min walk to UI Depok gate & Stasiun KRL Pondok Cina under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Student Study Desk'
      ]
    },
    rating: 4.8,
    reviewCount: 110,
    rules: ['Student ID required'],
    nearbyPOIs: [
      { name: 'Universitas Indonesia (UI) Gate', distance: '250 m', time: '3 min walk', type: 'campus' }
    ],
    landlord: {
      name: 'Pak Hendra Margonda',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'UI Student Studio', size: '3.5 x 3.5 m', price: 1650000, available: 2 }
    ],
    description: 'Located on Margonda Raya, Depok. Ideal for Universitas Indonesia (UI) students.',
    availableFrom: 'Ready to Move In'
  }
];
