import { Flex, Text, Wrap, useBreakpointValue } from "@chakra-ui/react";
import { Vehicles } from "./Vehicles";
import { ChangePageButtons } from "./ChangePageButtons";
import { SearchFor } from "../SearchForContainer/SearchFor";
import { useContext, useEffect, useState } from "react";
import { VehicleContext } from "../../../contexts/vehicleContext";
import { InfoFilterModal } from "../InfoFilter/InfoFilterModal";

export const VehicleContainer = () => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });
  const { getVehiclesPerPage, vehiclesPagination } = useContext(VehicleContext);

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [, setFiltersModal] = useState<string[]>([]);

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
      {breakpointValue === "1920px" ? (
        <>
          <Flex flexDirection={"column"} gap={"30px"}>
            <Flex
              width={["100%", "100%", "100%", "80%"]}
              margin={[
                "10px 0 10px 0",
                "10px 0 10px 0",
                "10px 0 10px 0",
                "0 auto",
              ]}
            >
              <Flex flexDirection={"column"}>
                <Flex>
                  <InfoFilterModal setFiltersModal={setFiltersModal} />
                  <Vehicles vehicles={vehicles} />
                </Flex>
                <Flex flexDirection={"column"}>
                  <ChangePageButtons
                    vehiclesPagination={vehiclesPagination}
                    onPageChange={handlePageChange}
                  />

                  <Flex width={"95%"} margin={"0 auto"}>
                    <Text fontSize={{ base: "sm", md: "lg" }}>
                      {" "}
                      *As parcelas apresentadas são calculadas a partir de uma
                      entrada de 60% do valor do carro e 60 parcelas mensais com
                      uma taxa de juros mensal de 2,46%. Termos e condições são
                      aplicáveis.
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <SearchFor />
          </Flex>
        </>
      ) : (
        <>
          <Flex flexDirection={"column"} gap={"30px"}>
            <Wrap
              spacing={"20px"}
              width={["100%", "100%", "100%", "80%"]}
              margin={[
                "10px 0 10px 0",
                "10px 0 10px 0",
                "10px 0 10px 0",
                "0 auto",
              ]}
            >
              <Vehicles vehicles={vehicles} />
            </Wrap>
            <ChangePageButtons
              vehiclesPagination={vehiclesPagination}
              onPageChange={handlePageChange}
            />
            <Flex width={"95%"} margin={"0 auto"}>
              <Text fontSize={{ base: "sm", md: "lg" }}>
                {" "}
                *As parcelas apresentadas são calculadas a partir de uma entrada
                de 60% do valor do carro e 60 parcelas mensais com uma taxa de
                juros mensal de 2,46%. Termos e condições são aplicáveis.
              </Text>
            </Flex>
            <SearchFor />
          </Flex>
        </>
      )}
    </>
  );
};
