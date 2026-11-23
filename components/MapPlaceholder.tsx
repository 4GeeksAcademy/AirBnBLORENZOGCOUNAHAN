// MapPlaceholder component - Gray placeholder area for map display
import React from 'react';

const MapPlaceholder: React.FC = () => {
  return (
    <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center text-gray-700">
      Map
    </div>
  );
};

export default MapPlaceholder;
