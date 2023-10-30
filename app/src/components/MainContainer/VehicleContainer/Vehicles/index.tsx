import {
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IVehicleCreate } from "../../../../interfaces/Vehicle/vehicle.interface";

export const Vehicles = ({ vehicles }: { vehicles: IVehicleCreate[] }) => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });

  return (
    <>
      {breakpointValue === "1920px" ? (
        <Wrap spacing={"5"}>
          {vehicles.length != 0 ? (
            vehicles.map((car) => {
              return (
                <Wrap
                  width={["90%", "40% ", "40% ", "30%"]}
                  height={["25rem"]}
                  margin={"0 auto"}
                  borderRadius={"10px"}
                  boxShadow="lg"
                  bg="white"
                  key={car.id}
                >
                  <Image
                    src={car.frontImg}
                    alt="Foto do carro"
                    width={["100%"]}
                  />
                  <Heading
                    as="h4"
                    size="sm"
                    padding={"10px"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {car.brand} {car.model} {car.name}
                  </Heading>
                  <Divider />
                  <Flex alignItems={"center"} padding={"20px"} gap={"5px"}>
                    <Text
                      fontWeight={"500"}
                      fontSize={{ base: "sm", md: "lg" }}
                    >
                      R$
                    </Text>
                    <Text
                      fontWeight={"600"}
                      fontSize={{ base: "2xl", md: "30px" }}
                    >
                      {car.price}
                    </Text>
                  </Flex>
                </Wrap>
              );
            })
          ) : (
            <Text>Ainda não há carros cadastrados!</Text>
          )}
        </Wrap>
      ) : (
        <>
          {vehicles.length != 0 ? (
            vehicles.map((car) => {
              return (
                <Flex
                  flexDirection={"column"}
                  width={["90%", "40% ", "40% ", "20%"]}
                  margin={"0 auto"}
                  borderRadius={"10px"}
                  gap={"10px"}
                  boxShadow="lg"
                  bg="white"
                  key={car.id}
                >
                  <Image
                    src={car.frontImg}
                    alt="Foto do carro"
                    width={["100%"]}
                  />
                  <Heading
                    as="h4"
                    size="sm"
                    padding={"10px"}
                    fontSize={{ base: "sm", md: "lg" }}
                  >
                    {car.brand} {car.model} {car.name}
                  </Heading>
                  <Divider />
                  <Flex alignItems={"center"} padding={"20px"} gap={"5px"}>
                    <Text
                      fontWeight={"500"}
                      fontSize={{ base: "sm", md: "lg" }}
                    >
                      R$
                    </Text>
                    <Text
                      fontWeight={"600"}
                      fontSize={{ base: "2xl", md: "30px" }}
                    >
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
      )}
    </>
  );
};
