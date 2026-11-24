import Link from 'next/link';
import SearchBar from '@/components/SearchBar';

interface HeaderProps {
  searchTerm?: string;
  onSearchChange?: (value: string) => void;
}

const Header = ({ searchTerm, onSearchChange }: HeaderProps) => (
  <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">
      <Link
        href="/"
        aria-label="Airbnb, ir al inicio"
        className="flex shrink-0 items-center gap-2 text-rose-600"
      >
        <span aria-hidden="true" className="text-3xl leading-none">⌂</span>
        <span className="hidden text-xl font-bold tracking-tight sm:inline">
          airbnb
        </span>
      </Link>

      {searchTerm !== undefined && onSearchChange ? (
        <SearchBar value={searchTerm} onChange={onSearchChange} />
      ) : (
        <Link
          href="/catalog"
          className="rounded-full border border-gray-200 px-5 py-3 text-sm font-medium shadow-sm transition hover:shadow-md"
        >
          Buscar alojamientos
        </Link>
      )}

      <div className="flex shrink-0 items-center gap-2">
        <Link
          href="/catalog"
          className="hidden rounded-full px-3 py-2 text-sm font-semibold hover:bg-gray-100 lg:block"
        >
          Conviértete en anfitrión
        </Link>
        <button
          type="button"
          aria-label="Idioma y moneda"
          className="hidden h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 sm:flex"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.8">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Abrir menú de usuario"
          className="flex items-center gap-2 rounded-full border border-gray-300 p-1.5 pl-3 shadow-sm transition hover:shadow-md"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-600 text-white">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21a8 8 0 0 1 16 0" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </header>
);

export default Header;
