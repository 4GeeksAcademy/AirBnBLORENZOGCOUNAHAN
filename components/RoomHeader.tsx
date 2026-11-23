// RoomHeader component - Room title, rating, reviews, and location
import React from 'react';

interface RoomHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}

const RoomHeader: React.FC<RoomHeaderProps> = ({
  title,
  rating,
  reviewCount,
  location,
}) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div className="flex items-center gap-2 mb-2">
        <span>⭐ {rating}</span>
        <span className="text-gray-600">({reviewCount} reviews)</span>
      </div>
      <p className="text-gray-600">📍 {location}</p>
    </div>
  );
};

export default RoomHeader;
