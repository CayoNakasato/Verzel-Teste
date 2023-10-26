import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import brazil from "../../../assets/brazil.png";

export const VehicleContainer = () => {
  return (
    <>
      <div>
        <Flex>
          <Image src={brazil} alt="FOTO DO CARRO"/>
          <Heading as='h2'>MARCA DO CARRO + MODELO DO CARRO</Heading>
            <Text>NOME DO CARRO</Text>

        </Flex>
      </div>
    </>
  );
};
