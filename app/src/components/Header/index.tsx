import kavakImg from "../../assets/KAVAK.svg";
import { Flex, Image } from "@chakra-ui/react";
import { HamburguerNavLinks } from "./HamburguerNavLinks";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Image marginLeft="10px" src={kavakImg} width="80px" height="80px" />
        <HamburguerNavLinks />
      </Flex>
      <SearchBar />
    </>
  );
};
