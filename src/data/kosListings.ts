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
  city: 'Jakarta South' | 'Jakarta West' | 'Bogor' | 'Semarang' | 'Bandung' | 'Depok';
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
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', '24h Access', 'Motorbike Parking', 'Desk & Ergonomic Chair', 'Shared Kitchen'],
    gemmaMatch: {
      percentage: 97,
      badge: '97% Match • Quiet WFH Environment',
      rationale: 'Verified place in Karet Kuningan Setiabudi (Jakarta Selatan), 4 min walk to MRT Setiabudi Astra.',
      visionVerification: [
        'Google Maps Verified: Dedicated Study Desk & Chair',
        'Google Maps Verified: Window with Natural Daylight',
        'Google Maps Verified: Clean Ensuite Bathroom with Hot Shower',
        'Google Maps Verified: Split AC Unit & Card Key Access'
      ]
    },
    rating: 4.8,
    reviewCount: 128,
    rules: ['No smoking inside room', 'Quiet hours after 10 PM', 'Guest visits until 9 PM in lobby', 'Electronic access card provided'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Setiabudi Astra', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Sudirman Central Business District', distance: '1.2 km', time: '6 min drive', type: 'transit' },
      { name: 'Grand Indonesia Mall', distance: '2.1 km', time: '10 min drive', type: 'mall' },
      { name: 'Warung Makan Nasi Uduk Bu Sum', distance: '80 m', time: '1 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Cove Nine Setiabudi',
      phone: '622150996923',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Deluxe WFH Single', size: '3.5 x 4 m', price: 2450000, available: 2 },
      { name: 'Executive Balcony Suite', size: '4 x 4.5 m', price: 2850000, available: 1 }
    ],
    description: 'Verified Google Maps Place in Karet Kuningan, Setiabudi (Jakarta Selatan). High-speed internet, card key access, and quick access to Sudirman CBD.',
    availableFrom: 'Ready to Move In'
  },

  // 2. Blok M / Kebayoran Baru (Jakarta Selatan)
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
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Smart Key Lock', 'Rooftop Lounge', 'Motorbike Parking', 'Daily Housekeeping'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • MRT & Blok M Culinary Paradise',
      rationale: 'Verified place in Melawai, Kebayoran Baru (Jakarta Selatan). 2 min walk to MRT Blok M BCA & Little Tokyo eateries.',
      visionVerification: [
        'Google Maps Verified: Modern Minimalist Suite',
        'Google Maps Verified: Smart TV & High Speed WiFi Router',
        'Google Maps Verified: Rain Shower Bathroom'
      ]
    },
    rating: 4.8,
    reviewCount: 142,
    rules: ['Quiet hours after 10 PM', 'Keycard access required', 'No smoking in indoor corridors'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Blok M BCA', distance: '200 m', time: '2 min walk', type: 'transit' },
      { name: 'Blok M Plaza & Little Tokyo', distance: '350 m', time: '4 min walk', type: 'mall' },
      { name: 'M Bloc Space', distance: '500 m', time: '6 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Cove Urooms Blok M',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Executive Suite Blok M', size: '4 x 4 m', price: 3200000, available: 2 }
    ],
    description: 'Prime Kebayoran Baru location in South Jakarta. Walking distance to MRT Blok M, M Bloc Space, and popular coffee shops.',
    availableFrom: 'Ready to Move In'
  },

  // 3. Tebet (Jakarta Selatan)
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
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Shared Kitchenette', 'Motorbike Garage', '24h Security'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Tebet Eco Park & KRL Hub',
      rationale: 'Verified location in Tebet Timur (Jakarta Selatan). 5 min walk to Stasiun KRL Tebet & Tebet Eco Park.',
      visionVerification: [
        'Google Maps Verified: Ergonomic Desk & Office Chair',
        'Google Maps Verified: In-room AC Unit & Power Outlets',
        'Google Maps Verified: Clean Private Bathroom'
      ]
    },
    rating: 4.7,
    reviewCount: 98,
    rules: ['No smoking inside room', 'Curfew at 11 PM for visitors', 'Keyfob access'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Tebet', distance: '450 m', time: '5 min walk', type: 'transit' },
      { name: 'Tebet Eco Park', distance: '800 m', time: '10 min walk', type: 'transit' },
      { name: 'Pusat Kuliner Tebet Raya', distance: '300 m', time: '4 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Cove W Suites Tebet',
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

  // 4. Cilandak / Cipete (Jakarta Selatan)
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
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Smart TV', 'Basement Parking', '24h Security', 'Balcony'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • MRT Cipete & TB Simatupang',
      rationale: 'Verified location in Cilandak Tengah (Jakarta Selatan). Direct access to MRT Cipete Raya & Cilandak Town Square.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV',
        'Google Maps Verified: Balcony with City Garden View',
        'Google Maps Verified: Gated Car & Motorbike Garage'
      ]
    },
    rating: 4.8,
    reviewCount: 116,
    rules: ['Parking sticker required', 'No smoking indoors', 'Electronic door lock'],
    nearbyPOIs: [
      { name: 'Stasiun MRT Cipete Raya', distance: '500 m', time: '6 min walk', type: 'transit' },
      { name: 'Cilandak Town Square (Citos)', distance: '1.1 km', time: '4 min drive', type: 'mall' },
      { name: 'Kawasan Bisnis TB Simatupang', distance: '1.5 km', time: '6 min drive', type: 'transit' }
    ],
    landlord: {
      name: 'Pengelola Cove Urbanier Cilandak',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Urbanier Studio Cilandak', size: '4 x 4 m', price: 2900000, available: 2 }
    ],
    description: 'Modern residential co-living in Cilandak, South Jakarta. Perfect for professionals working along TB Simatupang corridor.',
    availableFrom: 'Ready to Move In'
  },

  // 5. Kuningan Barat (Jakarta Selatan)
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
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Co-working Lounge', 'Gym Access', 'Basement Parking'],
    gemmaMatch: {
      percentage: 99,
      badge: '99% Match • Premium Mega Kuningan Hub',
      rationale: 'Verified location in Kuningan Barat (Jakarta Selatan). Luxury WFH setup 3 min walk to TransJakarta Kuningan Barat.',
      visionVerification: [
        'Google Maps Verified: Executive Work Desk & Ergonomic Chair',
        'Google Maps Verified: Gym & Co-working Space Access',
        'Google Maps Verified: Ensuite Marble Bathroom'
      ]
    },
    rating: 4.9,
    reviewCount: 135,
    rules: ['Access card required', 'Quiet hours after 10 PM', 'No smoking indoors'],
    nearbyPOIs: [
      { name: 'Halte TransJakarta Kuningan Barat', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Kawasan Mega Kuningan & HR Rasuna Said', distance: '900 m', time: '5 min drive', type: 'transit' },
      { name: 'Kuningan City Mall', distance: '1.4 km', time: '7 min drive', type: 'mall' }
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
    description: 'Luxury co-living in heart of Kuningan, South Jakarta. Features private workspace, fitness area, and high-speed fiber.',
    availableFrom: 'Ready to Move In'
  },

  // 6. Radio Dalam / Pondok Indah (Jakarta Selatan)
  {
    id: 'radio-dalam-residence',
    name: 'Radio Dalam Residence (Google Maps Verified)',
    slug: 'radio-dalam-residence',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Pondok Indah',
    address: 'Jl. Radio Dalam Raya No. 42, Kebayoran Baru, Jakarta Selatan 12140',
    googleMapsUrl: 'https://maps.google.com/?q=Radio+Dalam+Raya+Jakarta+Selatan',
    coordinates: { lat: -6.2580, lng: 106.7880 },
    price: 2700000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Motorbike Garage', 'Shared Kitchenette', 'CCTV Security'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • Gandaria City & Pondok Indah',
      rationale: 'Verified place in Radio Dalam, Kebayoran Baru (Jakarta Selatan). 600m to Gandaria City Mall.',
      visionVerification: [
        'Google Maps Verified: Modern Single Room with Daylight Window',
        'Google Maps Verified: En-suite Bathroom with Hot Shower',
        'Google Maps Verified: Covered Garage'
      ]
    },
    rating: 4.7,
    reviewCount: 82,
    rules: ['No pets', 'Quiet hours from 10 PM', 'Visitor badge required'],
    nearbyPOIs: [
      { name: 'Gandaria City Mall', distance: '600 m', time: '7 min walk', type: 'mall' },
      { name: 'Pondok Indah Mall (PIM)', distance: '1.4 km', time: '5 min drive', type: 'mall' },
      { name: 'Pusat Kuliner Radio Dalam', distance: '100 m', time: '1 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Ibu Henny Radio Dalam',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Deluxe Radio Dalam Room', size: '3.5 x 4 m', price: 2700000, available: 2 }
    ],
    description: 'Strategic Kebayoran Baru location between Gandaria City and Pondok Indah in South Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 7. Pancoran / Kalibata (Jakarta Selatan)
  {
    id: 'pancoran-wfh-residence',
    name: 'Pancoran WFH Residence (Google Maps Verified)',
    slug: 'pancoran-wfh-residence',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Pancoran',
    address: 'Jl. Pancoran Barat VIII No. 22, Pancoran, Jakarta Selatan 12780',
    googleMapsUrl: 'https://maps.google.com/?q=Pancoran+Barat+Jakarta+Selatan',
    coordinates: { lat: -6.2480, lng: 106.8410 },
    price: 2300000,
    deposit: 1000000,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Motorbike Garage', 'Shared Pantry', '24h Access'],
    gemmaMatch: {
      percentage: 94,
      badge: '94% Match • Kalibata KRL & Tugu Pancoran',
      rationale: 'Verified location in Pancoran Barat (Jakarta Selatan). Easy access to KRL Duren Kalibata and MT Haryono office towers.',
      visionVerification: [
        'Google Maps Verified: Dedicated Study Desk',
        'Google Maps Verified: Split AC Unit',
        'Google Maps Verified: Clean Tiled Bathroom'
      ]
    },
    rating: 4.8,
    reviewCount: 90,
    rules: ['No smoking inside room', 'Curfew for visitors at 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Duren Kalibata', distance: '700 m', time: '8 min walk', type: 'transit' },
      { name: 'Tugu Pancoran & MT Haryono Corridor', distance: '850 m', time: '10 min walk', type: 'transit' },
      { name: 'Kalibata City Square', distance: '900 m', time: '10 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pak Agung Pancoran',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Standard WFH Pancoran', size: '3.5 x 3.5 m', price: 2300000, available: 3 }
    ],
    description: 'Affordable WFH boarding house in Pancoran, South Jakarta. Close to KRL train line and MT Haryono office belt.',
    availableFrom: 'Ready to Move In'
  },

  // 8. Kemanggisan (Jakarta Barat)
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
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', 'Motorbike Parking', '24h Access', 'Laundry Service', 'CCTV Security'],
    gemmaMatch: {
      percentage: 94,
      badge: '94% Match • BINUS Student Hub',
      rationale: 'Verified place in Kemanggisan near BINUS Syahdan & Anggrek campus with 150Mbps fiber internet.',
      visionVerification: [
        'Google Maps Verified: Compact Study Desk & Book Bookshelf',
        'Google Maps Verified: Split AC & Modern Tile Flooring',
        'Google Maps Verified: Secure Digital Keypad Door Lock'
      ]
    },
    rating: 4.7,
    reviewCount: 94,
    rules: ['No pets allowed', 'Keep shared pantry clean', 'Access card key fob required'],
    nearbyPOIs: [
      { name: 'BINUS Anggrek & Syahdan Campus', distance: '250 m', time: '3 min walk', type: 'campus' },
      { name: 'Stasiun KRL Palmerah', distance: '1.8 km', time: '7 min ride', type: 'transit' },
      { name: 'Central Park Mall', distance: '3.2 km', time: '12 min drive', type: 'mall' },
      { name: 'Ayam Geprek Kampus BINUS', distance: '50 m', time: '1 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Pengelola Cove Starhill',
      phone: '628111546477',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 15 minutes'
    },
    roomTypes: [
      { name: 'Standard Student Room', size: '3 x 3 m', price: 1850000, available: 3 }
    ],
    description: 'Verified location in Kemanggisan Ilir III. Strategic student housing for BINUS University students.',
    availableFrom: 'Ready to Move In'
  },

  // 9. Cisitu (Bandung)
  {
    id: 'gryffindor-cisitu-itb',
    name: 'Gryffindor Loft Cisitu ITB (Google Maps Verified)',
    slug: 'gryffindor-loft-cisitu-itb',
    type: 'Campur',
    city: 'Bandung',
    area: 'Cisitu',
    address: 'Jl. Cisitu Indah VI No. 12, Dago, Kec. Coblong, Kota Bandung, Jawa Barat 40135',
    googleMapsUrl: 'https://maps.google.com/?q=Cisitu+Indah+ITB+Bandung',
    coordinates: { lat: -6.8872, lng: 107.6155 },
    price: 2100000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Hot Water Shower', 'Co-working Cafe Lounge', 'Balcony', 'Motorbike Garage', 'Daily Cleaning'],
    gemmaMatch: {
      percentage: 98,
      badge: '98% Match • Dago Hillside Loft',
      rationale: 'Verified Google Maps place in Cisitu Indah, Coblong Bandung. Nordic loft aesthetic, 8 min walk to ITB Ganesha.',
      visionVerification: [
        'Google Maps Verified: Nordic Loft Interior & Wood Accents',
        'Google Maps Verified: Private Balcony overlooking Dago Hills',
        'Google Maps Verified: Fiber Router per floor'
      ]
    },
    rating: 4.9,
    reviewCount: 112,
    rules: ['Quiet hours from 10 PM', 'Recycling bins available', 'No shoes inside bedroom area'],
    nearbyPOIs: [
      { name: 'Institut Teknologi Bandung (ITB)', distance: '750 m', time: '8 min walk', type: 'campus' },
      { name: 'Jl. Ir. H. Juanda (Dago)', distance: '900 m', time: '10 min walk', type: 'food' },
      { name: 'Cihampelas Walk Mall', distance: '2.4 km', time: '9 min drive', type: 'mall' }
    ],
    landlord: {
      name: 'Pengelola Cisitu Loft Dago',
      phone: '6281809090909',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Instant'
    },
    roomTypes: [
      { name: 'Studio Loft Unit', size: '4 x 4 m', price: 2100000, available: 1 }
    ],
    description: 'Verified Dago Bandung place: Scandinavian studio room in Cisitu Indah for ITB students.',
    availableFrom: 'Ready to Move In'
  },

  // 10. Margonda (Depok)
  {
    id: 'graha-lontar-margonda-ui',
    name: 'Graha Lontar Margonda UI (Google Maps Verified)',
    slug: 'graha-lontar-margonda-ui',
    type: 'Campur',
    city: 'Depok',
    area: 'Margonda',
    address: 'Jl. Margonda Raya No. 310, Pondok Cina, Kec. Beji, Kota Depok, Jawa Barat 16424',
    googleMapsUrl: 'https://maps.google.com/?q=Margonda+Raya+Pondok+Cina+Depok',
    coordinates: { lat: -6.3685, lng: 106.8330 },
    price: 1950000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Smart TV with Netflix', '24h Access', 'Access Card', 'Elevator', 'Basement Parking'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • KRL Transit & UI Hub',
      rationale: 'Verified location on prime Margonda street right opposite UI campus and KRL train line.',
      visionVerification: [
        'Google Maps Verified: 32" Smart TV Wall-mounted',
        'Google Maps Verified: Keycard Electronic Door Lock',
        'Google Maps Verified: Modern Ensuite Bathroom with Rain Shower'
      ]
    },
    rating: 4.8,
    reviewCount: 86,
    rules: ['Keycard lock mandatory', 'No smoking in indoor corridors', 'Parking sticker required for vehicles'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Universitas Indonesia', distance: '300 m', time: '4 min walk', type: 'transit' },
      { name: 'Margo City Mall', distance: '650 m', time: '7 min walk', type: 'mall' },
      { name: 'Universitas Indonesia (UI) Gate', distance: '500 m', time: '6 min walk', type: 'campus' }
    ],
    landlord: {
      name: 'Pak Agung Margonda',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Smart Single Studio', size: '3.5 x 4 m', price: 1950000, available: 3 }
    ],
    description: 'Verified Margonda Depok place: Urban smart living located right opposite Stasiun KRL Pondok Cina and UI campus.',
    availableFrom: 'Ready to Move In'
  },

  // 11. Tembalang (Semarang)
  {
    id: 'wisma-undip-tembalang',
    name: 'Wisma UNDIP Hillside Tembalang (Google Maps Verified)',
    slug: 'wisma-undip-tembalang',
    type: 'Putra',
    city: 'Semarang',
    area: 'Tembalang',
    address: 'Jl. Banjarsari No. 32, Tembalang, Kec. Tembalang, Kota Semarang, Jawa Tengah 50275',
    googleMapsUrl: 'https://maps.google.com/?q=Banjarsari+Tembalang+Semarang',
    coordinates: { lat: -7.0538, lng: 110.4391 },
    price: 1200000,
    deposit: 300000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Water Heater', 'Large Motorbike Garage', 'Rooftop Chill Area', 'Water Dispenser'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • UNDIP Student Choice',
      rationale: 'Verified Banjarsari Tembalang place: 600m walk to UNDIP gate with rooftop study lounge.',
      visionVerification: [
        'Google Maps Verified: Rooftop Study Lounge Access',
        'Google Maps Verified: Modern Tiled Bathroom with Hot Shower',
        'Google Maps Verified: Full Size Single Bed with Fresh Linen'
      ]
    },
    rating: 4.9,
    reviewCount: 78,
    rules: ['Male students/workers only', 'No noise after 11 PM', 'Shared water dispenser included'],
    nearbyPOIs: [
      { name: 'Universitas Diponegoro (UNDIP) Gate', distance: '600 m', time: '7 min walk', type: 'campus' },
      { name: 'Transmart Setiabudi Semarang', distance: '2.5 km', time: '8 min drive', type: 'mall' },
      { name: 'Warung Makan Nasi Goreng Babat', distance: '100 m', time: '2 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Mas Budi Tembalang',
      phone: '6282133445566',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 5 minutes'
    },
    roomTypes: [
      { name: 'Hillview Single', size: '3 x 4 m', price: 1200000, available: 2 }
    ],
    description: 'Verified Tembalang Semarang place: Popular student house on Jl. Banjarsari near UNDIP campus.',
    availableFrom: 'Ready to Move In'
  },

  // 12. Dramaga (Bogor)
  {
    id: 'puri-ipb-green-dramaga',
    name: 'Puri IPB Green Dramaga (Google Maps Verified)',
    slug: 'puri-ipb-green-dramaga',
    type: 'Putri',
    city: 'Bogor',
    area: 'Dramaga',
    address: 'Jl. Raya Dramaga No. 88, Babakan, Kec. Dramaga, Kabupaten Bogor, Jawa Barat 16680',
    googleMapsUrl: 'https://maps.google.com/?q=Raya+Dramaga+Babakan+Bogor',
    coordinates: { lat: -6.5592, lng: 106.7265 },
    price: 1350000,
    deposit: 300000,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi', 'AC', 'Private Bathroom', '24h Security Guard', 'Car & Motorbike Parking', 'Shared Kitchen & Refrigerator', 'Garden Courtyard'],
    gemmaMatch: {
      percentage: 92,
      badge: '92% Match • IPB Eco Living',
      rationale: 'Verified place in Dramaga Bogor: 24/7 security guard, female-only boarding house near IPB Dramaga gate.',
      visionVerification: [
        'Google Maps Verified: Spacious Room with Natural Garden View',
        'Google Maps Verified: Private Bathroom with Exhaust Fan',
        'Google Maps Verified: Covered Motorbike Parking Bay'
      ]
    },
    rating: 4.7,
    reviewCount: 64,
    rules: ['Female occupants only', 'Curfew at 11 PM', 'No male guests past reception lounge'],
    nearbyPOIs: [
      { name: 'Gerbang Utama IPB Dramaga', distance: '800 m', time: '5 min shuttle', type: 'campus' },
      { name: 'Toserba Yogya Dramaga', distance: '1.1 km', time: '4 min drive', type: 'mall' },
      { name: 'Kantin IPB Bara', distance: '400 m', time: '5 min walk', type: 'food' }
    ],
    landlord: {
      name: 'Ibu Ratna Dramaga',
      phone: '6281599887766',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 30 minutes'
    },
    roomTypes: [
      { name: 'Garden Single Room', size: '3.5 x 3.5 m', price: 1350000, available: 4 }
    ],
    description: 'Verified Dramaga Bogor place: Peaceful, leafy female-only sanctuary near IPB Dramaga campus.',
    availableFrom: 'Ready to Move In'
  }
];
