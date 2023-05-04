import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isLoggedIn: boolean;
}

const initialState: IInitialState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
