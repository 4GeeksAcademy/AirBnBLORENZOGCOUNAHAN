interface BookingCardProps {
  pricePerNight: number;
  guestCount: number;
  onGuestChange: (count: number) => void;
  minGuests: number;
  maxGuests: number;
}

const BookingCard = ({
  pricePerNight,
  guestCount,
  onGuestChange,
  minGuests,
  maxGuests,
}: BookingCardProps) => {
  const handleDecrement = () => {
    if (guestCount > minGuests) onGuestChange(guestCount - 1);
  };

  const handleIncrement = () => {
    if (guestCount < maxGuests) onGuestChange(guestCount + 1);
  };

  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg md:sticky md:top-24 md:self-start sm:p-6">
      <div className="mb-5 flex items-baseline gap-1">
        <p className="text-2xl font-semibold text-gray-900">${pricePerNight}</p>
        <p className="text-sm text-gray-600">por noche</p>
      </div>

      <div className="mb-5 rounded-xl border border-gray-400 p-4">
        <label className="mb-3 block text-sm font-semibold text-gray-900">
          Huéspedes
        </label>
        <div className="flex items-center justify-between">
          <button
            type="button"
            aria-label="Reducir huéspedes"
            disabled={guestCount <= minGuests}
            onClick={handleDecrement}
            className="h-9 w-9 rounded-full border border-gray-400 text-lg disabled:cursor-not-allowed disabled:opacity-40"
          >
            −
          </button>
          <span aria-live="polite" className="font-medium">{guestCount}</span>
          <button
            type="button"
            aria-label="Aumentar huéspedes"
            disabled={guestCount >= maxGuests}
            onClick={handleIncrement}
            className="h-9 w-9 rounded-full border border-gray-400 text-lg disabled:cursor-not-allowed disabled:opacity-40"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-xl bg-rose-600 py-3 font-semibold text-white transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
      >
        Reservar
      </button>
    </aside>
  );
};

export default BookingCard;
