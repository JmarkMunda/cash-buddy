import React from "react";
import { Box, Center, Container, HStack, Heading, Image } from "native-base";
import { useAppDispatch } from "../../redux";
import { loginRequest } from "../../redux/actions/auth";
import { PrimaryButton } from "../../components/global/Buttons";
import { TextField } from "../../components/global/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/schema";
import { palette } from "../../theme/colors";
import { logo } from "../../../assets";

type FormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });

  const onLoginTap = () => {
    dispatch(loginRequest(true));
  };

  return (
    <Center flex={1}>
      <Container>
        <Center>
          <HStack alignItems="center">
            <Heading color={palette.primary[500]} mr={4}>
              Welcome
            </Heading>
            <Image source={logo} size={50} alt="logo" />
          </HStack>
          <Box style={{ marginVertical: 16 }}>
            <TextField
              name="email"
              placeholder="Enter your email"
              label="Email"
              control={control}
              keyboardType="email-address"
            />
            <TextField
              name="password"
              placeholder="Enter your password"
              label="Password"
              control={control}
              type="password"
            />
          </Box>

          <PrimaryButton minW={200} title="Login" onPress={handleSubmit(onLoginTap)} />
        </Center>
      </Container>
    </Center>
  );
};
