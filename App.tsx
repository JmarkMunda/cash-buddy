import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/screens/AppNavigator";
import Toast from "react-native-toast-message";
import { NativeBaseProvider } from "native-base";
import { colorModeManager, config, theme } from "./src/theme";
import store from "./src/redux";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider
        theme={theme}
        colorModeManager={colorModeManager}
        config={config}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
        <Toast autoHide visibilityTime={2000} onPress={() => Toast.hide()} />
      </NativeBaseProvider>
    </Provider>
  );
}
