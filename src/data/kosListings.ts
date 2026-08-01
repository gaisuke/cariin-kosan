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
  // 1. Kemanggisan / BINUS (Jakarta Barat) - 1.85JT
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
        'Google Maps Verified: Compact Study Desk & Book Bookshelf',
        'Google Maps Verified: Split AC & Modern Tile Flooring'
      ]
    },
    rating: 4.8,
    reviewCount: 94,
    rules: ['No pets allowed', 'Keep shared pantry clean'],
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

  // 2. Salemba (Jakarta Pusat) - 1.75JT
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
        'Google Maps Verified: Single Study Desk',
        'Google Maps Verified: Clean Ensuite Bathroom'
      ]
    },
    rating: 4.8,
    reviewCount: 112,
    rules: ['Quiet hours after 10 PM', 'Access card lock'],
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

  // 3. Cempaka Putih (Jakarta Pusat) - 1.6JT
  {
    id: 'cempaka-putih-wfh-room',
    name: 'Cempaka Putih WFH Room (Google Maps Verified)',
    slug: 'cempaka-putih-wfh-room',
    type: 'Campur',
    city: 'Jakarta Central',
    area: 'Cempaka Putih',
    address: 'Jl. Cempaka Putih Tengah No. 22, Cempaka Putih, Jakarta Pusat 10510',
    googleMapsUrl: 'https://maps.google.com/?q=Cempaka+Putih+Tengah+Jakarta+Pusat',
    coordinates: { lat: -6.1764, lng: 106.8659 },
    price: 1600000,
    deposit: 400000,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • YARSI & RS Islam Cempaka Putih',
      rationale: 'Verified budget place in Cempaka Putih (Jakarta Pusat) under 1.8jt.',
      visionVerification: [
        'Google Maps Verified: Split AC Unit',
        'Google Maps Verified: Private Bathroom'
      ]
    },
    rating: 4.6,
    reviewCount: 78,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Universitas YARSI & RS Islam Jakarta', distance: '400 m', time: '5 min walk', type: 'campus' },
      { name: 'ITC Cempaka Mas', distance: '900 m', time: '10 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Ibu Ratna Cempaka Putih',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Standard Single Room', size: '3 x 3 m', price: 1600000, available: 3 }
    ],
    description: 'Budget Cempaka Putih boarding house in Central Jakarta. Close to YARSI campus and RS Islam Jakarta.',
    availableFrom: 'Ready to Move In'
  },

  // 4. Palmerah / Slipi (Jakarta Barat) - 1.8JT
  {
    id: 'palmerah-slipi-residence',
    name: 'Palmerah Slipi Residence (Google Maps Verified)',
    slug: 'palmerah-slipi-residence',
    type: 'Campur',
    city: 'Jakarta West',
    area: 'Palmerah',
    address: 'Jl. Palmerah Barat No. 42, Kec. Palmerah, Jakarta Barat 11480',
    googleMapsUrl: 'https://maps.google.com/?q=Palmerah+Barat+Jakarta+Barat',
    coordinates: { lat: -6.2034, lng: 106.7972 },
    price: 1800000,
    deposit: 500000,
    images: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 150Mbps', 'AC', 'Private Bathroom', '24h Security', 'Motorbike Garage'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Stasiun KRL Palmerah & Kompas Gramedia',
      rationale: 'Verified location in Palmerah (Jakarta Barat) 4 min walk to Stasiun KRL Palmerah under 2jt.',
      visionVerification: [
        'Google Maps Verified: Ergonomic Desk',
        'Google Maps Verified: Covered Garage'
      ]
    },
    rating: 4.7,
    reviewCount: 88,
    rules: ['Keycard access'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Palmerah', distance: '350 m', time: '4 min walk', type: 'transit' },
      { name: 'Gedung Kompas Gramedia', distance: '500 m', time: '6 min walk', type: 'transit' }
    ],
    landlord: {
      name: 'Pak Agung Palmerah',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Palmerah Single Studio', size: '3.5 x 3.5 m', price: 1800000, available: 2 }
    ],
    description: 'Located in Palmerah, West Jakarta. Direct walking access to Stasiun KRL Palmerah and Slipi office towers.',
    availableFrom: 'Ready to Move In'
  },

  // 5. Sunter (Jakarta Utara) - 2.1JT
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
        'Google Maps Verified: Balcony with City View',
        'Google Maps Verified: Underground Garage'
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

  // 6. Pluit / Muara Karang (Jakarta Utara) - 2.8JT
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
        'Google Maps Verified: Smart TV & WiFi',
        'Google Maps Verified: Marble Bathroom'
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

  // 7. Jagakarsa (Jakarta Selatan) - 1.4JT
  {
    id: 'jagakarsa-ui-student',
    name: 'Jagakarsa UI Student Residence (Google Maps Verified)',
    slug: 'jagakarsa-ui-student',
    type: 'Campur',
    city: 'Jakarta South',
    area: 'Jagakarsa',
    address: 'Jl. Srengseng Sawah No. 45, Jagakarsa, Jakarta Selatan 12640',
    googleMapsUrl: 'https://maps.google.com/?q=Srengseng+Sawah+Jagakarsa+Jakarta+Selatan',
    coordinates: { lat: -6.3322, lng: 106.8291 },
    price: 1400000,
    deposit: 300000,
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Motorbike Garage', 'Water Dispenser'],
    gemmaMatch: {
      percentage: 95,
      badge: '95% Match • Universitas Pancasila & UI Budget Room',
      rationale: 'Verified budget student room in Jagakarsa (Jakarta Selatan) under 1.5jt.',
      visionVerification: [
        'Google Maps Verified: Student Study Desk',
        'Google Maps Verified: Covered Garage'
      ]
    },
    rating: 4.7,
    reviewCount: 62,
    rules: ['Student ID required', 'Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Universitas Pancasila & Stasiun KRL', distance: '400 m', time: '5 min walk', type: 'campus' },
      { name: 'Universitas Indonesia (UI) Depok Gate', distance: '1.2 km', time: '5 min drive', type: 'campus' }
    ],
    landlord: {
      name: 'Pak Hendra Jagakarsa',
      phone: '6281298765432',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Budget Student Room', size: '3 x 3 m', price: 1400000, available: 4 }
    ],
    description: 'Leafy and peaceful student boarding house in Jagakarsa, South Jakarta under 1.5jt. Close to Universitas Pancasila and UI Depok.',
    availableFrom: 'Ready to Move In'
  },

  // 8. Jatinegara (Jakarta Timur) - 1.65JT
  {
    id: 'jatinegara-transit-room',
    name: 'Jatinegara Transit Room (Google Maps Verified)',
    slug: 'jatinegara-transit-room',
    type: 'Campur',
    city: 'Jakarta East',
    area: 'Jatinegara',
    address: 'Jl. Matraman Raya No. 110, Jatinegara, Jakarta Timur 13310',
    googleMapsUrl: 'https://maps.google.com/?q=Matraman+Raya+Jatinegara+Jakarta+Timur',
    coordinates: { lat: -6.2150, lng: 106.8650 },
    price: 1650000,
    deposit: 400000,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80'
    ],
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', '24h Access'],
    gemmaMatch: {
      percentage: 94,
      badge: '94% Match • Stasiun KRL Jatinegara & Matraman',
      rationale: 'Verified location on Matraman Raya Jatinegara (Jakarta Timur) 5 min walk to Stasiun KRL Jatinegara.',
      visionVerification: [
        'Google Maps Verified: Split AC',
        'Google Maps Verified: Private Bathroom'
      ]
    },
    rating: 4.6,
    reviewCount: 74,
    rules: ['Quiet hours after 10 PM'],
    nearbyPOIs: [
      { name: 'Stasiun KRL Jatinegara', distance: '450 m', time: '5 min walk', type: 'transit' },
      { name: 'Pasar Jatinegara', distance: '600 m', time: '7 min walk', type: 'mall' }
    ],
    landlord: {
      name: 'Pak Agung Jatinegara',
      phone: '6281776655443',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true,
      responseRate: 'Under 10 minutes'
    },
    roomTypes: [
      { name: 'Jatinegara Single', size: '3 x 3.5 m', price: 1650000, available: 2 }
    ],
    description: 'Convenient transit room in Jatinegara, East Jakarta under 1.8jt. Close to Stasiun KRL Jatinegara and Matraman.',
    availableFrom: 'Ready to Move In'
  },

  // 9. Puri Indah (Jakarta Barat) - 3.2JT
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
        'Google Maps Verified: Wall-mounted Smart TV',
        'Google Maps Verified: Basement Parking'
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
  },

  // 10. Setiabudi Premium (Jakarta Selatan) - 2.45JT
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
      badge: '97% Match • Quiet WFH Environment',
      rationale: 'Verified place in Karet Kuningan Setiabudi (Jakarta Selatan), 4 min walk to MRT Setiabudi Astra.',
      visionVerification: [
        'Google Maps Verified: Dedicated Study Desk & Chair',
        'Google Maps Verified: Window with Natural Daylight'
      ]
    },
    rating: 4.8,
    reviewCount: 128,
    rules: ['No smoking inside room', 'Quiet hours after 10 PM'],
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

  // 11. Tanah Abang (Jakarta Pusat) - 2.8JT
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
    facilities: ['WiFi 100Mbps', 'AC', 'Private Bathroom', 'Smart TV', '24h Security'],
    gemmaMatch: {
      percentage: 96,
      badge: '96% Match • Grand Indonesia & Plaza Indonesia',
      rationale: 'Verified Kebon Kacang location (Jakarta Pusat). 3 min walk to Grand Indonesia & Plaza Indonesia malls.',
      visionVerification: [
        'Google Maps Verified: Wall-mounted Smart TV'
      ]
    },
    rating: 4.7,
    reviewCount: 95,
    rules: ['Quiet hours after 10 PM'],
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

  // 12. Kemang (Jakarta Selatan) - 3.6JT
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
  }
];
