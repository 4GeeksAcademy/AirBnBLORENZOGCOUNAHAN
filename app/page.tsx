'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import ListingGrid from '@/components/ListingGrid';
import { Listing } from '@/types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // Simulate data fetching with setTimeout
    const timer = setTimeout(() => {
      // Data will be loaded here once we have the data/listings.ts file
      setCategories([
        'Playa',
        'Mansiones',
        'Tendencias',
        'Habitaciones',
        'Cabañas',
        'Villas',
        'Departamentos',
        'Casas',
      ]);
      setListings([
        {
          id: '1',
          title: 'Playa Hermosa - Cabaña moderna',
          image: 'beach-cabin',
          price: 120,
          rating: 4.8,
          reviews: 234,
          location: 'Punta Cana, República Dominicana',
          category: 'Playa',
        },
        {
          id: '2',
          title: 'Mansión de lujo con vista al mar',
          image: 'luxury-mansion',
          price: 450,
          rating: 4.9,
          reviews: 567,
          location: 'Marbella, España',
          category: 'Mansiones',
        },
        {
          id: '3',
          title: 'Apartamento céntrico en la ciudad',
          image: 'city-apartment',
          price: 85,
          rating: 4.7,
          reviews: 342,
          location: 'Madrid, España',
          category: 'Departamentos',
        },
        {
          id: '4',
          title: 'Cabaña rústica en la montaña',
          image: 'mountain-cabin',
          price: 95,
          rating: 4.6,
          reviews: 189,
          location: 'Bariloche, Argentina',
          category: 'Cabañas',
        },
        {
          id: '5',
          title: 'Villa de ensueño con jardín',
          image: 'dream-villa',
          price: 320,
          rating: 4.9,
          reviews: 456,
          location: 'Toscana, Italia',
          category: 'Villas',
        },
        {
          id: '6',
          title: 'Habitación privada en casa compartida',
          image: 'shared-room',
          price: 45,
          rating: 4.5,
          reviews: 128,
          location: 'Barcelona, España',
          category: 'Habitaciones',
        },
        {
          id: '7',
          title: 'Casa de playa con piscina',
          image: 'beach-house',
          price: 200,
          rating: 4.8,
          reviews: 301,
          location: 'Cancún, México',
          category: 'Casas',
        },
        {
          id: '8',
          title: 'Penthouse moderno con terraza',
          image: 'penthouse',
          price: 380,
          rating: 4.9,
          reviews: 512,
          location: 'Nueva York, USA',
          category: 'Departamentos',
        },
      ]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      !activeCategory || listing.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <ListingGrid listings={filteredListings} loading={loading} />
      </div>
    </main>
  );
}
