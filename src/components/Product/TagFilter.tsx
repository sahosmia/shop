import React, { memo } from "react";

type TagsFilterProps = {
  tags: { id: number; title: string; slug: string }[];
  selectedTags: string[];
  onSelectTags: (title: string[]) => void;
};

const TagFilter: React.FC<TagsFilterProps> = ({
  tags,
  selectedTags,
  onSelectTags,
}) => {
  const handleTagClick = (title: string) => {
    if (selectedTags.includes(title)) {
      onSelectTags(selectedTags.filter((t) => t !== title));
    } else {
      onSelectTags([...selectedTags, title]);
    }
  };

  
  return (
    <div className=" bg-gray-100 rounded-lg p-4">
      <h6 className="text-xl font-semibold text-primary2 pb-5">Tags</h6>
      <ul className=" h-56 overflow-auto border p-2 rounded">
        {tags.map((tag) => (
          <li
            className={`${
              selectedTags.includes(tag.title) ? "text-red-500" : ""
            } hover:text-red-500 transition flex items-center gap-2`}
            key={tag.id}
          >
            <input
              id={`tag-${tag.id}`}
              type="checkbox"
              checked={selectedTags.includes(tag.title)}
              onChange={() => handleTagClick(tag.title)}
            />
            <label
              htmlFor={`tag-${tag.id}`}
              className="capitalize text-sm font-medium text-assLight inline-block leading-8 "
            >
              {tag.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default memo(TagFilter);
