import React from "react";
import { useWindowDimensions } from "react-native";
import { Box, VStack } from "native-base";
import Text from "../../../components/global/Text";

const Card = () => {
  const { width } = useWindowDimensions();

  return (
    <VStack alignSelf="center" w={{ base: width / 1.2, lg: width / 1.3 }} mt={4}>
      <Box bg="amber.300" rounded="lg" p={4} shadow="4" w="full" h={150}>
        <Text alignSelf="flex-end" color="gray.700">
          06/21/2023
        </Text>
        <Box flex={1}>
          <Text fontSize="2xl" color="gray.700">
            Balance
          </Text>
          <Text fontSize="lg" color="gray.700" bold>
            P 10,000
          </Text>
        </Box>
        <Text alignSelf="flex-end" color="gray.700">
          @Jm
        </Text>
      </Box>
    </VStack>
  );
};

export default Card;
