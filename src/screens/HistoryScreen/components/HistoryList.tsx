import React from "react";
import { FlatListProps } from "react-native";
import { HistoryItemType } from "../../../utils/types";
import { Box, FlatList } from "native-base";
import HistoryItem from "./HistoryItem";

interface IHistoryList {
  data: HistoryItemType[];
}

type RenderItem = {
  item: HistoryItemType;
};

const HistoryList = ({ data, ...props }: IHistoryList) => {
  const renderItem = ({ item }: RenderItem) => <HistoryItem item={item} />;

  const renderSeparator = () => <Box my={1} />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      {...props}
    />
  );
};

export default HistoryList;
