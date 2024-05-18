import { createSlice } from "@reduxjs/toolkit";
import { WishListItemReduxType } from "../../types";
import { getWishListID } from "../../utils";

const initialState: WishListItemReduxType[] = [{ id: 1, productId: 1 }];

const wishListsSlice = createSlice({
  name: "wish-lists",
  initialState,
  reducers: {
    ADD_Wish: (state, action) => {
      const existingItemIndex = state.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItemIndex !== -1) {
        // -1 === false
        return state.filter(
          (item) => item.productId !== action.payload.productId
        );
      } else {
        const nextId = getWishListID(state);
        state.push({
          id: nextId,
          productId: action.payload.productId,
        });
      }
    },

    DELETE_Wish: (state, action) => {
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );
    },
  },
});

const wishListsReducer = wishListsSlice.reducer;
export default wishListsReducer;

export const { ADD_Wish, DELETE_Wish } = wishListsSlice.actions;
