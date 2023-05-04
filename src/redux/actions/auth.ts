import type { AppDispatch } from "..";
import { login } from "../reducers/auth";
import Toast from "react-native-toast-message";

export const loginRequest = (isLoggedIn: boolean) => (dispatch: AppDispatch) => {
  dispatch(login(isLoggedIn));
  Toast.show({
    text1: "Login succesfully",
    type: "success",
    visibilityTime: 4000,
  });
};
