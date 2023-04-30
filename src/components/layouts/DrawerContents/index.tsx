import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import type { DrawerContentComponentProps } from "@react-navigation/drawer";
import { useTheme } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const DrawerContents = (props: DrawerContentComponentProps) => {
  const { colors } = useTheme();

  const drawerItems = [
    {
      label: "Incomes" as const,
      renderIcon: (props: { size: number; color: string }) => (
        <MaterialCommunityIcons name="archive-arrow-down-outline" {...props} />
      ),
      handlePress: () => console.log("Incomes"),
    },
    {
      label: "Expenses " as const,
      renderIcon: (props: { size: number; color: string }) => (
        <MaterialCommunityIcons name="archive-arrow-up-outline" {...props} />
      ),
      handlePress: () => console.log("expenses"),
    },
  ];

  return (
    <DrawerContentScrollView {...props}>
      {drawerItems.map((item) => (
        <DrawerItem
          key={item.label}
          label={item.label}
          onPress={item.handlePress}
          activeBackgroundColor={colors.primary[200]}
          activeTintColor={colors.black}
          icon={item.renderIcon}
        />
      ))}
    </DrawerContentScrollView>
  );
};
