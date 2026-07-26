export type Currency = 'USD' | 'GHS';
export type ThemeMode = 'dark' | 'light';

export type PropertyCategory = 
  | 'Luxury Villas' 
  | 'Apartments' 
  | 'Penthouses' 
  | 'Commercial Buildings' 
  | 'Lands' 
  | 'Short Stay Apartments' 
  | 'Office Spaces' 
  | 'Investment Properties';

export type PropertyListingType = 'Buy' | 'Rent';

export interface Consultant {
  name: string;
  phone: string;
  email: string;
  avatar: string;
  role: string;
}

export interface Property {
  id: string;
  title: string;
  slug: string;
  category: PropertyCategory;
  type: PropertyListingType;
  priceUSD: number;
  priceGHS: number;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqm: number;
  garages: number;
  featured: boolean;
  verified: boolean;
  heroImage: string;
  gallery: string[];
  description: string;
  features: string[];
  virtualTourUrl?: string;
  floorPlanUrl?: string;
  yearBuilt: number;
  titleStatus: string;
  estimatedRoiYield: string;
  consultant: Consultant;
}

export interface FilterState {
  keyword: string;
  location: string;
  category: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
}

export interface InspectionBooking {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  propertyType: string;
  propertyLocation: string;
  budget: string;
  message: string;
  status: 'Pending' | 'Confirmed';
  createdAt: string;
  propertyTitle?: string;
  referenceCode: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  quote: string;
  propertyPurchased?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Exteriors' | 'Interiors' | 'Pools' | 'Penthouses';
  image: string;
  location: string;
}

export interface CategoryInfo {
  name: PropertyCategory;
  count: number;
  iconName: string;
  description: string;
  bgImage: string;
}
