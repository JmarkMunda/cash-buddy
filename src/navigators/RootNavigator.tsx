import React from "react";
import { useAppSelector } from "../redux";
import { AppDrawer } from "./AppDrawer";
import PublicStack from "./PublicStack";

const RootNavigator = () => {
  const { isLoggedIn } = useAppSelector(({ auth }) => auth);

  if (!isLoggedIn) {
    return <PublicStack />; // -> Login, Register, etc...
  } else {
    return <AppDrawer />; // -> Home, Profile, etc...
  }
};

export default RootNavigator;
