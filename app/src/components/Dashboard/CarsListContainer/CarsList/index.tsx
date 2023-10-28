import { Box, UnorderedList } from "@chakra-ui/react";
import { CarsListProps } from "../../../../interfaces/Vehicle/vehicle.interface";
import { CarCard } from "./CarCard";

export const CarsList: React.FC<CarsListProps> = ({ vehicles }) => {
  return (
    <>
      <Box>
        <UnorderedList
          listStyleType={"none"}
          spacing={"5"}
          overflowY={"auto"}
          maxHeight={"800px"}
        >
          {vehicles?.map((car) => {
            return <CarCard car={car} key={car.id} />;
          })}
        </UnorderedList>
      </Box>
    </>
  );
};
