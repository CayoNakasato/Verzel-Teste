import kavakImg from "../../assets/KAVAK.svg";
import { Flex, Image, Link } from "@chakra-ui/react";
import { HamburguerNavLinks } from "./HamburguerNavLinks";

export const Header = () => {
  return (
    <>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        boxShadow="lg"
        bg="white"
        padding={"5px"}
      >
        <Link href="/">
        <Image marginLeft="10px" src={kavakImg} width="80px" height="80px" />
        </Link>
        <HamburguerNavLinks />
      </Flex>
    </>
  );
};
