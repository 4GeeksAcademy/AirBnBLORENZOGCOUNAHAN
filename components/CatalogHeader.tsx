// CatalogHeader component - Results count and sort order control
import React from 'react';
import { SortOrder } from '@/types';

interface CatalogHeaderProps {
  totalResults: number;
  sortOrder: SortOrder;
  onSortChange: (order: SortOrder) => void;
}

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  totalResults,
  sortOrder,
  onSortChange,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-semibold">
        {totalResults} properties found
      </h2>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(e.target.value as SortOrder)}
        className="border rounded px-3 py-2"
      >
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default CatalogHeader;
