import kavakImg from "../../assets/KAVAK.svg";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Image,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburguerNavLinks } from "./HamburguerNavLinks";
import brazil from "../../assets/brazil.png";
import { toast } from "react-toastify";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

interface DecodedToken extends JwtPayload {
  admin: boolean;
}

export const Header = () => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });

  const [isAdmin, setIsAdmin] = useState(false);
  const token = localStorage.getItem("@Token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        setIsAdmin(decodedToken.admin);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    }
  }, [token]);

  return (
    <>
      {breakpointValue === "1920px" ? (
        <>
          {" "}
          <Flex alignItems={"center"} boxShadow="lg" bg="white">
            <Flex
              justifyContent={"space-between"}
              width={"80%"}
              margin={"0 auto"}
            >
              <Link href="/">
                <Image
                  marginLeft="10px"
                  src={kavakImg}
                  width={{ base: "80px", md: "100px" }}
                  height={{ base: "80px", md: "100px" }}
                />
              </Link>

              <Flex alignItems={"center"} gap={"40px"}>
                <Flex gap="10px">
                  <Button
                    colorScheme="teal"
                    justifyContent={"flex-start"}
                    variant={"ghost"}
                    color={"black"}
                    gap={"10px"}
                    fontWeight={["400"]}
                    fontSize={["md", "lg"]}
                  >
                    Comprar Carro
                  </Button>

                  <Button
                    colorScheme="teal"
                    justifyContent={"flex-start"}
                    variant={"ghost"}
                    color={"black"}
                    gap={"10px"}
                    fontWeight={["400"]}
                    fontSize={["md", "lg"]}
                  >
                    Vender Carro
                  </Button>
                </Flex>

                <Button
                  colorScheme="teal"
                  justifyContent={"flex-start"}
                  variant={"ghost"}
                  color={"black"}
                  gap={"10px"}
                  fontWeight={"400"}
                  fontSize={["md", "lg"]}
                >
                  App Kavak
                </Button>

                <Accordion allowMultiple variant={"ghost"}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontWeight={"400"}
                          fontSize={["md", "lg"]}
                        >
                          Sobre nós
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Flex
                        flexDirection={"column"}
                        gap={"10px"}
                        fontWeight={"400"}
                        fontSize={["md", "lg"]}
                        marginLeft={"20px"}
                      >
                        <Link>Onde estamos</Link>
                        <Link>Guia de preços</Link>
                        <Link>Blog</Link>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Image src={brazil} width={"30px"} />

                {token && isAdmin ? (
                  <>
                    {" "}
                    <Link href="/dashboard">
                      <Button
                        fontWeight={["400", "600"]}
                        fontSize={["md", "lg"]}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button
                        onClick={() => {
                          localStorage.removeItem("@Token");
                          toast.success("Log out realizado!");
                        }}
                        fontSize={["md", "lg"]}
                        fontWeight={["400", "600"]}
                      >
                        Log out
                      </Button>
                    </Link>
                  </>
                ) : token && !isAdmin ? (
                  <>
                    {" "}
                    <Link href="/">
                      <Button
                        onClick={() => {
                          localStorage.removeItem("@Token");
                          toast.success("Log out realizado!");
                        }}
                        fontSize={["md", "lg"]}
                        fontWeight={["400", "600"]}
                      >
                        Log out
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <Button
                        color={"white"}
                        backgroundColor={"black"}
                        width={"95%"}
                        fontWeight={["400", "600"]}
                        fontSize={["md", "lg"]}
                      >
                        Cadastre-se
                      </Button>
                    </Link>

                    <Link href="/login">
                      <Button
                        color={"white"}
                        backgroundColor={"black"}
                        width={"95%"}
                        fontWeight={["400", "600"]}
                        fontSize={["md", "lg"]}
                      >
                        Logue-se
                      </Button>
                    </Link>
                  </>
                )}
              </Flex>
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          {" "}
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            boxShadow="lg"
            bg="white"
            padding={["5px", "20px"]}
          >
            <Link href="/">
              <Image
                marginLeft="10px"
                src={kavakImg}
                width={{ base: "80px", md: "100px" }}
                height={{ base: "80px", md: "100px" }}
              />
            </Link>
            <HamburguerNavLinks />
          </Flex>
        </>
      )}
    </>
  );
};
