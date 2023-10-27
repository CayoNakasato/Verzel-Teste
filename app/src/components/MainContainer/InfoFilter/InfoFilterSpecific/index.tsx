import { Button, Flex, Stack } from "@chakra-ui/react";

export const InfoFilterSpecific = () => {
  return (
    <>
      <Flex padding={"20px"} >
        <Stack
          spacing={4}
          maxWidth={"90%"}
          direction="row"
          align="center"
          overflowX={"auto"}
        >
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
            minWidth={"40%"}
          >
            Localização
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
            minWidth={"40%"}

          >
            Marca e Modelo
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
            minWidth={"40%"}

          >
            Ano
          </Button>
          <Button
            colorScheme="teal"
            size="sm"
            backgroundColor={"#E9EEF7"}
            color={"#3374DB"}
            fontWeight={"600"}
            minWidth={"40%"}

          >
            + Filtros
          </Button>
        </Stack>
      </Flex>
    </>
  );
};
