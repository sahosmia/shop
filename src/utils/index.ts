import { brandsData, categoriesData, tagsData } from "../data/dummy";
import { CartItemType, WishListItemReduxType } from "../types";

export const getDiscountPrice = (price: number, discountRate: number) => {
  return (price - (price * discountRate) / 100).toFixed(2);
};

export const getCartNextID = (arr: CartItemType[]) => {
  if (arr.length === 0) {
    return 1;
  }

  const maxID = Math.max(...arr.map((item) => item.id));
  return maxID + 1;
};

export const getWishListID = (arr: WishListItemReduxType[]) => {
  if (arr.length === 0) {
    return 1;
  }

  const maxID = Math.max(...arr.map((item) => item.id));
  return maxID + 1;
};




const getCategoryByTitle = (title: string) => {
  const categoryItem = categoriesData.find((item) => item.title === title);
  return categoryItem;
};

const getBrandByTitle = (title:string) => {
  const brandItem = brandsData.find((item) => item.title === title);
  return brandItem;
};

const getTagByTitle = (title:string) => {
  const tagItem = tagsData.find((item) => item.title === title);  return tagItem;
};



export { getCategoryByTitle, getBrandByTitle, getTagByTitle };
