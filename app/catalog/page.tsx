'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CatalogHeader from '@/components/CatalogHeader';
import ListingGrid from '@/components/ListingGrid';
import MapPlaceholder from '@/components/MapPlaceholder';
import BackButton from '@/components/BackButton';
import { Listing, SortOrder } from '@/types';

export default function CatalogPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  useEffect(() => {
    // Simulate data fetching with setTimeout
    const timer = setTimeout(() => {
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

  const sortedListings = [...listings].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <BackButton href="/" />
        <CatalogHeader
          totalResults={sortedListings.length}
          sortOrder={sortOrder}
          onSortChange={setSortOrder}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ListingGrid listings={sortedListings} loading={loading} />
          </div>
          <div className="hidden lg:block">
            <MapPlaceholder />
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <MapPlaceholder />
        </div>
      </div>
    </main>
  );
}
