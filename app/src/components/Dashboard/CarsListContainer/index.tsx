import { Spinner, Text } from "@chakra-ui/react";
import { CarsListProps } from "../../../interfaces/Vehicle/vehicle.interface";
import { CarsList } from "./CarsList";

export const CarsListContainer: React.FC<CarsListProps> = ({ vehicles }) => {


  return (
    <>
      {!vehicles ? (
        <Spinner />
      ) : vehicles?.length != 0 ? (
        <CarsList vehicles={vehicles} />
      ) : (
        <Text>Ainda não há carros!</Text>
      )}
    </>
  );
};
