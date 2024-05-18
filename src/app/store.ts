import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";
import wishListsReducer from "../features/wish-lists/wishListsSlice";


const store = configureStore({
  reducer:{
    carts : cartsReducer,
    wishLists : wishListsReducer,
  }
})

export default store;