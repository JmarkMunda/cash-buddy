import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ProfileScreen } from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from "../screens/SettingsScreen";
import HomeScreen from "../screens/HomeScreen";

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
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={screen.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
