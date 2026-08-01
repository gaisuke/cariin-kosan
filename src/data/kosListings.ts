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
  {
    id: 'cove-nine-setiabudi',
    name: 'Cove Nine Setiabudi (Verified Google Maps)',
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
      rationale: 'Scraped & verified place from Google Maps: Ideal budget < 2.5jt in Karet Kuningan Setiabudi, 4 min walk to MRT Setiabudi Astra.',
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
    description: 'Verified Google Maps Place: Modern co-living space in Karet Kuningan Setiabudi, equipped with high-speed internet, card key access, and walking access to Sudirman CBD.',
    availableFrom: 'Ready to Move In'
  },
  {
    id: 'cove-starhill-kemanggisan',
    name: 'Cove Starhill Kemanggisan (Verified Google Maps)',
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
      rationale: 'Scraped place near BINUS Syahdan & Anggrek campus. Features 150Mbps fiber internet and digital keypads.',
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
    description: 'Google Maps verified location in Kemanggisan Ilir III. Strategic student housing for BINUS University students with daily cleaning and high-speed fiber.',
    availableFrom: 'Ready to Move In'
  },
  {
    id: 'gryffindor-cisitu-itb',
    name: 'Gryffindor Loft Cisitu ITB (Verified Google Maps)',
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
      rationale: 'Scraped Google Maps place in Cisitu Indah, Coblong Bandung. Nordic loft aesthetic, 8 min walk to ITB Ganesha.',
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
    description: 'Verified Dago Bandung place: Scandinavian studio room in Cisitu Indah, favorite choice for ITB students and young creative professionals.',
    availableFrom: 'Ready to Move In'
  },
  {
    id: 'graha-lontar-margonda-ui',
    name: 'Graha Lontar Margonda UI (Verified Google Maps)',
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
      rationale: 'Verified Google Maps location on prime Margonda street right opposite UI campus and KRL train line.',
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
    description: 'Verified Margonda Depok place: Urban smart living located right opposite Stasiun KRL Pondok Cina and Universitas Indonesia campus.',
    availableFrom: 'Ready to Move In'
  },
  {
    id: 'wisma-undip-tembalang',
    name: 'Wisma UNDIP Hillside Tembalang (Verified Google Maps)',
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
  {
    id: 'puri-ipb-green-dramaga',
    name: 'Puri IPB Green Dramaga (Verified Google Maps)',
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
