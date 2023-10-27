import { Flex, Image, Link } from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import appStore from "../../../assets/appstore.png";
import playstore from "../../../assets/googleplay.png";

export const SocialMediaButtons = () => {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex gap={"10px"} padding={"10px"}>
          <Link>
            <Flex
              backgroundColor={"white"}
              borderRadius={"100px"}
              width={"30px"}
              height={"30px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaFacebookF size={20} />
            </Flex>
          </Link>
          <Link>
            <Flex
              backgroundColor={"white"}
              borderRadius={"100px"}
              width={"30px"}
              height={"30px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaInstagram />
            </Flex>
          </Link>
          <Link>
            <Flex
              backgroundColor={"white"}
              borderRadius={"100px"}
              width={"30px"}
              height={"30px"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <FaLinkedinIn />
            </Flex>
          </Link>
        </Flex>

        <Flex gap={"20px"} padding={"10px"}>
          <Link>
            <Image src={appStore} borderRadius={"5px"} width={"100px"} />
          </Link>

          <Link>
            <Image src={playstore} borderRadius={"5px"} width={"100px"} />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
