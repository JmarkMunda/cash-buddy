import { createDrawerNavigator } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import PrivateStack from "./PrivateStack";
import { DrawerContents } from "../components/layouts/DrawerContents";

const Drawer = createDrawerNavigator();

export const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContents {...props} />}
      screenOptions={{
        drawerType: "back",
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Private" component={PrivateStack} />
    </Drawer.Navigator>
  );
};
