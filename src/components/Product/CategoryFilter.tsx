import React from 'react';

type CategoryFilterProps = {
  categories: { id: number; title: string; quantity: number }[];
  selectedCategory: string[];
  onSelectCategory: (title: string[]) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onSelectCategory }) => {
   const handleCategoryClick = (title: string) => {
     if (selectedCategory.includes(title)) {
       onSelectCategory(selectedCategory.filter((t) => t !== title));
     } else {
       onSelectCategory([...selectedCategory, title]);
     }
   };

  return (
    <div className=" bg-gray-100 rounded-lg p-8">
      <h6 className="text-2xl font-semibold text-primary2 pb-5">Category</h6>
      <ul>
        {categories.map((item) => (
          <li
            className={`${
              selectedCategory.includes(item.title) ? "text-red-500" : ""
            } hover:text-red-500 transition flex  gap-2 mb-2`}
            key={item.id}
          >
            <input
              id={`category-${item.id}`}
              type="checkbox"
              checked={selectedCategory.includes(item.title)}
              onChange={() => handleCategoryClick(item.title)}
            />
            <label
              htmlFor={`category-${item.id}`}
              className="capitalize text-sm font-medium text-assLight inline-block leading-6 "
            >
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryFilter;
