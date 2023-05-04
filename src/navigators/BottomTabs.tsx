import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";
import { Icon, IconButton } from "native-base";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const screens = [
    {
      name: "Profile",
      component: ProfileScreen,
      icon: "person-outline" as const,
    },
    {
      name: "Home",
      component: HomeScreen,
      icon: "home-outline" as const,
    },
    {
      name: "Settings",
      component: SettingsScreen,
      icon: "settings-outline" as const,
    },
  ];

  return (
    <Tab.Navigator initialRouteName="Home">
      {screens.map((screen) => (
        <Tab.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={({ navigation }) => ({
            headerLeft: () => (
              <IconButton
                icon={<Icon as={MaterialIcons} name="menu" />}
                onPress={() => navigation.toggleDrawer()}
              />
            ),
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={screen.icon} color={color} size={size} />
            ),
          })}
        />
      ))}
    </Tab.Navigator>
  );
};
