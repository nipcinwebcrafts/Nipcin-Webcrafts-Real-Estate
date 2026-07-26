import { Property } from '../types';

// Real Ghanaian exchange rate reference (1 USD = 15.5 GHS)
export const USD_TO_GHS_RATE = 15.5;

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: 'prop-1',
    title: 'The Royal Crest Manor & Private Estate',
    slug: 'the-royal-crest-manor-east-legon',
    category: 'Luxury Villas',
    type: 'Buy',
    priceUSD: 1850000,
    priceGHS: Math.round(1850000 * USD_TO_GHS_RATE),
    location: 'East Legon, Accra',
    address: '14 Presidential Drive, East Legon, Accra, Ghana',
    bedrooms: 6,
    bathrooms: 7,
    sqm: 920,
    garages: 4,
    featured: true,
    verified: true,
    heroImage: '/src/assets/images/luxury_ghana_mansion_1784955497389.jpg',
    gallery: [
      '/src/assets/images/luxury_ghana_mansion_1784955497389.jpg',
      '/src/assets/images/luxury_penthouse_interior_1784955510247.jpg',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An architectural masterpiece situated in Accra’s premier residential sanctuary of East Legon. Featuring a heated infinity pool with cascading water walls, smart automated lighting, imported Italian marble floors, dual staff quarters, an indoor private cinema, and high-level 24/7 biometric security.',
    features: [
      'Heated Infinity Swimming Pool',
      'Private 10-Seat Cinema Room',
      'Smart Home Automation System',
      'Italian Marble & Teak Flooring',
      'Solar Hybrid Energy System',
      'Dual Outhouse / Staff Quarters',
      'Biometric & Laser Perimeter Security',
      'Perimeter CCTV & Guardhouse'
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    yearBuilt: 2025,
    titleStatus: 'Land Title Certificate (Titled & Verified)',
    estimatedRoiYield: '11.2% Projected Annual Capital Growth',
    consultant: {
      name: 'Kofi Mensah Addo',
      phone: '+233 599 025 003',
      email: 'kofi.mensah@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      role: 'Senior Luxury Real Estate Consultant'
    }
  },
  {
    id: 'prop-2',
    title: 'Skyline Skydeck Penthouse at The Pavilion',
    slug: 'skyline-skydeck-penthouse-cantonments',
    category: 'Penthouses',
    type: 'Buy',
    priceUSD: 920000,
    priceGHS: Math.round(920000 * USD_TO_GHS_RATE),
    location: 'Cantonments, Accra',
    address: '8 Rangoon Lane, Cantonments, Accra, Ghana',
    bedrooms: 4,
    bathrooms: 4.5,
    sqm: 540,
    garages: 2,
    featured: true,
    verified: true,
    heroImage: '/src/assets/images/luxury_penthouse_interior_1784955510247.jpg',
    gallery: [
      '/src/assets/images/luxury_penthouse_interior_1784955510247.jpg',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Offering panoramic 360-degree views across Cantonments and Osu, this duplex penthouse epitomizes executive city living. Complete with private rooftop Jacuzzi, wrap-around sunset terrace, Gaggenau kitchen appliances, direct private elevator access, and full backup generator power.',
    features: [
      'Private Rooftop Jacuzzi & Sky Deck',
      'Direct Keycard Private Elevator Access',
      'Panoramic 360-Degree Views of Accra',
      'Integrated Miele & Gaggenau Kitchen',
      'Full Soundproof Acoustic Glazing',
      '24/7 Facility Management Service',
      'Resort-Style Resident Gym & Spa'
    ],
    virtualTourUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    yearBuilt: 2024,
    titleStatus: '50-Year Renewable Executive Leasehold',
    estimatedRoiYield: '12.8% Annual USD Rental Yield',
    consultant: {
      name: 'Abena Serwaa Osei',
      phone: '+233 599 025 003',
      email: 'abena.osei@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      role: 'Head of Foreign Investment & Diaspora Desk'
    }
  },
  {
    id: 'prop-3',
    title: 'The Diplomat Executive Apartments',
    slug: 'the-diplomat-executive-apartments-airport',
    category: 'Apartments',
    type: 'Rent',
    priceUSD: 4500,
    priceGHS: Math.round(4500 * USD_TO_GHS_RATE),
    location: 'Airport Residential Area, Accra',
    address: '22 Liberation Road, Airport Residential, Accra',
    bedrooms: 3,
    bathrooms: 3,
    sqm: 280,
    garages: 2,
    featured: true,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Fully furnished luxury apartment designed specifically for multinational executives, diplomats, and high-net-worth expats. Situated 5 minutes from Kotoka International Airport with concierge, underground parking, infinity lap pool, tennis court, and full daily housekeeping options.',
    features: [
      'Fully Furnished Luxury Interiors',
      '5 Minutes to Kotoka International Airport',
      '24/7 Security Patrol & Diplomatic Escort Service',
      'Olympic-Length Swimming Pool & Tennis Court',
      'Business Lounge & Private Conference Suite',
      'Uninterrupted Backup Power & Water Filtration'
    ],
    yearBuilt: 2024,
    titleStatus: 'Verified Corporate Rental Agreement',
    estimatedRoiYield: 'Ideal for Corporate Leasing & Expat Tenancy',
    consultant: {
      name: 'Emmanuel Ampofo',
      phone: '+233 599 025 003',
      email: 'emmanuel.ampofo@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Commercial & Rental Advisory Specialist'
    }
  },
  {
    id: 'prop-4',
    title: 'Trasacco Valley Sanctuary Mansion',
    slug: 'trasacco-valley-sanctuary-mansion',
    category: 'Luxury Villas',
    type: 'Buy',
    priceUSD: 2400000,
    priceGHS: Math.round(2400000 * USD_TO_GHS_RATE),
    location: 'Trasacco Valley, Accra',
    address: 'Estate Boulevard, Trasacco Valley, Accra, Ghana',
    bedrooms: 7,
    bathrooms: 8,
    sqm: 1150,
    garages: 5,
    featured: true,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A statement private compound in Ghana’s most prestigious gated community. Expansive landscaped tropical gardens, private golf green preview, outdoor gazebos, wine cellar, subterranean garage, and custom copper roofing.',
    features: [
      'Gated Sanctuary in Trasacco Valley',
      'Subterranean 5-Car Garage',
      'Private Temperature-Controlled Wine Cellar',
      'Manicured Tropical Lawns & Putting Green',
      'Dual Outquarters for Private Security & Butler Staff',
      'Commercial-Grade Underground Water Reserve'
    ],
    yearBuilt: 2023,
    titleStatus: 'Perpetual Land Title Certificate',
    estimatedRoiYield: '10.5% Capital Appreciation',
    consultant: {
      name: 'Kofi Mensah Addo',
      phone: '+233 599 025 003',
      email: 'kofi.mensah@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      role: 'Senior Luxury Real Estate Consultant'
    }
  },
  {
    id: 'prop-5',
    title: 'The Meridian Commercial & Tech Tower',
    slug: 'the-meridian-commercial-tech-tower',
    category: 'Commercial Buildings',
    type: 'Buy',
    priceUSD: 4800000,
    priceGHS: Math.round(4800000 * USD_TO_GHS_RATE),
    location: 'Ridge Financial District, Accra',
    address: '15 Independence Avenue, Ridge, Accra, Ghana',
    bedrooms: 0,
    bathrooms: 16,
    sqm: 3200,
    garages: 30,
    featured: false,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Prime commercial office complex in Accra’s central financial corridor. Glass curtain wall architecture, Grade A office spaces, Fiber optic backbone, multi-storey basement parking, and 92% current occupancy with blue-chip corporate tenants.',
    features: [
      'Grade-A Certified Green Commercial Building',
      '92% Current Tenancy with Corporate Blue-Chip Leases',
      'Subterranean Multi-Storey Parking Structure',
      'Dual Caterpillar Backup Power Generators',
      'High-Speed Schindler Elevators with Access Control',
      'On-site Cafe, Restaurant & Executive Heli-Pad Access'
    ],
    yearBuilt: 2024,
    titleStatus: 'Unencumbered Commercial Land Title',
    estimatedRoiYield: '14.2% Net Rental ROI (USD Dollar-Denominated Leases)',
    consultant: {
      name: 'Emmanuel Ampofo',
      phone: '+233 599 025 003',
      email: 'emmanuel.ampofo@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Commercial & Rental Advisory Specialist'
    }
  },
  {
    id: 'prop-6',
    title: 'Serenity Ridge Eco-Villa & Retreat',
    slug: 'serenity-ridge-eco-villa-aburi',
    category: 'Luxury Villas',
    type: 'Buy',
    priceUSD: 680000,
    priceGHS: Math.round(680000 * USD_TO_GHS_RATE),
    location: 'Aburi Ridge, Eastern Region / Greater Accra Border',
    address: '10 Botanical Heights, Aburi, Ghana',
    bedrooms: 5,
    bathrooms: 5,
    sqm: 650,
    garages: 3,
    featured: true,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Nestled on the cool, lush hills of Aburi with views overlooking the Accra plain below. Features sustainable Scandinavian-timber fusion design, private organic fruit orchards, infinity pool hovering above cloud line, and crisp mountain climate.',
    features: [
      'Unrivaled Panoramic Mountain & Accra Plains Vista',
      'Cool Mountain Micro-Climate (No AC Needed Year-Round)',
      'Solar Micro-Grid & Rainwater Harvesting System',
      'Private 1-Acre Organic Citrus & Botanical Garden',
      'Infinity Pool Suspended Over Ridge Escarpment'
    ],
    yearBuilt: 2025,
    titleStatus: 'Freehold Titled Acreage',
    estimatedRoiYield: 'High Short-Stay Weekend Luxury Resort Yield (Airbnb Elite)',
    consultant: {
      name: 'Abena Serwaa Osei',
      phone: '+233 599 025 003',
      email: 'abena.osei@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      role: 'Head of Foreign Investment & Diaspora Desk'
    }
  },
  {
    id: 'prop-7',
    title: 'The Pearl Executive Short-Stay Suite',
    slug: 'the-pearl-executive-short-stay-labone',
    category: 'Short Stay Apartments',
    type: 'Rent',
    priceUSD: 280,
    priceGHS: Math.round(280 * USD_TO_GHS_RATE),
    location: 'Labone, Accra',
    address: '5 Nyaniba Crescent, Labone, Accra, Ghana',
    bedrooms: 2,
    bathrooms: 2,
    sqm: 140,
    garages: 1,
    featured: false,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Exquisite boutique short-let luxury suite in chic Labone. Surrounded by fine dining restaurants, art galleries, and vibrant nightlife. Daily maid service, high-speed fiber internet, smart entry, and rooftop plunge pool.',
    features: [
      'Nightly/Weekly Short-Stay Booking Options',
      'Curated Ghanaian Modern Art Collection Interiors',
      'High-Speed 500Mbps Fiber Optic Wi-Fi',
      'Rooftop Plunge Pool & Sunset Bar',
      'Concierge Chauffeur & Airport Shuttle Available'
    ],
    yearBuilt: 2024,
    titleStatus: 'Verified Short-Let Management Listing',
    estimatedRoiYield: '85% Average Monthly Booking Occupancy Rate',
    consultant: {
      name: 'Emmanuel Ampofo',
      phone: '+233 599 025 003',
      email: 'emmanuel.ampofo@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      role: 'Commercial & Rental Advisory Specialist'
    }
  },
  {
    id: 'prop-8',
    title: 'Prime 2-Acre Titled Development Land',
    slug: 'prime-2-acre-titled-land-east-legon-hills',
    category: 'Lands',
    type: 'Buy',
    priceUSD: 350000,
    priceGHS: Math.round(350000 * USD_TO_GHS_RATE),
    location: 'East Legon Hills, Accra',
    address: 'Boundary Road, East Legon Hills, Accra, Ghana',
    bedrooms: 0,
    bathrooms: 0,
    sqm: 8093,
    garages: 0,
    featured: false,
    verified: true,
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Fully demarcated, perimeter-fenced, and titled 2-acre parcel ideal for gated residential enclave development or private luxury estate. Zero land litigation, direct access to asphalt roads, grid power, and municipal water connection.',
    features: [
      'Lands Commission Title Certificate Verified',
      'Zero Litigation Guarantee backed by Legal Indemnity',
      'Asphalt Road Frontage with Electricity Onsite',
      'Topographically Flat Terrain Ready for Immediate Build',
      'High-Appreciation Corridor in East Legon Extension'
    ],
    yearBuilt: 2025,
    titleStatus: 'Full Lands Commission Title Deed',
    estimatedRoiYield: '18.5% Projected Land Value Growth Per Annum',
    consultant: {
      name: 'Kofi Mensah Addo',
      phone: '+233 599 025 003',
      email: 'kofi.mensah@nipcinwebcrafts.com.ng',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      role: 'Senior Luxury Real Estate Consultant'
    }
  }
];
