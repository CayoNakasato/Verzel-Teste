import { Button, Flex, Stack } from "@chakra-ui/react";

export const InfoFilterSpecific = () => {
  return (
    <>
      <Flex padding={"5px"}>
        <Stack spacing={1} direction="row" align="center">
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
          >
            Lolcalização
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
          >
            Marca e Modelo
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
          >
            Ano
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
          >
            + Filtros
          </Button>
        </Stack>
      </Flex>
    </>
  );
};
