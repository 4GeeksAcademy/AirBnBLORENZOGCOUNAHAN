import { Room } from '@/types';
import AmenitiesList from '@/components/AmenitiesList';
import BackButton from '@/components/BackButton';
import BookingCard from '@/components/BookingCard';
import HostInfo from '@/components/HostInfo';
import PhotoGallery from '@/components/PhotoGallery';
import RoomHeader from '@/components/RoomHeader';

interface RoomDetailViewProps {
  room: Room;
  guestCount: number;
  onGuestChange: (count: number) => void;
  photoIndex: number;
  onPrevPhoto: () => void;
  onNextPhoto: () => void;
}

const RoomDetailView = ({
  room,
  guestCount,
  onGuestChange,
  photoIndex,
  onPrevPhoto,
  onNextPhoto,
}: RoomDetailViewProps) => (
  <>
    <BackButton href="/catalog" />
    <PhotoGallery
      photos={room.photos}
      currentIndex={photoIndex}
      onPrev={onPrevPhoto}
      onNext={onNextPhoto}
    />
    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
      <section className="md:col-span-2">
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
        <p className="mb-6 leading-7 text-gray-700">{room.description}</p>
        <AmenitiesList amenities={room.amenities} />
      </section>
      <BookingCard
        pricePerNight={room.price}
        guestCount={guestCount}
        onGuestChange={onGuestChange}
        minGuests={room.minGuests}
        maxGuests={room.maxGuests}
      />
    </div>
  </>
);

export default RoomDetailView;
