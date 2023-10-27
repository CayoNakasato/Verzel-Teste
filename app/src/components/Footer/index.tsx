import { Divider, Flex, Image } from "@chakra-ui/react";
import footerLogo from "../../assets/logofooter.png";
import { SocialMediaButtons } from "./SocialMediasButtons";
import { LinksToTopics } from "./LinksToTopics";
import { FooterInfo } from "./FooterInfo";

export const Footer = () => {
  return (
    <>
      <Flex backgroundColor={"black"} flexDirection={"column"} gap={"10px"}>
        <Image src={footerLogo} width={"150px"} />

        <LinksToTopics />

        <SocialMediaButtons />

        <Divider width={"93%"} margin={"0 auto"} borderWidth={"1px"}/>

        <FooterInfo/>

      </Flex>
    </>
  );
};
