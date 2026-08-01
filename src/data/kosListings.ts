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
  // 1. Setiabudi (Jakarta Selatan)
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
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Parking', 'Desk & Ergonomic Chair', 'Shared Kitchen'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Quiet WFH Environment',
      rationale: 'Verified place in Karet Kuningan Setiabudi (Jakarta Selatan), 4 min walk to MRT Setiabudi Astra.',
      visionVerification: [
        'Google Maps Verified: Dedicated Study Desk & Chair',
        'Google Maps Verified: Window with Natural Daylight',
        'Google Maps Verified: Clean Ensuite Bathroom with Hot Shower'
      ]
    },
    rating: 4.8,
    reviewCount: 128,
    rules: ['No smoking inside room', 'Quiet hours after 10 PM', 'Electronic access card provided'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Setiabudi Astra', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Sudirman Central Business District', distance: '1.2 km', time: '6 min drive', type: 'transit' }
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
    description: 'Verified Google Maps Place in Karet Kuningan, Setiabudi (Jakarta Selatan). High-speed internet, card key access, and quick access to Sudirman CBD.',
    availableFrom: 'Ready to Move In'
  },

  // 2. Menteng (Jakarta Pusat)
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
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Shared Kitchen', 'Lounge Area', 'Daily Cleaning'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Menteng Diplomatic Hub',
      rationale: 'Verified location in Menteng (Jakarta Pusat). 5 min to Stasiun Cikini & Thamrin CBD.',
      visionVerification: [
        'Google Maps Verified: Minimalist Executive Suite',
        'Google Maps Verified: Ensuite Marble Bathroom',
        'Google Maps Verified: Smart Keycard Lock'
      ]
    },
    rating: 4.8,
    reviewCount: 110,
    rules: ['No pets', 'Quiet hours after 10 PM', 'Keycard access'],
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
      { name: 'Menteng Executive Room', size: '4 x 4.5 m', price: 3400000, available: 2 }
    ],
    description: 'Exclusive Menteng co-living in Central Jakarta. High security, luxury furnishings, and fast fiber internet.',
    availableFrom: 'Ready to Move In'
  },

  // 3. Tanah Abang (Jakarta Pusat)
  {
    id: 'rukita-serenity-kebonkacang',
    name: 'Rukita Serenity Kebon Kacang (Google Maps Verified)',
    slug: 'rukita-serenity-kebonkacang',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Tanah Abang',
    address: 'Jl. Kebon Kacang 9 No. 14, Tanah Abang, Jakarta Pusat 10240',
    googleMapsUrl: 'https://maps.google.com/?q=Kebon+Kacang+9+Tanah+Abang+Jakarta',
    coordinates: { lat: -6.1950, lng: 106.8150 },
    price: 2800000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Smart TV', '24h Security', 'Pantry'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Grand Indonesia & Plaza Indonesia',
      rationale: 'Verified Kebon Kacang location (Jakarta Pusat). 3 min walk to Grand Indonesia & Plaza Indonesia malls.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV',
        'Google Maps Verified: Modern Tiled Bathroom'
      ]
    },
    rating: 4.7,
    reviewCount: 95,
    rules: ['Quiet hours after 10 PM', 'Visitors lobby access only'],
    nearbyPOIs: [
      { name: 'Grand Indonesia & Plaza Indonesia', distance: '300 m', time: '3 min walk', type: 'mall' },
      { name: 'Stasiun KRL Tanah Abang', distance: '800 m', time: '10 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Ibu Henny Kebon Kacang',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Studio Kebon Kacang', size: '3.5 x 4 m', price: 2800000, available: 1 }
    ],
    description: 'Located in Kebon Kacang, Central Jakarta. Walking access to major shopping malls and Thamrin CBD.',
    availableFrom: 'Ready to Move In'
  },

  // 4. Tanjung Duren / Grogol (Jakarta Barat)
  {
    id: 'cove-tanjung-duren',
    name: 'Cove Tanjung Duren (Google Maps Verified)',
    slug: 'cove-tanjung-duren',
    type: 'Campur',
    city: 'Jakarta West',
    area: 'Grogol',
    address: 'Jl. Tanjung Duren Raya No. 45, Grogol Petamburan, Jakarta Barat 11470',
    googleMapsUrl: 'https://maps.google.com/?q=Tanjung+Duren+Raya+Jakarta+Barat',
    coordinates: { lat: -6.1645, lng: 106.7905 },
    price: 2300000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Motorbike Garage', 'Laundry Service', '24h Security'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • UNTAR, Trisakti & Central Park',
      rationale: 'Verified location in Tanjung Duren (Jakarta Barat). 5 min walk to UNTAR/Trisakti and Central Park Mall.',
      visionVerification: [
        'Google Maps Verified: Student Study Desk & Shelf',
        'Google Maps Verified: Split AC Unit'
      ]
    },
    rating: 4.8,
    reviewCount: 130,
    rules: ['Keep shared areas clean', 'Access card lock'],
    nearbyPOIs: [
      { name: 'Kampus UNTAR & Trisakti', distance: '400 m', time: '5 min walk', type: 'campus' },
      { name: 'Central Park Mall & Neo Soho', distance: '600 m', time: '7 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cove Tanjung Duren',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Deluxe Student Studio', size: '3.5 x 3.5 m', price: 2300000, available: 3 }
    ],
    description: 'Vibrant Tanjung Duren location in West Jakarta. Favorite choice for UNTAR and Trisakti students.',
    availableFrom: 'Ready to Move In'
  },

  // 5. Kelapa Gading (Jakarta Utara)
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
        'Google Maps Verified: Modern Suite Interior',
        'Google Maps Verified: Secured Basement Parking'
      ]
    },
    rating: 4.9,
    reviewCount: 152,
    rules: ['Parking sticker required', 'No smoking in indoor corridors'],
    nearbyPOIs: [
      { name: 'Mall Kelapa Gading (MKG)', distance: '300 m', time: '4 min walk', type: 'mall' },
      { name: 'Stasiun LRT Kelapa Gading', distance: '500 m', time: '6 min walk', type: 'transit' }
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
    description: 'Prime Boulevard Kelapa Gading location in North Jakarta. Close to shopping malls, culinary centers, and LRT transit.',
    availableFrom: 'Ready to Move In'
  },

  // 6. Rawamangun (Jakarta Timur)
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
        'Google Maps Verified: Student Desk & Chair',
        'Google Maps Verified: Clean Ensuite Bathroom'
      ]
    },
    rating: 4.8,
    reviewCount: 88,
    rules: ['Quiet hours after 10 PM', 'Keep shared kitchen clean'],
    nearbyPOIs: [
      { name: 'Universitas Negeri Jakarta (UNJ)', distance: '600 m', time: '7 min walk', type: 'campus' },
      { name: 'Halte TransJakarta Pemuda Rawamangun', distance: '400 m', time: '5 min walk', type: 'transit' }
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
    description: 'Located on Balai Pustaka in Rawamangun, East Jakarta. Great location for UNJ students and East Jakarta commuters.',
    availableFrom: 'Ready to Move In'
  },

  // 7. Kemang (Jakarta Selatan)
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
        'Google Maps Verified: Pool & Garden View',
        'Google Maps Verified: Luxury Furnished Suite'
      ]
    },
    rating: 4.9,
    reviewCount: 160,
    rules: ['Access card lock', 'No loud noise after 10 PM'],
    nearbyPOIs: [
      { name: 'Kemang Village Mall', distance: '400 m', time: '5 min walk', type: 'mall' },
      { name: 'Como Park Kemang', distance: '600 m', time: '7 min walk', type: 'food' }
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

  // 8. Senopati / SCBD (Jakarta Selatan)
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
      badge: '99% Match • SCBD Financial District',
      rationale: 'Verified location on Senopati street (Jakarta Selatan). 5 min walk to Pacific Place SCBD.',
      visionVerification: [
        'Google Maps Verified: Executive Desk & Smart TV',
        'Google Maps Verified: Modern Marble Bathroom'
      ]
    },
    rating: 4.9,
    reviewCount: 145,
    rules: ['Access card mandatory', 'No smoking indoors'],
    nearbyPOIs: [
      { name: 'Pacific Place SCBD', distance: '500 m', time: '6 min walk', type: 'mall' },
      { name: 'Stasiun MRT Istora Mandiri', distance: '700 m', time: '8 min walk', type: 'transit' }
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
    description: 'Prime Senopati address in Kebayoran Baru, South Jakarta. Ideal for SCBD corporate professionals.',
    availableFrom: 'Ready to Move In'
  },

  // 9. Blok M (Jakarta Selatan)
  {
    id: 'cove-urooms-blokm',
    name: 'Cove Urooms Blok M (Google Maps Verified)',
    slug: 'cove-urooms-blokm',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Blok M',
    address: 'Jl. Melawai VI No. 28, Kebayoran Baru, Jakarta Selatan 12160',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Urooms+Blok+M+Jakarta',
    coordinates: { lat: -6.2440, lng: 106.7990 },
    price: 3200000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart Key Lock', 'Rooftop Lounge', 'Motorbike Parking'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • MRT & Blok M Culinary Paradise',
      rationale: 'Verified place in Melawai (Jakarta Selatan). 2 min walk to MRT Blok M BCA & Little Tokyo eateries.',
      visionVerification: [
        'Google Maps Verified: Modern Minimalist Suite',
        'Google Maps Verified: Smart TV & High Speed WiFi'
      ]
    },
    rating: 4.8,
    reviewCount: 142,
    rules: ['Quiet hours after 10 PM', 'Keycard access required'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Blok M BCA', distance: '200 m', time: '2 min walk', type: 'transit' },
      { name: 'Blok M Plaza & Little Tokyo', distance: '350 m', time: '4 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cove Urooms',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Executive Suite Blok M', size: '4 x 4 m', price: 3200000, available: 2 }
    ],
    description: 'Prime Kebayoran Baru location in South Jakarta. Walking distance to MRT Blok M and M Bloc Space.',
    availableFrom: 'Ready to Move In'
  },

  // 10. Tebet (Jakarta Selatan)
  {
    id: 'cove-wsuites-tebet',
    name: 'Cove W Suites Tebet (Google Maps Verified)',
    slug: 'cove-wsuites-tebet',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Tebet',
    address: 'Jl. Tebet Timur Dalam II No. 15, Tebet, Jakarta Selatan 12820',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+W+Suites+Tebet+Jakarta',
    coordinates: { lat: -6.2250, lng: 106.8550 },
    price: 2600000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Shared Kitchenette', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Tebet Eco Park & KRL Hub',
      rationale: 'Verified location in Tebet Timur (Jakarta Selatan). 5 min walk to Stasiun KRL Tebet & Tebet Eco Park.',
      visionVerification: [
        'Google Maps Verified: Ergonomic Desk & Office Chair',
        'Google Maps Verified: In-room AC Unit'
      ]
    },
    rating: 4.7,
    reviewCount: 98,
    rules: ['No smoking inside room', 'Keyfob access'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Tebet', distance: '450 m', time: '5 min walk', type: 'transit' },
      { name: 'Tebet Eco Park', distance: '800 m', time: '10 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove W Suites',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 15 minutes'
    },
    roomTypes: [
      { name: 'Deluxe Tebet Single', size: '3.5 x 4 m', price: 2600000, available: 3 }
    ],
    description: 'Located in vibrant Tebet, South Jakarta. Close to KRL train line, parks, and hipster eateries.',
    availableFrom: 'Ready to Move In'
  },

  // 11. Cilandak (Jakarta Selatan)
  {
    id: 'cove-urbanier-cilandak',
    name: 'Cove Urbanier Cilandak (Google Maps Verified)',
    slug: 'cove-urbanier-cilandak',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Cilandak',
    address: 'Jl. Cilandak Tengah No. 18, Cilandak, Jakarta Selatan 12430',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Urbanier+Cilandak+Jakarta',
    coordinates: { lat: -6.2910, lng: 106.7980 },
    price: 2900000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Basement Parking', 'Balcony'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • MRT Cipete & TB Simatupang',
      rationale: 'Verified location in Cilandak Tengah (Jakarta Selatan). Direct access to MRT Cipete Raya & Citos.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV',
        'Google Maps Verified: Balcony with City Garden View'
      ]
    },
    rating: 4.8,
    reviewCount: 116,
    rules: ['Parking sticker required', 'No smoking indoors'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Cipete Raya', distance: '500 m', time: '6 min walk', type: 'transit' },
      { name: 'Cilandak Town Square (Citos)', distance: '1.1 km', time: '4 min drive', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cove Urbanier',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Urbanier Studio Cilandak', size: '4 x 4 m', price: 2900000, available: 2 }
    ],
    description: 'Modern residential co-living in Cilandak, South Jakarta. Perfect for professionals along TB Simatupang.',
    availableFrom: 'Ready to Move In'
  },

  // 12. Kuningan Barat (Jakarta Selatan)
  {
    id: 'cove-centralone-kuningan',
    name: 'Cove Central One Kuningan (Google Maps Verified)',
    slug: 'cove-centralone-kuningan',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Kuningan',
    address: 'Jl. Kuningan Barat No. 8, Mampang Prapatan, Jakarta Selatan 12710',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Central+One+Kuningan+Jakarta',
    coordinates: { lat: -6.2350, lng: 106.8230 },
    price: 3500000,
    deposit: 1500000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Co-working Lounge', 'Gym Access'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • Premium Mega Kuningan Hub',
      rationale: 'Verified location in Kuningan Barat (Jakarta Selatan). Luxury WFH setup 3 min walk to TransJakarta.',
      visionVerification: [
        'Google Maps Verified: Executive Work Desk & Chair',
        'Google Maps Verified: Gym Access'
      ]
    },
    rating: 4.9,
    reviewCount: 135,
    rules: ['Access card required', 'Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Halte TransJakarta Kuningan Barat', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Mega Kuningan & HR Rasuna Said', distance: '900 m', time: '5 min drive', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove Central One',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'Executive Suite Kuningan', size: '4.5 x 4.5 m', price: 3500000, available: 1 }
    ],
    description: 'Luxury co-living in heart of Kuningan, South Jakarta. Features private workspace, gym, and fiber WiFi.',
    availableFrom: 'Ready to Move In'
  }
];
