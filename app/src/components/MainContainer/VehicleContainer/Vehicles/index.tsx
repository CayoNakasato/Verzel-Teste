import { Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import brazil from "../../../../assets/brazil.png";

export const Vehicles = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        width={["90%", "40%"]}
        margin={"0 auto"}
        borderRadius={"10px"}
        gap={"10px"}
        boxShadow="lg"
        bg="white"
      >
        <Image src={brazil} alt="FOTO DO CARRO" width={"100%"} />
        <Heading as="h4" size="sm" padding={"10px"}>
          MARCA DO CARRO MODELO DO CARRO
        </Heading>
        <Divider />
        <Text fontSize={"xl"} fontWeight={"700"} padding={"20px"}>
          PREÇO
        </Text>
      </Flex>

      <Flex
        flexDirection={"column"}
        width={["90%", "40%"]}
        margin={"0 auto"}
        borderRadius={"10px"}
        gap={"10px"}
        boxShadow="lg"
        bg="white"
      >
        <Image src={brazil} alt="FOTO DO CARRO" width={"100%"} />
        <Heading as="h4" size="sm" padding={"10px"}>
          MARCA DO CARRO MODELO DO CARRO
        </Heading>
        <Divider />
        <Text fontSize={"xl"} fontWeight={"700"} padding={"20px"}>
          PREÇO
        </Text>
      </Flex>
    </>
  );
};
