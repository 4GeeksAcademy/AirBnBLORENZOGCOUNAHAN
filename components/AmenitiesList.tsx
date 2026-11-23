// AmenitiesList component - Grid of amenities with icons and labels
import React from 'react';
import { Amenity } from '@/types';

interface AmenitiesListProps {
  amenities: Amenity[];
}

const AmenitiesList: React.FC<AmenitiesListProps> = ({ amenities }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {amenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-2">
            <span className="text-2xl">{amenity.icon}</span>
            <p>{amenity.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesList;
