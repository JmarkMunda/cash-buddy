import React from "react";
import { Button, Center, Container, Heading } from "native-base";
import { useAppDispatch } from "../redux";
import { loginRequest } from "../redux/actions/auth";

export const LoginScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <Center flex={1}>
      <Container>
        <Center>
          <Heading>Welcome</Heading>
          <Button minW={150} onPress={() => dispatch(loginRequest(true))}>
            Login
          </Button>
        </Center>
      </Container>
    </Center>
  );
};
