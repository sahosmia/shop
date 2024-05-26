import { createSlice } from "@reduxjs/toolkit";
import { CartItemReduxType } from "../../types";
import { getCartNextID } from "../../utils";

const initialState: CartItemReduxType[] = [
  { id: 1, productId: 1, quantity: 1, userId: 2 },
];

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      // Check if item exists
      const existingItemIndex = state.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.userId === action.payload.userId
      );

      if (existingItemIndex !== -1) {
        // existing item add only quantity
        state[existingItemIndex].quantity = action.payload.quantity;
      } else {
        const nextId = getCartNextID(state);

        // Add new Item
        state.push({
          id: nextId,
          productId: action.payload.productId,
          quantity: action.payload.quantity,
          userId: action.payload.userId,
        });
      }
    },

    // Delete a cart item
    DELETE_CART: (state, action) => {
      return state.filter(
        (item) =>
          item.productId !== action.payload.productId &&
          item.userId !== action.payload.userId
      );
    },
  },
});

const cartsReducer = cartsSlice.reducer;
export default cartsReducer;

// Export actions
export const { ADD_CART, DELETE_CART } = cartsSlice.actions;
