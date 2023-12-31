import { Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@chakra-ui/react";
import { useState, ChangeEvent, useContext, useEffect } from "react";
import { VehicleContext } from "../../../contexts/vehicleContext";
import {
  IVehicleCreate,
  IVehiclePagination,
} from "../../../interfaces/Vehicle/vehicle.interface";

export const SearchBar = () => {
  const {
    vehicles,
    getVehicles,
    setVehiclesPagination,
    getVehiclesPerPage,
    vehiclesPagination,
  } = useContext(VehicleContext);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getVehiclesPerPage(1, "desc");
    getVehicles("desc");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    const filteredCars: IVehicleCreate[] = vehicles.filter(
      (vehicle) =>
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (searchTerm === "") {
      getVehiclesPerPage(1, "desc");

      const updatedPagination: IVehiclePagination = {
        vehicles: vehiclesPagination.vehicles,
        currentPage: vehiclesPagination.currentPage,
        totalItems: vehiclesPagination.totalItems,
        limit: vehiclesPagination.limit,
      };

      setVehiclesPagination(updatedPagination);
    }

    const updatedPagination: IVehiclePagination = {
      vehicles: filteredCars,
      currentPage: vehiclesPagination.currentPage,
      totalItems: filteredCars.length,
      limit: vehiclesPagination.limit,
    };

    setVehiclesPagination(updatedPagination);
  };

  return (
    <>
      <Flex>
        <Flex
          alignItems={"center"}
          width={["100%", "100%", "90%"]}
          margin={"0 auto"}
          justifyContent={"space-evenly"}
          backgroundColor={"#3374DB"}
          height={["5rem", "7rem"]}
          boxShadow={"1px 5px 5px -3px rgba(0,0,0,0.2) inset"}
        >
          <Flex
            backgroundColor={"white"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"5px"}
            width={"90%"}
            height={["50px", "70px"]}
          >
            <Input
              type="text"
              placeholder="Busque por nome, modelo, marca..."
              fontSize={["16px", "20px"]}
              height={["20px"]}
              border={"none"}
              margin={"0 auto"}
              onChange={handleSearchChange}
            />
            <FaSearch size={["25px"]} onClick={handleSearchClick} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
