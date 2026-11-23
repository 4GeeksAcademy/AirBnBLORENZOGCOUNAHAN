// ListingCard component - Individual property card with image, title, price, and rating
import React from 'react';
import { Listing } from '@/types';

interface ListingCardProps extends Listing {}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  price,
  rating,
  reviews,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <div className="bg-gray-300 h-48 mb-3 rounded"></div>
      <h3 className="font-semibold text-sm">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">${price}/night</span>
        <span>⭐ {rating}</span>
      </div>
      <p className="text-xs text-gray-600">({reviews} reviews)</p>
    </div>
  );
};

export default ListingCard;
