import { extendTheme, ColorMode } from "native-base";
import type { StorageManager } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { palette } from "./colors";
import { LinearGradient } from "expo-linear-gradient";

export const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem("@my-app-color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      console.log(e);
      return "light";
    }
  },
  set: (value: ColorMode) => {
    (async () => {
      try {
        await AsyncStorage.setItem("@my-app-color-mode", value!);
      } catch (e) {
        console.log(e);
      }
    })().catch((e) => console.log(e));
  },
};

export const theme = extendTheme({ colors: palette });
