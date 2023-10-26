import { Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Input } from "@chakra-ui/react";

export const SearchBar = () => {
  return (
    <>
      <Flex>
        <Flex
          alignItems={"center"}
          width={"100%"}
          justifyContent={"space-evenly"}
          backgroundColor={"#3374DB"}
          height={"5rem"}
          boxShadow={"1px 5px 5px -3px rgba(0,0,0,0.2) inset"}
        >
          <Flex
            backgroundColor={"white"}
            alignItems={"center"}
            padding={"10px"}
            borderRadius={"5px"}
            width={"90%"}
            height={"50px"}
          >
            <Input
              type="text"
              placeholder="Busque por nome, modelo, marca..."
              border={"none"}
              margin={"0 auto"}
            />
            <FaSearch />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
