import Link from 'next/link';
import { Listing } from '@/types';

type ListingCardProps = Listing;

const PALETTES: Record<string, string> = {
  Playa: 'from-cyan-100 via-blue-100 to-amber-100',
  Mansiones: 'from-amber-100 via-stone-100 to-yellow-200',
  Tendencias: 'from-fuchsia-100 via-rose-100 to-orange-100',
  Habitaciones: 'from-sky-100 via-slate-100 to-indigo-100',
  Cabañas: 'from-emerald-100 via-green-100 to-amber-100',
  Villas: 'from-lime-100 via-emerald-100 to-stone-100',
  Departamentos: 'from-slate-100 via-blue-100 to-gray-200',
  Casas: 'from-orange-100 via-amber-100 to-rose-100',
};

const ICONS: Record<string, string> = {
  Playa: '🌊',
  Mansiones: '🏰',
  Tendencias: '✨',
  Habitaciones: '🛏️',
  Cabañas: '🌲',
  Villas: '🏡',
  Departamentos: '🏙️',
  Casas: '🏠',
};

const ListingCard = ({
  id,
  title,
  price,
  rating,
  reviews,
  category,
}: ListingCardProps) => (
  <Link
    href={`/rooms/${id}`}
    className="group block min-w-0 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-600"
  >
    <div
      role="img"
      aria-label={`Imagen de muestra: ${title}`}
      className={`relative mb-3 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${
        PALETTES[category] ?? 'from-rose-100 to-orange-100'
      }`}
    >
      <span aria-hidden="true" className="text-6xl transition duration-300 group-hover:scale-110">
        {ICONS[category] ?? '🏠'}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-gray-800">
        Favorito entre huéspedes
      </span>
    </div>
    <div className="flex items-start justify-between gap-2">
      <h2 className="line-clamp-1 text-sm font-semibold text-gray-900">{title}</h2>
      <span className="shrink-0 text-sm text-gray-800">★ {rating.toFixed(1)}</span>
    </div>
    <p className="mt-1 text-sm text-gray-500">{category} · {reviews} reseñas</p>
    <p className="mt-2 text-sm text-gray-900">
      <span className="font-semibold">${price}</span> por noche
    </p>
  </Link>
);

export default ListingCard;
