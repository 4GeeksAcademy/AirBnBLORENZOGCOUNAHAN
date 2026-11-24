'use client';

import { useEffect, useState } from 'react';
import BackButton from '@/components/BackButton';
import CatalogHeader from '@/components/CatalogHeader';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ListingGrid from '@/components/ListingGrid';
import MapPlaceholder from '@/components/MapPlaceholder';
import { Listing, SortOrder } from '@/types';

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

const CatalogPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    const timer = setTimeout(() => {
      setListings([...MOCK_LISTINGS]);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const sortedListings = [...listings].sort((a, b) =>
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  );

  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 lg:px-6">
        <BackButton href="/" />
        <CatalogHeader
          totalResults={sortedListings.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <section aria-label="Resultados" className="md:col-span-2">
            <ListingGrid
              listings={sortedListings}
              loading={loading}
              columns="two"
            />
          </section>
          <aside className="hidden md:sticky md:top-24 md:block md:self-start">
            <MapPlaceholder />
          </aside>
        </div>
        <div className="mt-6 md:hidden">
          <MapPlaceholder />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CatalogPage;
