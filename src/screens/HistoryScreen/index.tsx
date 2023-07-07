import React from "react";
import { StyleSheet } from "react-native";
import { Box } from "native-base";
import Icon from "../../components/global/Icon";
import Text from "../../components/global/Text";
import HistoryList from "./components/HistoryList";
import { HistoryItemType } from "../../utils/types";
import HistoryItem from "./components/HistoryItem";

export default function HistoryScreen() {
  const history = [
    {
      id: 1,
      description: "Paid for the rent",
      amount: -3000,
      type: "expense" as const,
    },
    {
      id: 2,
      description: "Bought a new book",
      amount: -200,
      type: "expense" as const,
    },
    {
      id: 3,
      description: "Received money from mom",
      amount: 4500,
      type: "income" as const,
    },
    {
      id: 4,
      description: "Received money from mom",
      amount: 4500,
      type: "income" as const,
    },
    {
      id: 5,
      description: "Received money from mom",
      amount: 4500,
      type: "income" as const,
    },
    {
      id: 6,
      description: "Received money from mom",
      amount: 4500,
      type: "expense" as const,
    },
    {
      id: 7,
      description: "Received money from mom",
      amount: 4500,
      type: "income" as const,
    },
    {
      id: 8,
      description: "Received money from mom",
      amount: 4500,
      type: "expense" as const,
    },
    {
      id: 9,
      description: "Received money from mom",
      amount: 4500,
      type: "expense" as const,
    },
  ];

  return (
    <Box p={4} rounded="lg" flex={1}>
      <Text mb={2} fontSize="md">
        Recent:
      </Text>

      <HistoryList data={history}  />
    </Box>
  );
}

const styles = StyleSheet.create({});
