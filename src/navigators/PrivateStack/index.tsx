import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "../BottomTabs";

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      {/* Tabs */}
      <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
      {/* Screens */}
    </Stack.Navigator>
  );
};

export default PrivateStack;
