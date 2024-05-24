import { createSlice } from "@reduxjs/toolkit";
import { CartItemReduxType } from "../../types";
import { getCartNextID } from "../../utils";

const initialState: CartItemReduxType[] = [
{id: 1, productId: 1, quantity: 1}];

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    ADD_CART: (state, action) => {
      const existingItemIndex = state.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItemIndex !== -1) {
        // -1 === false
        state[existingItemIndex].quantity = action.payload.quantity;
      } else {
        const nextId = getCartNextID(state);

        state.push({
          id: nextId,
          productId: action.payload.productId,
          quantity: action.payload.quantity,
        });
      }
    },

    DELETE_CART: (state, action) => {
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

const cartsReducer = cartsSlice.reducer;
export default cartsReducer;

export const { ADD_CART, DELETE_CART } =
  cartsSlice.actions;
