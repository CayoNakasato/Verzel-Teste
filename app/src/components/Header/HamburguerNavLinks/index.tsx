import {
  Button,
  Image,
  IconButton,
  useDisclosure,
  Heading,
  Text,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Link,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  FaQuestionCircle,
  FaRocketchat,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import kavakImg from "../../../assets/KAVAK.svg";
import brazil from "../../../assets/brazil.png";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface DecodedToken extends JwtPayload {
  admin: boolean;
}

export const HamburguerNavLinks = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const [token] = useState<string | null>(localStorage.getItem("@Token"));

  const [decodedToken, setDecodedToken] = useState<DecodedToken | null>(
    token ? jwtDecode<DecodedToken>(token) : null
  );

  useEffect(() => {
    if (token) {
      setDecodedToken(jwtDecode<DecodedToken>(token));
    } else {
      setDecodedToken(null);
    }
  }, [token]);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        onClick={() => handleSizeClick(size)}
        icon={<HamburgerIcon />}
      />

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Link href="/">
              <Image
                marginLeft="10px"
                src={kavakImg}
                width="80px"
                height="80px"
              />
            </Link>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Flex flexDirection={"column"} gap={"10px"}>
              {!token || null ? (
                <Box>
                  <Flex flexDirection={"column"} gap={"10px"}>
                    <Heading as="h1" size={"md"}>
                      Nós lhe damos as boas-vindas
                    </Heading>

                    <Text fontSize={"md"}>
                      Crie uma conta ou faça o login para assumir o controle de
                      sua compra, venda ou financiamento.
                    </Text>
                    <Link href="/register">
                      <Button
                        color={"white"}
                        backgroundColor={"black"}
                        width={"95%"}
                        fontWeight={"400"}
                      >
                        Cadastre-se
                      </Button>
                    </Link>
                    <Text>
                      Já possui conta?{" "}
                      <Link href="/login" color={"blue"}>
                        Logue
                      </Link>
                    </Text>
                  </Flex>

                  <Flex flexDirection={"column"} gap="10px" marginTop={"10px"}>
                    <Button
                      colorScheme="teal"
                      justifyContent={"flex-start"}
                      variant={"ghost"}
                      color={"black"}
                      gap={"10px"}
                      fontWeight={"400"}
                    >
                      <FaShoppingCart /> Comprar Carro
                    </Button>

                    <Button
                      colorScheme="teal"
                      justifyContent={"flex-start"}
                      variant={"ghost"}
                      color={"black"}
                      gap={"10px"}
                      fontWeight={"400"}
                    >
                      <FaTag /> Vender Carro
                    </Button>
                  </Flex>
                </Box>
              ) : decodedToken?.admin ? (
                <Box>
                  <Flex flexDirection={"column"} gap="10px">
                    <Button onClick={() => navigate("/dashboard")}>
                      Dashboard
                    </Button>
                  </Flex>
                </Box>
              ) : (
                <Box>
                  <Flex flexDirection={"column"} gap="10px">
                    <Button
                      colorScheme="teal"
                      justifyContent={"flex-start"}
                      variant={"ghost"}
                      color={"black"}
                      gap={"10px"}
                      fontWeight={"400"}
                    >
                      <FaShoppingCart /> Comprar Carro
                    </Button>

                    <Button
                      colorScheme="teal"
                      justifyContent={"flex-start"}
                      variant={"ghost"}
                      color={"black"}
                      gap={"10px"}
                      fontWeight={"400"}
                    >
                      <FaTag /> Vender Carro
                    </Button>
                  </Flex>
                </Box>
              )}

              <Divider />

              <Flex flexDirection={"column"}>
                <Button
                  colorScheme="teal"
                  justifyContent={"flex-start"}
                  variant={"ghost"}
                  color={"black"}
                  gap={"10px"}
                  fontWeight={"400"}
                >
                  App Kavak
                </Button>

                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Sobre nós
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel>
                      <Flex flexDirection={"column"} gap={"10px"}>
                        <Link>Onde estamos</Link>
                        <Link>Guia de preços</Link>
                        <Link>Blog</Link>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          Ajuda
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <Link>
                        <Flex alignItems={"center"} gap={"10px"}>
                          <FaQuestionCircle /> Perguntas Frequentes
                        </Flex>
                      </Link>
                      <Link>
                        <Flex alignItems={"center"} gap={"10px"}>
                          <FaRocketchat /> Contato
                        </Flex>
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Divider />
                <Flex padding={"10px"} justifyContent={"space-between"}>
                  <Text>País</Text>
                  <Image src={brazil} width={"30px"} />
                </Flex>
                <Button
                  onClick={() => {
                    localStorage.removeItem("@Token");
                    navigate("/");
                    toast.success("Log out realizado!");
                  }}
                >
                  Log out
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
