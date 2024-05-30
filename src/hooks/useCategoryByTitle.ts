import { categoriesData } from "../data/dummy";

const useCategoryByTitle = (title: string) => {
  const categoryItem = categoriesData.find((item) => item.title === title);
  return categoryItem;
};

export default useCategoryByTitle;
