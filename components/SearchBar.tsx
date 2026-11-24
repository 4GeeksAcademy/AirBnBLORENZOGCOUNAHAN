interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <label className="flex min-w-0 max-w-xl flex-1 items-center gap-3 rounded-full border border-gray-300 bg-white px-5 py-3 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-rose-500">
    <span className="sr-only">Buscar por alojamiento o ubicación</span>
    <input
      type="search"
      placeholder="¿A dónde quieres ir?"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
    />
    <span aria-hidden="true" className="hidden h-6 border-l border-gray-200 sm:block" />
    <span className="hidden text-sm text-gray-500 sm:block">Añade huéspedes</span>
    <button
      type="button"
      aria-label="Buscar"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white hover:bg-rose-600"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <path d="m16 16 4 4" />
      </svg>
    </button>
  </label>
);

export default SearchBar;
