import { useState } from "react";
import { Box, Center, VStack } from "native-base";
import { useAppSelector, useAppDispatch } from "../../redux";
import { PieChart } from "react-native-chart-kit";
import { useWindowDimensions } from "react-native";
import Toast from "react-native-toast-message";
import Text from "../../components/global/Text";
import Loading from "../../components/global/Loading";
import RegularButton from "../../components/global/Buttons/RegularButton";
import DropdownSelect from "../../components/global/DropdownSelect";
import HistoryList from "../HistoryScreen/components/HistoryList";
import { chartConfig, data, recentHistory } from "./lib/constants";
import Card from "./components/Card";

export default function HomeScreen() {
  const { value } = useAppSelector(({ counter }) => counter);
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();

  const handleToast = () => {
    Toast.show({
      text1: "Hello",
      text2: "This is a toast",
    });
  };

  return (
    <Box p={4} flex={1}>
      {/* Card */}
      <Card />

      {/* Chart */}
      <Center>
        <PieChart
          data={data}
          width={width}
          height={200}
          chartConfig={chartConfig}
          accessor={"amount"}
          backgroundColor={"transparent"}
          paddingLeft={"5"}
          absolute
        />
      </Center>

      {/* Recent */}
      <HistoryList data={recentHistory} />
      {/* <Loading loading={loading} textContent="Please wait..." /> */}
    </Box>
  );
}
