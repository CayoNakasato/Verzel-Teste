import { Flex, Select, Text } from "@chakra-ui/react";

export const InfoFilterPrice = () => {
  return (
    <>
      <Text padding={"10px 0 0 10px"} fontSize="sm">
        CARROS USADOS
      </Text>

      <Flex
        padding={"10px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <span>1.823 Resultados</span>

        <Flex alignItems={"center"}>
          <span>Ordenar:</span>

          <Select
            placeholder="Select option"
            color={"blue"}
            fontWeight={"500"}
            border={"none"}
            defaultValue={"Relevância"}
          >
            <option value="option1">Relevância </option>
            <option value="option2">Menor preço</option>
            <option value="option3">Maior preço</option>
            <option value="option3">Mais antigos</option>
            <option value="option3">Mais novos</option>
            <option value="option3">Menor km</option>
            <option value="option3">Maior km</option>
          </Select>
        </Flex>
      </Flex>
    </>
  );
};
