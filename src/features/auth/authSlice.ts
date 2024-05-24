import { createSlice } from "@reduxjs/toolkit";
import { AuthReduxType } from "../../types";


const initialState: AuthReduxType = {
  user: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.user = action.payload;
    },

    Logout: (state) => {
      state.user = null;
    }
  },
});

const authReducer = authSlice.reducer;
export default authReducer;

export const { Login, Logout } = authSlice.actions;
