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
  // 1. Sudirman / Karet (Jakarta Selatan) - BUDGET 1.7JT
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
        'Google Maps Verified: Clean Bedroom with AC',
        'Google Maps Verified: Walkable access to Sudirman towers'
      ]
    },
    rating: 4.8,
    reviewCount: 88,
    rules: ['Quiet hours after 10 PM', 'Access card provided'],
    nearbyPOIs: [
      { name: 'Sudirman Central Business District (CBD)', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Stasiun MRT Setiabudi Astra', distance: '450 m', time: '5 min walk', type: 'transit' },
      { name: 'Sampoerna Strategic Square Sudirman', distance: '500 m', time: '6 min walk', type: 'transit' }
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
    description: 'Affordable Sudirman boarding house in Karet Semanggi, South Jakarta under 1.8jt. 4 min walk to Sudirman CBD towers and MRT Setiabudi.',
    availableFrom: 'Ready to Move In'
  },

  // 2. Sudirman Park / Sahid (Jakarta Pusat) - BUDGET 1.9JT
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
        'Google Maps Verified: Modern Room with AC',
        'Google Maps Verified: High Speed WiFi Router'
      ]
    },
    rating: 4.8,
    reviewCount: 92,
    rules: ['Keyfob access required'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Sudirman & MRT Dukuh Atas', distance: '500 m', time: '6 min walk', type: 'transit' },
      { name: 'Sudirman Sahid Center', distance: '350 m', time: '4 min walk', type: 'transit' },
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
    description: 'Located in Karet Tengsin, Central Jakarta right off Sudirman boulevard under 2jt. Walking distance to KRL Sudirman and Citywalk.',
    availableFrom: 'Ready to Move In'
  },

  // 3. Kelapa Gading (Jakarta Utara) - 3.1JT
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
    rules: ['Parking sticker required'],
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

  // 4. Sunter (Jakarta Utara) - 2.1JT
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
      { name: 'Sunter Mall', distance: '400 m', time: '5 min walk', type: 'mall' },
      { name: 'JIExpo Kemayoran', distance: '1.5 km', time: '6 min drive', type: 'transit' }
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
    description: 'Modern residential co-living in Sunter Agung, North Jakarta. Close to Sunter Mall, Kemayoran, and Ancol.',
    availableFrom: 'Ready to Move In'
  },

  // 5. Rawamangun (Jakarta Timur) - 2.2JT
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

  // 6. Kemanggisan / BINUS (Jakarta Barat) - 1.85JT
  {
    id: 'cove-starhill-kemanggisan',
    name: 'Cove Starhill Kemanggisan (Google Maps Verified)',
    slug: 'cove-starhill-kemanggisan',
    type: 'Campur',
    city: 'Jakarta West',
    area: 'Kemanggisan',
    address: 'Jl. Kemanggisan Ilir III No. 32, RT.5/RW.3, Kemanggisan, Kec. Palmerah, Jakarta Barat 11480',
    googleMapsUrl: 'https://maps.google.com/?q=Cove+Starhill+Kemanggisan+Jakarta',
    coordinates: { lat: -6.2015, lng: 106.7905 },
    price: 1850000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Motorbike Parking', '24h Access', 'Laundry Service', 'CCTV Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • BINUS Student Hub & Fast 150Mbps WiFi',
      rationale: 'Verified place in Kemanggisan near BINUS Syahdan & Anggrek campus with 150Mbps fiber internet & KRL access under 2jt.',
      visionVerification: [
        'Google Maps Verified: Compact Study Desk & Book Bookshelf'
      ]
    },
    rating: 4.8,
    reviewCount: 94,
    rules: ['No pets allowed'],
    nearbyPOIs: [
      { name: 'BINUS Anggrek & Syahdan Campus', distance: '250 m', time: '3 min walk', type: 'campus' },
      { name: 'Stasiun KRL Palmerah', distance: '1.8 km', time: '7 min ride', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove Starhill',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 15 minutes'
    },
    roomTypes: [
      { name: 'Standard Student Room', size: '3 x 3.5 m', price: 1850000, available: 3 }
    ],
    description: 'Verified location in Kemanggisan Ilir III near BINUS. Features fast 150Mbps fiber internet, AC, en-suite bathroom, and KRL Palmerah access.',
    availableFrom: 'Ready to Move In'
  },

  // 7. Salemba (Jakarta Pusat) - 1.75JT
  {
    id: 'rukita-salemba-residence',
    name: 'Rukita Salemba Residence (Google Maps Verified)',
    slug: 'rukita-salemba-residence',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Salemba',
    address: 'Jl. Salemba Raya No. 18, Kec. Senen, Jakarta Pusat 10430',
    googleMapsUrl: 'https://maps.google.com/?q=Salemba+Raya+Jakarta+Pusat',
    coordinates: { lat: -6.1925, lng: 106.8524 },
    price: 1750000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Shared Kitchen', '24h Security'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • FKUI & RSCM Medical Hub',
      rationale: 'Verified location in Salemba (Jakarta Pusat). 3 min walk to FKUI & RSCM hospital.',
      visionVerification: [
        'Google Maps Verified: Single Study Desk'
      ]
    },
    rating: 4.8,
    reviewCount: 112,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'FKUI & RSCM Salemba', distance: '300 m', time: '3 min walk', type: 'campus' },
      { name: 'Stasiun KRL Cikini', distance: '800 m', time: '10 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Rukita Salemba',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Medical Student Room', size: '3.5 x 3.5 m', price: 1750000, available: 2 }
    ],
    description: 'Located on Salemba Raya, Central Jakarta. Ideal for FKUI students, doctors, and RSCM medical staff.',
    availableFrom: 'Ready to Move In'
  },

  // 8. Setiabudi Premium (Jakarta Selatan) - 2.45JT
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
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Parking', 'Desk & Ergonomic Chair'],
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
      { name: 'Stasiun MRT Setiabudi Astra', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Sudirman Central Business District (CBD)', distance: '1.2 km', time: '6 min drive', type: 'transit' }
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
    description: 'Verified Google Maps Place in Karet Kuningan, Setiabudi near Sudirman CBD. High-speed internet, card key access.',
    availableFrom: 'Ready to Move In'
  },

  // 9. Senopati / SCBD (Jakarta Selatan) - 3.8JT
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
      { name: 'Pacific Place SCBD & Sudirman CBD', distance: '500 m', time: '6 min walk', type: 'mall' },
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
    description: 'Prime Senopati address in Kebayoran Baru, South Jakarta. Ideal for SCBD and Sudirman corporate professionals.',
    availableFrom: 'Ready to Move In'
  },

  // 10. Kemang (Jakarta Selatan) - 3.6JT
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

  // 11. Pluit / Muara Karang (Jakarta Utara) - 2.8JT
  {
    id: 'pluit-muara-karang-suite',
    name: 'Pluit Muara Karang Suite (Google Maps Verified)',
    slug: 'pluit-muara-karang-suite',
    type: 'Campur',
    city: 'Jakarta North',
    area: 'Pluit',
    address: 'Jl. Pluit Karang Cantik No. 8, Pluit, Penjaringan, Jakarta Utara 14450',
    googleMapsUrl: 'https://maps.google.com/?q=Pluit+Karang+Cantik+Jakarta+Utara',
    coordinates: { lat: -6.1154, lng: 106.7906 },
    price: 2800000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', '24h Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Pluit Village & Muara Karang Culinary',
      rationale: 'Verified location in Pluit (Jakarta Utara). 5 min walk to Pluit Village Mall & Muara Karang seafood.',
      visionVerification: [
        'Google Maps Verified: Smart TV & WiFi'
      ]
    },
    rating: 4.8,
    reviewCount: 120,
    rules: ['Keycard access required'],
    nearbyPOIs: [
      { name: 'Pluit Village Mall', distance: '500 m', time: '6 min walk', type: 'mall' },
      { name: 'Pusat Kuliner Muara Karang', distance: '300 m', time: '4 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Pluit Suite',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Pluit Executive Suite', size: '4 x 4 m', price: 2800000, available: 1 }
    ],
    description: 'Located in Pluit, North Jakarta. Close to Pluit Village, Muara Karang culinary strip, and Soekarno-Hatta airport toll.',
    availableFrom: 'Ready to Move In'
  },

  // 12. Puri Indah (Jakarta Barat) - 3.2JT
  {
    id: 'puri-indah-executive-suite',
    name: 'Puri Indah Executive Suite (Google Maps Verified)',
    slug: 'puri-indah-executive-suite',
    type: 'Campur',
    city: 'Jakarta West',
    area: 'Puri Indah',
    address: 'Jl. Puri Indah Raya No. 18, Kembangan, Jakarta Barat 11610',
    googleMapsUrl: 'https://maps.google.com/?q=Puri+Indah+Raya+Jakarta+Barat',
    coordinates: { lat: -6.1880, lng: 106.7350 },
    price: 3200000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Basement Parking', '24h Security'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Puri Indah Mall & Lippo Mall Puri',
      rationale: 'Verified location in Puri Indah (Jakarta Barat). 4 min walk to Puri Indah Mall & Lippo Mall Puri.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV'
      ]
    },
    rating: 4.9,
    reviewCount: 110,
    rules: ['Access card required'],
    nearbyPOIs: [
      { name: 'Puri Indah Mall', distance: '300 m', time: '4 min walk', type: 'mall' },
      { name: 'Lippo Mall Puri', distance: '600 m', time: '7 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Puri Executive',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Puri Studio Suite', size: '4 x 4 m', price: 3200000, available: 2 }
    ],
    description: 'Executive co-living in Puri Indah, West Jakarta. Walking distance to Puri Indah Mall and Lippo Mall Puri.',
    availableFrom: 'Ready to Move In'
  }
];
