import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { infoFilterVehicleModelOption } from "../../../../data/constants";

export const InfoFilterVehicleModel = () => {
  return (
    <>
      <Flex padding={"20px"} flexDirection={"column"} gap={["10px", "20px"]}>
        <Text padding={"5px"} fontSize={{ base: "sm", md: "xl" }}>
          Escolha o tipo:
        </Text>

        <Stack spacing={1} direction="row" align="center">
          {infoFilterVehicleModelOption.map((type, index) => {
            return (
              <Button
                colorScheme="teal"
                size="sm"
                backgroundColor={"#3374DB"}
                color={"white"}
                fontWeight={"600"}
                borderRadius={"150px"}
                key={index}
                fontSize={{ base: "sm", md: "lg" }}
              >
                {type}
              </Button>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};
