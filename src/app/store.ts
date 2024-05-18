import { configureStore } from "@reduxjs/toolkit";
import cartsReducer from "../features/carts/cartsSlice";


const store = configureStore({
  reducer:{
    carts : cartsReducer,
  }
})

export default store;