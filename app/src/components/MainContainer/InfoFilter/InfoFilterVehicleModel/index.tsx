import { Button, Flex, Stack, Text } from "@chakra-ui/react";

export const InfoFilterVehicleModel = () => {
  return (
    <>
      <Flex padding={"20px"} flexDirection={"column"}>
        <Text padding={"5px"}>Escolha o tipo:</Text>

        <Stack spacing={1} direction="row" align="center">
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#3374DB"}
            color={"white"}
            fontWeight={"600"}
            borderRadius={"150px"}
          >
            Hatchback
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#3374DB"}
            color={"white"}
            fontWeight={"600"}
            borderRadius={"150px"}
          >
            Sedan
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#3374DB"}
            color={"white"}
            fontWeight={"600"}
            borderRadius={"150px"}
          >
            SUV
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#3374DB"}
            color={"white"}
            fontWeight={"600"}
            borderRadius={"150px"}
          >
            Pickup
          </Button>
        </Stack>
      </Flex>
    </>
  );
};
