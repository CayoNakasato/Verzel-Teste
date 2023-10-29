import { Flex, Select, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { VehicleContext } from "../../../../contexts/vehicleContext";

export const InfoFilterPrice = () => {
  const { getVehiclesPerPage, vehiclesPagination, setVehiclesPagination } =
    useContext(VehicleContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVehiclesPerPage(1);

    setLoading(false);
  }, []);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value;

    const sortedCars = [...vehiclesPagination.vehicles];

    if (sortBy === "Menor preço") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Maior preço") {
      sortedCars.sort((a, b) => b.price - a.price);
    }

    const updatedPagination = {
      ...vehiclesPagination,
      vehicles: sortedCars,
    };

    console.log(updatedPagination);

    setVehiclesPagination(updatedPagination);
  };

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
            onChange={handleSortChange}
          >
            <option value="Menor preço">Menor preço</option>
            <option value="Maior preço">Maior preço</option>
          </Select>
        </Flex>
      </Flex>
    </>
  );
};
