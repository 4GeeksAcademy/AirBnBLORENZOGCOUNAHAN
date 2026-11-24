import { Amenity } from '@/types';

interface AmenitiesListProps {
  amenities: Amenity[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => (
    <section className="mb-8">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">Lo que ofrece este alojamiento</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-3 text-sm text-gray-700">
            <span aria-hidden="true" className="text-xl">{amenity.icon}</span>
            <p>{amenity.name}</p>
          </div>
        ))}
      </div>
    </section>
);

export default AmenitiesList;
