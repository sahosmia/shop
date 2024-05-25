import { createSlice } from "@reduxjs/toolkit";
import { WishListItemReduxType } from "../../types";
import { getWishListID } from "../../utils";

// Define the initial state for the wish list
const initialState: WishListItemReduxType[] = [
  { id: 1, productId: 1, userId: 1 },
];

const wishListsSlice = createSlice({
  name: "wish-lists",
  initialState,
  reducers: {
    // Add or remove a wish list item
    ADD_Wish: (state, action) => {
      // Check if item exists
      const existingItemIndex = state.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.userId === action.payload.userId
      );

      if (existingItemIndex !== -1) {
        // Remove existing item
        return state.filter(
          (item) =>
            item.productId !== action.payload.productId &&
            item.userId !== action.payload.userId
        );
      } else {
        // Otherwise, add the new item
        const nextId = getWishListID(state);
        state.push({
          id: nextId,
          productId: action.payload.productId,
          userId: action.payload.userId,
        });
      }
    },

    // Delete a wish list item 
    DELETE_Wish: (state, action) => {
      return state.filter(
        (item) =>
          item.productId !== action.payload.productId &&
          item.userId !== action.payload.userId
      );
    },
  },
});

const wishListsReducer = wishListsSlice.reducer;
export default wishListsReducer;

// Export actions
export const { ADD_Wish, DELETE_Wish } = wishListsSlice.actions;
