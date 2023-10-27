import { Button, Flex, Text } from "@chakra-ui/react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

export const ChangePageButtons = () => {
  return (
    <>
      <Flex alignItems={"center"} gap={"10px"} margin={"0 auto"}>
        <Button variant={"ghost"}>
          <FaAngleDoubleLeft />
        </Button>
        <Button backgroundColor={"black"} color={"white"}>
          <FaAngleLeft />
        </Button>
        <Text fontWeight={"600"}> 1 de 57</Text>
        <Button backgroundColor={"black"} color={"white"}>
          <FaAngleRight />
        </Button>
        <Button variant={"ghost"}>
          <FaAngleDoubleRight />
        </Button>
      </Flex>
    </>
  );
};
