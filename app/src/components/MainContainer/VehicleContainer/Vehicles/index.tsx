import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { IVehicleCreate } from "../../../../interfaces/Vehicle/vehicle.interface";

export const Vehicles = ({ vehicles }: { vehicles: IVehicleCreate[] }) => {
  return (
    <>
      {vehicles.length != 0 ? (
        vehicles.map((car) => {
          return (
            <Flex
              flexDirection={"column"}
              width={["90%", "40%"]}
              margin={"0 auto"}
              borderRadius={"10px"}
              gap={"10px"}
              boxShadow="lg"
              bg="white"
              key={car.id}
            >
              <Image src={car.frontImg} alt="Foto do carro" width={"100%"} />
              <Heading as="h4" size="sm" padding={"10px"}>
                {car.brand} {car.model} {car.name}
              </Heading>
              <Divider />
              <Flex alignItems={"center"} padding={"20px"} gap={"5px"}>
                <Text fontSize={"md"} fontWeight={"500"}>
                  R$
                </Text>
                <Text fontSize={"2xl"} fontWeight={"600"}>
                  {car.price}
                </Text>
              </Flex>
            </Flex>
          );
        })
      ) : (
        <Text>Ainda não há carros cadastrados!</Text>
      )}
    </>
  );
};
