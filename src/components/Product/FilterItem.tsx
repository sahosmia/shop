import React from "react";

type FilterProps = {
  items: { id: number; title: string; quantity?: number }[];
  selectedItems: string[];
  onSelectItem: (selectedItems: string[]) => void;
  title: string;
};

const FilterItem: React.FC<FilterProps> = ({
  items,
  selectedItems,
  onSelectItem,
  title,
}) => {
  const handleItemClick = (title: string) => {
    if (selectedItems.includes(title)) {
      onSelectItem(selectedItems.filter((item) => item !== title));
    } else {
      onSelectItem([...selectedItems, title]);
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h6 className="text-xl font-semibold text-primary2 pb-5">{title}</h6>
      <ul className="h-56 overflow-auto border p-2 rounded">
        {items.map((item) => (
          <li
            className={`${
              selectedItems.includes(item.title) ? "text-red-500" : ""
            } hover:text-red-500 transition flex gap-2 mb-2`}
            key={item.id}
          >
            <input
              id={`${title}-${item.id}`}
              type="checkbox"
              checked={selectedItems.includes(item.title)}
              onChange={() => handleItemClick(item.title)}
            />
            <label
              htmlFor={`${title}-${item.id}`}
              className="capitalize text-sm font-medium text-assLight inline-block leading-6"
            >
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(FilterItem);
