import { Flex, Text, Wrap } from "@chakra-ui/react";
import { Vehicles } from "./Vehicles";
import { ChangePageButtons } from "./ChangePageButtons";
import { SearchFor } from "../SearchForContainer/SearchFor";
import { useContext, useEffect, useState } from "react";
import { VehicleContext } from "../../../contexts/vehicleContext";


export const VehicleContainer = () => {
  const { getVehiclesPerPage, vehiclesPagination } = useContext(VehicleContext);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    const pageToLoad = newPage || 1;
    setCurrentPage(pageToLoad);
  };

  useEffect(() => {
    const pageToLoad = currentPage || 1;
    getVehiclesPerPage(pageToLoad, "desc").then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (loading) {
    return <p>Carregando...</p>;
  }
  const vehicles = vehiclesPagination.vehicles;

  return (
    <>
      <Flex flexDirection={"column"} gap={"30px"}>
        <Wrap spacing={"20px"} margin={"10px 0 10px 0"}>
          <Vehicles vehicles ={vehicles} />
        </Wrap>
        <ChangePageButtons
          vehiclesPagination={vehiclesPagination}
          onPageChange={handlePageChange}
        />
        <Flex width={"95%"} margin={"0 auto"}>
          <Text fontSize={"13px"}>
            {" "}
            *As parcelas apresentadas são calculadas a partir de uma entrada de
            60% do valor do carro e 60 parcelas mensais com uma taxa de juros
            mensal de 2,46%. Termos e condições são aplicáveis.
          </Text>
        </Flex>
        <SearchFor />
      </Flex>
    </>
  );
};
