import { Flex} from "@chakra-ui/react";
import { InfoFilterPrice } from "./InfoFilterPrice";
import { InfoFilterSpecific } from "./InfoFilterSpecific";
import { InfoFilterVehicleModel } from "./InfoFilterVehicleModel";

export const InfoFilter = () => {
  return (
    <>
      <Flex
        flexDirection={"column"}
        borderTopLeftRadius={"10px"}
        borderTopRightRadius={"10px"}
      >

        <InfoFilterPrice/>
        
        <InfoFilterSpecific />
        
        <InfoFilterVehicleModel />
        
      </Flex>
    </>
  );
};
