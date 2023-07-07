import { HStack } from "native-base";
import React from "react";
import Text from "../../../components/global/Text";
import Icon from "../../../components/global/Icon";
import { HistoryItemType } from "../../../utils/types";

interface IHistoryItem {
  item: HistoryItemType;
}

const HistoryItem = ({ item }: IHistoryItem) => {
  return (
    <HStack justifyContent="space-between" bg="white" rounded="lg" px={2} py={4}>
      <Text>{item.description}</Text>
      <HStack alignItems="center">
        <Text mr={2}>{`P ${item.amount.toString()}`}</Text>
        <Icon.EntypoSet
          name={item.type === "income" ? "arrow-up" : "arrow-down"}
          size={24}
          color={item.type === "income" ? "#00b30f" : "#e72828"}
        />
      </HStack>
    </HStack>
  );
};

export default HistoryItem;
