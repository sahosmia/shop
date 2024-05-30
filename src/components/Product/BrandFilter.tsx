import React from 'react';

type CategoryFilterProps = {
  categories: { id: number; title: string; quantity: number }[];
  selectedCategory: string;
  onSelectCategory: (title: string) => void;
};

const BrandFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="mb-20 bg-gray-100 rounded-lg p-8">
    <h6 className="text-2xl font-semibold text-primary2 pb-5">Category</h6>
    <ul>
      {categories.map((category) => (
        <li
          className={`${selectedCategory === category.title ? 'text-red-500' : ''
            } hover:text-red-500 transition`}
          key={category.id}
        >
          <button
            className="capitalize text-sm font-medium text-assLight leading-8 flex justify-between gap-5"
            type="button"
            onClick={() => onSelectCategory(category.title)}
          >
            <div className="inline-block">{category.title}</div>{' '}
            <div className="inline-block">({category.quantity})</div>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default BrandFilter;
