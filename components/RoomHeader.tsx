interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const RoomHeader = ({
  title,
  rating,
  reviewCount,
  location,
}: RoomHeaderProps) => (
  <header className="mb-6 border-b border-gray-200 pb-5">
    <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h1>
    <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="font-medium">★ {rating.toFixed(1)}</span>
      <span className="text-gray-500">{reviewCount} reseñas</span>
      <span className="text-gray-500">· {location}</span>
    </div>
  </header>
);

export default RoomHeader;
