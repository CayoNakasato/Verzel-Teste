import { Flex, Text, Wrap } from "@chakra-ui/react";
import { Vehicles } from "./Vehicles";
import { ChangePageButtons } from "./ChangePageButtons";
import { SearchFor } from "../SearchForContainer/SearchFor";

export const VehicleContainer = () => {
  return (
    <>
      <Flex flexDirection={"column"} gap={"30px"}>
        <Wrap spacing={"20px"} margin={"10px 0 10px 0"}>
          <Vehicles />
        </Wrap>
        <ChangePageButtons />
        <Flex width={"95%"} margin={"0 auto"}>
          <Text fontSize={"13px"}>
            {" "}
            *As parcelas apresentadas são calculadas a partir de uma entrada de
            60% do valor do carro e 60 parcelas mensais com uma taxa de juros
            mensal de 2,46%. Termos e condições são aplicáveis.
          </Text>
        </Flex>
        <SearchFor/>
      </Flex>
    </>
  );
};
