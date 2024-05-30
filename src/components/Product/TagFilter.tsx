import React from "react";

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
    <div className="mb-20 bg-gray-100 rounded-lg p-8">
      <h6 className="text-2xl font-semibold text-primary2 pb-5">Tags</h6>
      <ul>
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
            {/* <button
              className="capitalize text-sm font-medium text-assLight leading-8 flex justify-between gap-5"
              type="button"
              onClick={() => handleTagClick(tag.title)}
            >
              <div className="inline-block">{tag.title}</div>{" "}
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TagFilter;
