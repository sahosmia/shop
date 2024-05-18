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
