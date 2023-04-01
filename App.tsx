import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/screens/AppNavigator";
import Toast from "react-native-toast-message";
import { NativeBaseProvider, Text } from "native-base";
import { colorModeManager, config, theme } from "./src/theme";
import store from "./src/redux";
import { Provider } from "react-redux";
import { Poppins_400Regular } from "@expo-google-fonts/dev";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync("Poppins_400Regular", Poppins_400Regular);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (appIsReady)
    return (
      <Provider store={store}>
        <NativeBaseProvider theme={theme} colorModeManager={colorModeManager} config={config}>
          <NavigationContainer onReady={onLayoutRootView}>
            <AppNavigator />
          </NavigationContainer>
          <Toast autoHide visibilityTime={2000} onPress={() => Toast.hide()} />
        </NativeBaseProvider>
      </Provider>
    );
}
