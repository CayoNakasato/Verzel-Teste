import { Flex, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { VehicleContext } from "../../../../contexts/vehicleContext";

export const InfoFilterPrice = () => {
  const { getVehiclesPerPage, vehiclesPagination } = useContext(VehicleContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehiclesPerPage();

    setLoading(false);
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }
  const totalItems = vehiclesPagination.totalItems;

  return (
    <>
      <Text padding={"20px 0 0 20px"} fontSize="sm">
        CARROS USADOS
      </Text>

      <Flex
        padding={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <span>{totalItems} Resultados</span>

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
