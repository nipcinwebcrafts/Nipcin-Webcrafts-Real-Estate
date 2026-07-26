import { Testimonial, FAQItem, GalleryItem, CategoryInfo } from '../types';

export const COMPANY_INFO = {
  name: 'Nipcin Webcrafts',
  logoUrl: 'https://i.imgur.com/iGy0tVg.png',
  tagline: 'Luxury Real Estate & Investment Advisory',
  location: 'Newtown, Accra, Ghana',
  address: 'No. 14 Webcraft Avenue, Newtown, Accra, Ghana',
  phone: '+233 599 025 003',
  whatsapp: '+233599025003',
  email: 'info@nipcinwebcrafts.com.ng',
  socialHandle: '@nipcinwebcrafts',
  workingHours: 'Mon - Sat: 8:00 AM - 6:00 PM (GMT)',
  stats: {
    propertiesSold: '500+',
    propertiesAvailable: '120+',
    happyClients: '300+',
    yearsExperience: '10+',
    customerSatisfaction: '95%',
    citiesCovered: '8',
    luxuryApartments: '85+',
    commercialProperties: '40+'
  }
};

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    name: 'Luxury Villas',
    count: 34,
    iconName: 'Home',
    description: 'Expansive private mansions and gated compounds in East Legon, Cantonments, and Trasacco Valley.',
    bgImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Apartments',
    count: 48,
    iconName: 'Building2',
    description: 'Modern high-rise residences with concierge services in Airport Residential and Labone.',
    bgImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Penthouses',
    count: 12,
    iconName: 'Crown',
    description: 'Top-tier skyline luxury duplexes with private rooftop terraces and infinity pools.',
    bgImage: '/src/assets/images/luxury_penthouse_interior_1784955510247.jpg'
  },
  {
    name: 'Commercial Buildings',
    count: 22,
    iconName: 'Building',
    description: 'Grade-A office towers and commercial hubs in Ridge and Airport City.',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80'
  },  {
    name: 'Lands',
    count: 29,
    iconName: 'Trees',
    description: 'Litigation-free titled parcels in fast-growing luxury corridors across Greater Accra.',
    bgImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Short Stay Apartments',
    count: 35,
    iconName: 'KeyRound',
    description: 'Fully serviced short-let suites providing high yield rental returns for investors.',
    bgImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Office Spaces',
    count: 18,
    iconName: 'Briefcase',
    description: 'Executive corporate office suites with fiber-optic connectivity and parking.',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Investment Properties',
    count: 40,
    iconName: 'TrendingUp',
    description: 'High rental yield portfolios tailored for local and diaspora Ghanaian investors.',
    bgImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Premium Properties',
    description: 'Curated portfolio of the finest luxury architectural developments across Ghana.',
    icon: 'Sparkles'
  },
  {
    title: 'Verified Listings',
    description: 'Every property title is thoroughly audited by Lands Commission and legal counsel.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Professional Consultants',
    description: 'Licensed luxury real estate advisors with deep market intelligence in West Africa.',
    icon: 'UserCheck'
  },
  {
    title: 'Property Inspection',
    description: 'VIP private chauffeured site visits and 4K virtual tours for overseas clients.',
    icon: 'Compass'
  },
  {
    title: 'Secure Transactions',
    description: 'Transparent escrow structures safeguarding multi-currency buyer funds.',
    icon: 'Lock'
  },
  {
    title: 'Investment Advisory',
    description: 'Data-driven ROI forecasting, tax optimization, and yield projections.',
    icon: 'BarChart3'
  },
  {
    title: 'Flexible Payment Options',
    description: 'Custom developer payment plans, structured mortgage options, and escrow milestones.',
    icon: 'CreditCard'
  },
  {
    title: 'After-Sales Support',
    description: 'Dedicated facility management, tenant sourcing, and estate maintenance services.',
    icon: 'Headphones'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Choose Property',
    description: 'Explore our handpicked collection of verified luxury homes, penthouses, or land listings online or via personalized consultation.',
    icon: 'Search'
  },
  {
    step: '02',
    title: 'Book Inspection',
    description: 'Schedule a private guided physical inspection in Accra or an interactive live 4K virtual walkthrough from anywhere in the world.',
    icon: 'CalendarCheck'
  },
  {
    step: '03',
    title: 'Meet Consultant',
    description: 'Consult with our Newtown, Accra property advisors to review legal titles, land search reports, and financial structures.',
    icon: 'Users'
  },
  {
    step: '04',
    title: 'Documentation',
    description: 'Finalize deed of conveyance, leasehold contracts, and escrow arrangements with complete legal transparency.',
    icon: 'FileText'
  },
  {
    step: '05',
    title: 'Move In',
    description: 'Receive your VIP keys, official title deeds, and concierge onboarding into your new Ghana luxury address.',
    icon: 'Key'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Kwaku Mensah-Bonsu',
    role: 'Diaspora Investor & Consultant',
    location: 'London, UK / East Legon',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'As a Ghanaian living in London, buying property back home used to worry me due to land title disputes. Nipcin Webcrafts handled my East Legon villa acquisition with utmost transparency, verified every title deed, and provided continuous video updates.',
    propertyPurchased: 'The Royal Crest Manor'
  },
  {
    id: 'test-2',
    name: 'Sarah Van Der Merwe',
    role: 'Multinational Regional Director',
    location: 'Airport Residential, Accra',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'Nipcin Webcrafts secured an outstanding penthouse in Cantonments for our corporate executive suite. Their attention to luxury finishes, prompt communication, and flawless contract handling set them apart as Ghana’s top agency.',
    propertyPurchased: 'Skyline Skydeck Penthouse'
  },
  {
    id: 'test-3',
    name: 'Chief Nana Osei Tutu II',
    role: 'Real Estate Developer',
    location: 'Kumasi / Accra',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    rating: 5,
    quote: 'Partnering with Nipcin Webcrafts to market our luxury development in Trasacco Valley was the best decision we made. They attracted high-caliber buyers and delivered a seamless closing experience.',
    propertyPurchased: 'Trasacco Valley Sanctuary'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Legal & Titles',
    question: 'How does Nipcin Webcrafts guarantee that property listings are litigation-free in Ghana?',
    answer: 'Every property represented by Nipcin Webcrafts undergoes a mandatory multi-point legal due diligence audit. Our legal team conducts official searches at the Lands Commission (Land Title Registry, Survey and Mapping Division, and Land Valuation Division) and verifies court registry clearances before any listing is published.'
  },
  {
    id: 'faq-2',
    category: 'Diaspora Buying',
    question: 'Can diaspora Ghanaians or foreign nationals buy luxury properties remotely?',
    answer: 'Yes! Over 60% of our clients are Ghanaian diaspora and international investors based in the UK, USA, Canada, Europe, and Nigeria. We offer 4K live virtual walk-throughs, digital power of attorney coordination, secure international escrow accounts, and remote contract signing.'
  },
  {
    id: 'faq-3',
    category: 'Inspections',
    question: 'How do I book a private property inspection in Accra?',
    answer: 'You can book an inspection directly on our website or via WhatsApp (+233 599 025 003). Once submitted, our Newtown team will assign a dedicated luxury consultant, arrange VIP transport in Accra if needed, and issue an official Inspection Confirmation Slip.'
  },
  {
    id: 'faq-4',
    category: 'Financing & Payments',
    question: 'What payment options and currencies are accepted for purchases?',
    answer: 'We accept payments in United States Dollars ($ USD) and Ghanaian Cedi (₵ GHS) at official central bank interbank rates. We offer flexible developer installment plans (e.g., 20% down payment with milestone payments over 12-24 months) as well as mortgage facilitation through partner Ghanaian banks.'
  },
  {
    id: 'faq-5',
    category: 'Investment Yields',
    question: 'What rental yields can I expect from luxury properties in Accra?',
    answer: 'Prime residential areas in Accra (such as Cantonments, Airport Residential, East Legon, and Labone) deliver some of Africa’s highest USD-denominated rental yields, averaging 8% to 13% annually for long-term expat leases and up to 18% for short-stay luxury rentals.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunset Infinity Pool at East Legon Mansion',
    category: 'Pools',
    image: '/src/assets/images/luxury_ghana_mansion_1784955497389.jpg',
    location: 'East Legon, Accra'
  },
  {
    id: 'gal-2',
    title: 'Skydeck Lounge & Penthouse Living Suite',
    category: 'Interiors',
    image: '/src/assets/images/luxury_penthouse_interior_1784955510247.jpg',
    location: 'Cantonments, Accra'
  },
  {
    id: 'gal-3',
    title: 'Nipcin Webcrafts Executive Consultation Lounge',
    category: 'Interiors',
    image: '/src/assets/images/nipcin_luxury_office_1784955521897.jpg',
    location: 'Newtown, Accra'
  },
  {
    id: 'gal-4',
    title: 'Trasacco Valley Estate Exterior Facade',
    category: 'Exteriors',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    location: 'Trasacco Valley, Accra'
  },
  {
    id: 'gal-5',
    title: 'Contemporary Glass Architecture in Cantonments',
    category: 'Exteriors',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
    location: 'Cantonments, Accra'
  },
  {
    id: 'gal-6',
    title: 'Panoramic Rooftop Swimming Pool overlooking Airport City',
    category: 'Penthouses',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
    location: 'Airport Residential'
  }
];
