'use client';

import { useEffect, useState } from 'react';
import CategoryFilter from '@/components/CategoryFilter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ListingGrid from '@/components/ListingGrid';
import { CATEGORIES } from './mock-home';
import { Listing } from '@/types';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings([...MOCK_LISTINGS]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredListings = listings.filter((listing) => {
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      listing.title.toLowerCase().includes(query) ||
      listing.location.toLowerCase().includes(query);
    const matchesCategory =
      activeCategory === null || listing.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 lg:px-6">
        <CategoryFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
        <ListingGrid listings={filteredListings} loading={loading} />
      </main>
      <Footer />
    </>
  );
};

const MOCK_LISTINGS: Listing[] = [
  { id: '1', title: 'Cabaña moderna frente al mar', image: 'beach-cabin', price: 120, rating: 4.8, reviews: 234, location: 'Punta Cana, República Dominicana', category: 'Playa' },
  { id: '2', title: 'Mansión con vista al mar', image: 'luxury-mansion', price: 450, rating: 4.9, reviews: 567, location: 'Marbella, España', category: 'Mansiones' },
  { id: '3', title: 'Apartamento en el centro', image: 'city-apartment', price: 85, rating: 4.7, reviews: 342, location: 'Madrid, España', category: 'Departamentos' },
  { id: '4', title: 'Cabaña tranquila en la montaña', image: 'mountain-cabin', price: 95, rating: 4.6, reviews: 189, location: 'Bariloche, Argentina', category: 'Cabañas' },
  { id: '5', title: 'Villa con jardín privado', image: 'dream-villa', price: 320, rating: 4.9, reviews: 456, location: 'Toscana, Italia', category: 'Villas' },
  { id: '6', title: 'Habitación privada y luminosa', image: 'shared-room', price: 45, rating: 4.5, reviews: 128, location: 'Barcelona, España', category: 'Habitaciones' },
  { id: '7', title: 'Casa de playa con piscina', image: 'beach-house', price: 200, rating: 4.8, reviews: 301, location: 'Cancún, México', category: 'Casas' },
  { id: '8', title: 'Penthouse con terraza', image: 'penthouse', price: 380, rating: 4.9, reviews: 512, location: 'Nueva York, Estados Unidos', category: 'Departamentos' },
];

export default Home;
