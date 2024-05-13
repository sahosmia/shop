import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types";
import { getCartNextID } from "../../utils";
import { productsData } from "../../data/dummy";

const initialState: ProductType[] = productsData;

const productsSlice = createSlice({
  name: "products",
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


  },
});

const productsReducer = productsSlice.reducer;
export default productsReducer;

export const { ADD_CART } =
  productsSlice.actions;
