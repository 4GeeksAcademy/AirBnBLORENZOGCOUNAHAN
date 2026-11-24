import { SortOrder } from '@/types';

interface CatalogHeaderProps {
  totalResults: number;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const CatalogHeader = ({
  totalResults,
  sortOrder,
  onSortChange,
}: CatalogHeaderProps) => (
    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
      <h1 className="text-lg font-semibold text-gray-900">
        {totalResults} {totalResults === 1 ? 'alojamiento' : 'alojamientos'}
      </h1>
      <select
        value={sortOrder}
        aria-label="Ordenar por precio"
        onChange={(event) => onSortChange(event.target.value as SortOrder)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-rose-600"
      >
        <option value="asc">Precio: menor a mayor</option>
        <option value="desc">Precio: mayor a menor</option>
      </select>
    </div>
);

export default CatalogHeader;
