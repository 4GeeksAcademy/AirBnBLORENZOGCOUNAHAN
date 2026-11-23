export interface Listing {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  category: string;
}

export interface Room extends Listing {
  description: string;
  photos: string[];
  hostName: string;
  hostAvatar: string;
  yearsAsHost: number;
  amenities: Amenity[];
  maxGuests: number;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
}

export type SortOrder = 'asc' | 'desc';
