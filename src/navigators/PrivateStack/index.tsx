import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabs } from "../BottomTabs";
import { IncomesScreen } from "../../screens/IncomesScreen";
import { ExpensesScreen } from "../../screens/ExpensesScreen";

const Stack = createNativeStackNavigator();

const PrivateStack = () => {
  return (
    <Stack.Navigator>
      {/* Tabs */}
      <Stack.Screen name="Tabs" component={BottomTabs} options={{ headerShown: false }} />
      {/* Screens */}
      <Stack.Screen name="Incomes" component={IncomesScreen} />
      <Stack.Screen name="Expenses" component={ExpensesScreen} />
    </Stack.Navigator>
  );
};

export default PrivateStack;
