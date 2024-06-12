import React from "react";
import { MdFilterAlt } from "react-icons/md";
import PriceFilter from "./PriceFilter";
import FilterItem from "./FilterItem";

type FilterSectionProps = {
  filterShow: boolean;
  handleFilterToggle: () => void;
  handleFilterReset: () => void;
  filters: {
    minPrice: number | undefined;
    maxPrice: number | undefined;
    selectedCategory: string[];
    selectedTags: string[];
    selectedBrand: string[];
  };
  handlePriceChange: (min: number | undefined, max: number | undefined) => void;
  handleCategoryChange: (selectedCategory: string[]) => void;
  handleTagChange: (selectedTags: string[]) => void;
  handleBrandChange: (selectedBrand: string[]) => void;
  categories: { id: number; title: string; quantity: number }[];
  tags: { id: number; title: string; slug: string }[];
  brands: { id: number; title: string; slug: string }[];
};

const FilterSection: React.FC<FilterSectionProps> = ({
  filterShow,
  handleFilterToggle,
  handleFilterReset,
  filters,
  handlePriceChange,
  handleCategoryChange,
  handleTagChange,
  handleBrandChange,
  categories,
  tags,
  brands,
}) => {
  return (
    <>
      <div>
        <button
          onClick={handleFilterToggle}
          className="flex justify-center items-center border px-5 py-2 rounded gap-1 text-sm"
        >
          <MdFilterAlt /> Filter
        </button>
      </div>

      {filterShow && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 space-x-5 border p-5 rounded-lg my-2">
          <div>
            <PriceFilter
              minPrice={filters.minPrice}
              maxPrice={filters.maxPrice}
              onMinPriceChange={(min) =>
                handlePriceChange(min, filters.maxPrice)
              }
              onMaxPriceChange={(max) =>
                handlePriceChange(filters.minPrice, max)
              }
            />
            <button onClick={handleFilterReset}>Reset Filter</button>
          </div>
          <FilterItem
            items={categories}
            selectedItems={filters.selectedCategory}
            onSelectItem={handleCategoryChange}
            title="Category"
          />
          <FilterItem
            items={tags}
            selectedItems={filters.selectedTags}
            onSelectItem={handleTagChange}
            title="Tags"
          />
          <FilterItem
            items={brands}
            selectedItems={filters.selectedBrand}
            onSelectItem={handleBrandChange}
            title="Brands"
          />
        </div>
      )}
    </>
  );
};

export default FilterSection;
