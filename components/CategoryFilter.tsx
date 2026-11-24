import { ListingCategory } from '@/types';

interface CategoryFilterProps {
  categories: ListingCategory[];
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
}

const CategoryFilter = ({
  categories,
  activeCategory,
  onSelect,
}: CategoryFilterProps) => (
  <nav aria-label="Categorías de alojamientos" className="mb-6 overflow-x-auto">
    <div className="flex min-w-max gap-7 border-b border-gray-200">
      {categories.map(({ label, icon }) => (
        <button
          key={label}
          type="button"
          aria-pressed={activeCategory === label}
          onClick={() => onSelect(activeCategory === label ? null : label)}
          className={`flex min-w-16 flex-col items-center gap-2 border-b-2 px-1 pb-3 text-xs font-medium transition ${
            activeCategory === label
              ? 'border-gray-900 text-gray-900'
              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-900'
          }`}
        >
          <span aria-hidden="true" className="text-2xl">{icon}</span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default CategoryFilter;
