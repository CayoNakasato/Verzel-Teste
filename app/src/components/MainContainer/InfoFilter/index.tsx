import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { InfoFilterPrice } from "./InfoFilterPrice";
import { InfoFilterSpecific } from "./InfoFilterSpecific";
import { InfoFilterVehicleModel } from "./InfoFilterVehicleModel";

export const InfoFilter = () => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });

  return (
    <>
      {breakpointValue === "1920px" ? (
        <>
          <Flex
            flexDirection={"column"}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
            width={"80%"}
            margin={"0 auto"}
          >
            <InfoFilterPrice />
            <InfoFilterVehicleModel />
          </Flex>
        </>
      ) : (
        <>
          {" "}
          <Flex
            flexDirection={"column"}
            borderTopLeftRadius={"10px"}
            borderTopRightRadius={"10px"}
          >
            <InfoFilterPrice />

            <InfoFilterSpecific />

            <InfoFilterVehicleModel />
          </Flex>
        </>
      )}
    </>
  );
};
