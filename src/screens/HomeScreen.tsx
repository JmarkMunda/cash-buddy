import React from "react";
import { Button, Container, Text, Heading, HStack } from "native-base";
import Toast from "react-native-toast-message";
import { useAppSelector, useAppDispatch } from "../redux";
import { decrement, increment } from "../redux/reducers/counter";

export default function HomeScreen() {
  const { value } = useAppSelector(({ counter }) => counter);
  const dispatch = useAppDispatch();

  const handleToast = () => {
    Toast.show({
      text1: "Hello",
      text2: "This is a toast",
    });
  };

  return (
    <Container>
      <Text>HomeScreen</Text>
      <Button onPress={handleToast}>Show toast</Button>
      <Heading>Counter: {value}</Heading>
      <HStack space={4}>
        <Button onPress={() => dispatch(decrement())} variant="solid">
          -
        </Button>
        <Button onPress={() => dispatch(increment())}>+</Button>
      </HStack>
    </Container>
  );
}
