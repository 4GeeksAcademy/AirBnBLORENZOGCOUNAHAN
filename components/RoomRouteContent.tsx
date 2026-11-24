'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BackButton from '@/components/BackButton';
import RoomDetailView from '@/components/RoomDetailView';
import { Amenity, Listing, Room } from '@/types';

const AMENITIES: Amenity[] = [
  { id: 'wifi', name: 'Wifi', icon: '📶' },
  { id: 'kitchen', name: 'Cocina', icon: '🍳' },
  { id: 'pool', name: 'Piscina', icon: '🏊' },
  { id: 'parking', name: 'Estacionamiento', icon: '🚗' },
  { id: 'air-conditioning', name: 'Aire acondicionado', icon: '❄️' },
  { id: 'tv', name: 'Televisión', icon: '📺' },
];

const HOSTS = [
  { name: 'Carlos García', years: 5 },
  { name: 'Lucía Martínez', years: 3 },
  { name: 'Andrés Rodríguez', years: 7 },
];

const ROOM_LISTINGS: Listing[] = [
  { id: '1', title: 'Cabaña moderna frente al mar', image: 'beach-cabin', price: 120, rating: 4.8, reviews: 234, location: 'Punta Cana, República Dominicana', category: 'Playa' },
  { id: '2', title: 'Mansión con vista al mar', image: 'luxury-mansion', price: 450, rating: 4.9, reviews: 567, location: 'Marbella, España', category: 'Mansiones' },
  { id: '3', title: 'Apartamento en el centro', image: 'city-apartment', price: 85, rating: 4.7, reviews: 342, location: 'Madrid, España', category: 'Departamentos' },
  { id: '4', title: 'Cabaña tranquila en la montaña', image: 'mountain-cabin', price: 95, rating: 4.6, reviews: 189, location: 'Bariloche, Argentina', category: 'Cabañas' },
  { id: '5', title: 'Villa con jardín privado', image: 'dream-villa', price: 320, rating: 4.9, reviews: 456, location: 'Toscana, Italia', category: 'Villas' },
  { id: '6', title: 'Habitación privada y luminosa', image: 'shared-room', price: 45, rating: 4.5, reviews: 128, location: 'Barcelona, España', category: 'Habitaciones' },
  { id: '7', title: 'Casa de playa con piscina', image: 'beach-house', price: 200, rating: 4.8, reviews: 301, location: 'Cancún, México', category: 'Casas' },
  { id: '8', title: 'Penthouse con terraza', image: 'penthouse', price: 380, rating: 4.9, reviews: 512, location: 'Nueva York, Estados Unidos', category: 'Departamentos' },
];

const MOCK_ROOMS: Room[] = ROOM_LISTINGS.map((listing, index) => {
  const host = HOSTS[index % HOSTS.length];

  return {
    ...listing,
    description: `Disfruta de una estancia cómoda en ${listing.location}, con todo lo necesario para descansar y explorar la zona.`,
    photos: [
      `${listing.title} — vista principal`,
      `${listing.title} — sala`,
      `${listing.title} — dormitorio`,
      `${listing.title} — exterior`,
    ],
    hostName: host.name,
    hostAvatar: host.name.split(' ').map((part) => part[0]).slice(0, 2).join(''),
    yearsAsHost: host.years,
    amenities: AMENITIES,
    minGuests: 1,
    maxGuests: listing.category === 'Habitaciones' ? 2 : 6,
  };
});

const RoomRouteContent = () => {
  const { id } = useParams<{ id: string }>();
  const [loadedRoom, setLoadedRoom] = useState<{
    id: string;
    room: Room | null;
  } | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(1);
  const loading = loadedRoom?.id !== id;
  const room = loadedRoom?.id === id ? loadedRoom.room : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedRoom = MOCK_ROOMS.find((item) => item.id === id) ?? null;
      setLoadedRoom({ id, room: selectedRoom });
      setPhotoIndex(0);
      setGuestCount(selectedRoom?.minGuests ?? 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const movePhoto = (direction: -1 | 1) => {
    if (!room) return;
    setPhotoIndex((current) =>
      (current + direction + room.photos.length) % room.photos.length
    );
  };

  if (loading) {
    return (
      <p role="status" className="py-16 text-center text-gray-600">
        Cargando alojamiento…
      </p>
    );
  }

  if (!room) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4 text-gray-700">No encontramos este alojamiento.</p>
        <BackButton href="/catalog" />
      </div>
    );
  }

  return (
    <RoomDetailView
      room={room}
      guestCount={guestCount}
      onGuestChange={setGuestCount}
      photoIndex={photoIndex}
      onPrevPhoto={() => movePhoto(-1)}
      onNextPhoto={() => movePhoto(1)}
    />
  );
};

export default RoomRouteContent;
