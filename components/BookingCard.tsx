// BookingCard component - Price display, guest counter, and booking CTA
import React from 'react';

interface BookingCardProps {
  pricePerNight: number;
  guestCount: number;
  onGuestChange: (count: number) => void;
  maxGuests: number;
}

const BookingCard: React.FC<BookingCardProps> = ({
  pricePerNight,
  guestCount,
  onGuestChange,
  maxGuests,
}) => {
  const handleDecrement = () => {
    if (guestCount > 1) onGuestChange(guestCount - 1);
  };

  const handleIncrement = () => {
    if (guestCount < maxGuests) onGuestChange(guestCount + 1);
  };

  return (
    <div className="border rounded-lg p-6 sticky top-4 bg-white">
      <div className="mb-4">
        <p className="text-2xl font-bold">${pricePerNight}</p>
        <p className="text-sm text-gray-600">per night</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Guests</label>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDecrement}
            className="border rounded px-3 py-2 hover:bg-gray-100"
          >
            −
          </button>
          <span className="text-lg">{guestCount}</span>
          <button
            onClick={handleIncrement}
            className="border rounded px-3 py-2 hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
        Reserve
      </button>
    </div>
  );
};

export default BookingCard;
