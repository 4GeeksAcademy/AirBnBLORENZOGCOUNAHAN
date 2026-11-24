import { Listing } from '@/types';
import ListingCard from './ListingCard';

interface ListingGridProps {
  listings: Listing[];
  loading: boolean;
  columns?: 'two' | 'three';
}

const GRID_COLUMNS = {
  two: 'grid-cols-1 md:grid-cols-2',
  three: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
};

const ListingGrid = ({
  listings,
  loading,
  columns = 'three',
}: ListingGridProps) => {
  if (loading) {
    return (
      <p role="status" className="py-12 text-center text-sm text-gray-600">
        Cargando alojamientos…
      </p>
    );
  }

  if (listings.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-gray-600">
        No encontramos alojamientos con esos filtros.
      </p>
    );
  }

  return (
    <div className={`grid gap-x-5 gap-y-8 ${GRID_COLUMNS[columns]}`}>
      {listings.map((listing) => <ListingCard key={listing.id} {...listing} />)}
    </div>
  );
};

export default ListingGrid;
