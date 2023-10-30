import { Divider, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import footerLogo from "../../assets/logofooter.png";
import { SocialMediaButtons } from "./SocialMediasButtons";
import { LinksToTopics } from "./LinksToTopics";
import { FooterInfo } from "./FooterInfo";

export const Footer = () => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });

  return (
    <>
      <Flex backgroundColor={"black"} flexDirection={["column"]}>
        {breakpointValue === "1920px" ? (
          <Flex flexDirection={"column"} width={"70%"} margin={"0 auto"}>
            <Flex justifyContent={"space-between"}>
              <Image src={footerLogo} width={["150px", "200px"]} />

              <LinksToTopics />
            </Flex>

            <SocialMediaButtons />

            <Divider width={"93%"} margin={"0 auto"} borderWidth={"1px"} />

            <FooterInfo />
          </Flex>
        ) : (
          <Flex flexDirection={"column"}>
            <Image src={footerLogo} width={["150px", "200px"]} />

            <LinksToTopics />

            <SocialMediaButtons />

            <Divider width={"93%"} margin={"0 auto"} borderWidth={"1px"} />

            <FooterInfo />
          </Flex>
        )}
      </Flex>
    </>
  );
};
