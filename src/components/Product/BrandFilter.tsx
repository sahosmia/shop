import React, { memo } from "react";

type BrandFilterProps = {
  brands: { id: number; title: string; slug: string }[];
  selectedBrand: string[];
  onSelectBrand: (title: string[]) => void;
};

const BrandFilter: React.FC<BrandFilterProps> = ({
  brands,
  selectedBrand,
  onSelectBrand,
}) => {
  const handleBrandClick = (title: string) => {
    if (selectedBrand.includes(title)) {
      onSelectBrand(selectedBrand.filter((t) => t !== title));
    } else {
      onSelectBrand([...selectedBrand, title]);
    }
  };

  return (
    <div className=" bg-gray-100 rounded-lg p-4">
      <h6 className="text-xl font-semibold text-primary2 pb-5">Brands</h6>
      <ul className="h-56 overflow-auto border p-2 rounded">
        {brands.map((item) => (
          <li
            className={`${
              selectedBrand.includes(item.title) ? "text-red-500" : ""
            } hover:text-red-500 transition flex  gap-2 mb-2`}
            key={item.id}
          >
            <input
              id={`brand-${item.id}`}
              type="checkbox"
              checked={selectedBrand.includes(item.title)}
              onChange={() => handleBrandClick(item.title)}
            />
            <label
              htmlFor={`brand-${item.id}`}
              className="capitalize text-sm font-medium text-assLight inline-block leading-6 "
            >
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default memo(BrandFilter);
