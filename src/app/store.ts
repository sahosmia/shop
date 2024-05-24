import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";
import wishListsReducer from "../features/wish-lists/wishListsSlice";
import authReducer from "../features/auth/authSlice";


const store = configureStore({
  reducer:{
    carts : cartsReducer,
    wishLists : wishListsReducer,
    auth : authReducer,
  }
})

export default store;