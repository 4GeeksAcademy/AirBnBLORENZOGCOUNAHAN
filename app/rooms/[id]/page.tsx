'use client';

import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import PhotoGallery from '@/components/PhotoGallery';
import RoomHeader from '@/components/RoomHeader';
import HostInfo from '@/components/HostInfo';
import AmenitiesList from '@/components/AmenitiesList';
import BookingCard from '@/components/BookingCard';
import BackButton from '@/components/BackButton';
import { Room } from '@/types';

function RoomContent() {
  const params = useParams();
  const roomId = params.id as string;

  const [room, setRoom] = useState<Room | null>(null);
  const [loading, setLoading] = useState(true);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [guestCount, setGuestCount] = useState(1);

  useEffect(() => {
    // Simulate data fetching with setTimeout
    const timer = setTimeout(() => {
      const mockRoom: Room = {
        id: roomId,
        title: 'Playa Hermosa - Cabaña moderna',
        image: 'beach-cabin',
        price: 120,
        rating: 4.8,
        reviews: 234,
        location: 'Punta Cana, República Dominicana',
        category: 'Playa',
        description:
          'Hermosa cabaña moderna frente al mar con todo lo que necesitas para pasar unas vacaciones inolvidables.',
        photos: [
          'beach-cabin-1',
          'beach-cabin-2',
          'beach-cabin-3',
          'beach-cabin-4',
        ],
        hostName: 'Carlos García',
        hostAvatar: 'host-1',
        yearsAsHost: 5,
        amenities: [
          { id: '1', name: 'WiFi', icon: '📶' },
          { id: '2', name: 'Cocina', icon: '🍳' },
          { id: '4', name: 'Piscina', icon: '🏊' },
          { id: '5', name: 'Estacionamiento', icon: '🚗' },
        ],
        maxGuests: 6,
      };
      setRoom(mockRoom);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [roomId]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center py-8">Loading...</div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="text-center py-8">Room not found</div>
      </div>
    );
  }

  const handlePrevPhoto = () => {
    setPhotoIndex((prev) =>
      prev === 0 ? room.photos.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) =>
      prev === room.photos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <BackButton href="/catalog" />

      <PhotoGallery
        photos={room.photos}
        currentIndex={photoIndex}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RoomHeader
            title={room.title}
            rating={room.rating}
            reviewCount={room.reviews}
            location={room.location}
          />

          <HostInfo
            name={room.hostName}
            avatar={room.hostAvatar}
            yearsAsHost={room.yearsAsHost}
          />

          <AmenitiesList amenities={room.amenities} />
        </div>

        <div>
          <BookingCard
            pricePerNight={room.price}
            guestCount={guestCount}
            onGuestChange={setGuestCount}
            maxGuests={room.maxGuests}
          />
        </div>
      </div>
    </div>
  );
}

export default function RoomPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="text-center py-8">Loading...</div>
          </div>
        }
      >
        <RoomContent />
      </Suspense>
    </main>
  );
}
