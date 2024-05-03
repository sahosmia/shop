import { CartItemType, CartReducerAction } from "../types";

export const cartReducer = (
  state: CartItemType[],
  action: CartReducerAction
): CartItemType[] => {
  // checkExists is declear beacuse switch block is not support to declear any variable
  let checkExists;

  switch (action.type) {
    // Add to cart by product item
    case "ADD_CART":
      // check this product is added or not in cart
      checkExists = state.find((item) => item.productId === action.productId);

      if (checkExists) {
        // checkExists is true && increment the quantity property
        return state.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: action.quantity + item.quantity };
          }

          return item;
        });
      } else {
        // checkexists  is false & add new cart item
        return [
          ...state,
          {
            id: action.id,
            productId: action.productId,
            quantity: action.quantity,
          },
        ];
      }

    // increment or decrement cart item quantity in cart page
    case "UPDATE_QUANTITY_CART":
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: action.quantity };
        }

        return item;
      });

    // delete cart item
    case "DELETE_CART":
      return state.filter((item) => item.productId !== action.productId);

    // default case
    default:
      throw new Error("Unsupported action type");
  }
};
