import { useState } from "react";
import { Button, Container, Heading } from "native-base";

export default function LoginScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container>
      <Heading>Welcome</Heading>
      <Button onPress={() => setIsLoggedIn(true)}>Login</Button>
    </Container>
  );
}
