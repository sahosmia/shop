import { toast } from "react-toastify";
import { brandsData, categoriesData, tagsData } from "../data/dummy";
import { users } from "../data/users";
import { CartItemType, WishListItemReduxType } from "../types";

export const getDiscountPrice = (
  price: number,
  discountRate: number
): number => {
  const discountedPrice = price - (price * discountRate) / 100;
  return parseFloat(discountedPrice.toFixed(2));
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

const getBrandByTitle = (title: string) => {
  const brandItem = brandsData.find((item) => item.title === title);
  return brandItem;
};

const getTagByTitle = (title: string) => {
  const tagItem = tagsData.find((item) => item.title === title);
  return tagItem;
};

const getUser = (useId: number) => {
  const data = users.find((item) => item.id === useId);
  return data;
};

const showNotification = (status: string, message: string) => {
  switch (status) {
    case "success":
      return toast.success(message);
    case "error":
      return toast.error(message);
    case "warn":
      return toast.warn(message);
    case "info":
      return toast.info(message);
    default:
      return toast(message);
  }
};

export {
  getCategoryByTitle,
  getBrandByTitle,
  getTagByTitle,
  getUser,
  showNotification,
};
