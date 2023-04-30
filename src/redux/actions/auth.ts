import type { AppDispatch } from "..";
import { LOGIN_ACTION } from "../constants";
import { login } from "../reducers/auth";

export const loginRequest = (isLoggedIn: boolean) => (dispatch: AppDispatch) => {
  dispatch(login(isLoggedIn));
};
