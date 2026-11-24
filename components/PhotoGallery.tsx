interface PhotoGalleryProps {
  photos: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const PhotoGallery = ({
  photos,
  currentIndex,
  onPrev,
  onNext,
}: PhotoGalleryProps) => {
  const photo = photos[currentIndex];

  return (
    <section aria-label="Galería de fotos" className="relative">
      <div
        role="img"
        aria-label={photo}
        className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 via-stone-100 to-amber-100 sm:h-96"
      >
        <div className="text-center text-gray-700">
          <span aria-hidden="true" className="text-6xl">🏡</span>
          <p className="mt-3 text-sm font-medium">{photo}</p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Foto anterior"
        onClick={onPrev}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:scale-105"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Foto siguiente"
        onClick={onNext}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow transition hover:scale-105"
      >
        →
      </button>
      <p className="absolute bottom-4 right-4 rounded-lg bg-gray-900/75 px-3 py-1 text-sm text-white">
        {currentIndex + 1} / {photos.length}
      </p>
    </section>
  );
};

export default PhotoGallery;
