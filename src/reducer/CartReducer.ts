import { CartItemType, CartReducerAction } from "../types";
import { getCartNextID } from "../utils";

export const cartReducer = (
  state: CartItemType[],
  action: CartReducerAction
): CartItemType[] => {
  // checkExists is declear beacuse switch block is not support to declear any variable
  let checkExists;
  const nextId = getCartNextID(state);

  switch (action.type) {
   
    case "ADD_CART":
      checkExists = state.find((item) => item.productId === action.productId);

      if (checkExists) {
        return state.map((item) => {
          if (item.productId === action.productId) {
            return { ...item, quantity: action.quantity };
          }
          return item;
        });
      } else {
        return [
          ...state,
          {
            id: nextId,
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
