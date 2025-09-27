// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  CUSTOMER = 'customer',
  VENDOR = 'vendor',
  VENUE_OWNER = 'venue_owner',
  ADMIN = 'admin',
}

// Event Types
export interface Event {
  id: string;
  title: string;
  type: EventType;
  date: Date;
  budget: number;
  guestCount: number;
  customerId: string;
  venueId?: string;
  status: EventStatus;
  createdAt: Date;
  updatedAt: Date;
}

export enum EventType {
  WEDDING = 'wedding',
  CORPORATE = 'corporate',
  BIRTHDAY = 'birthday',
  ANNIVERSARY = 'anniversary',
  OTHER = 'other',
}

export enum EventStatus {
  PLANNING = 'planning',
  CONFIRMED = 'confirmed',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

// Venue Types
export interface Venue {
  id: string;
  name: string;
  description: string;
  location: Location;
  capacity: number;
  pricePerHour: number;
  amenities: string[];
  images: string[];
  ownerId: string;
  rating: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  address: string;
  city: string;
  state: string;
  pincode: string;
  latitude?: number;
  longitude?: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}
