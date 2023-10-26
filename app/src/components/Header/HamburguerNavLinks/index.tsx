import {
  Button,
  Image,
  IconButton,
  useDisclosure,
  Heading,
  Text,
  Flex,
  Divider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  FaArrowDown,
  FaQuestionCircle,
  FaRocketchat,
  FaShoppingCart,
  FaTag,
} from "react-icons/fa";
import { useState } from "react";
import {} from "@chakra-ui/react";
import kavakImg from "../../../assets/KAVAK.svg";
import brazil from "../../../assets/brazil.png";

export const HamburguerNavLinks = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

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
            <Image
              marginLeft="10px"
              src={kavakImg}
              width="80px"
              height="80px"
            />
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Heading as="h1" size={"md"}>
                Nós lhe damos as boas-vindas
              </Heading>

              <Text fontSize={"md"}>
                Crie uma conta ou faça o login para assumir o controle de sua
                compra, venda ou financiamento.
              </Text>

              <Button
                color={"white"}
                backgroundColor={"black"}
                width={"95%"}
                fontWeight={"400"}
              >
                Cadastre-se
              </Button>

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

                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<FaArrowDown />}
                    variant={"ghost"}
                    justifyContent={"space-between"}
                  >
                    Sobre nós
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Onde estamos</MenuItem>
                    <MenuItem>Guia de preços</MenuItem>
                    <MenuItem>Blog</MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<FaArrowDown />}
                    variant={"ghost"}
                    justifyContent={"space-between"}
                  >
                    Ajuda
                  </MenuButton>
                  <MenuList>
                    <MenuItem gap={"5px"}>
                      <FaQuestionCircle /> Perguntas Frequentes
                    </MenuItem>
                    <MenuItem gap={"5px"}>
                      <FaRocketchat /> Contato
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Divider />
                <Flex padding={"10px"} justifyContent={"space-between"}>
                  <Text>País</Text>
                  <Image src={brazil} width={"30px"} />
                </Flex>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
