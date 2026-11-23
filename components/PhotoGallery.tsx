// PhotoGallery component - Image gallery with previous/next navigation
import React from 'react';

interface PhotoGalleryProps {
  photos: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  currentIndex,
  onPrev,
  onNext,
}) => {
  return (
    <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-between p-4">
      <button
        onClick={onPrev}
        className="bg-white rounded-full p-2 hover:bg-gray-100"
      >
        ←
      </button>
      <div className="flex-1 text-center">
        <p className="text-gray-700">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
      <button
        onClick={onNext}
        className="bg-white rounded-full p-2 hover:bg-gray-100"
      >
        →
      </button>
    </div>
  );
};

export default PhotoGallery;
