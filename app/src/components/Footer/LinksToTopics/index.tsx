import { Flex, Link, Text } from "@chakra-ui/react";

export const LinksToTopics = () => {
  return (
    <>
      <Flex flexDirection={"column"} padding={"5px"} gap={"10px"}>
        <Link color={"white"} marginLeft={"10px"}>
          Comprar Carro
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Vender Carro
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          App Kavak
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Onde estamos
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Perguntas frequentes
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Blog
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Guia de preços
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Carreiras
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Contato
        </Link>
        <Link color={"white"} marginLeft={"10px"}>
          Imprensa
        </Link>

        <Flex alignItems={"center"} gap={"5px"} display={["flex"]}>
          <Text fontSize={"xs"} color={"white"} marginLeft={"10px"}>
            BR
          </Text>
          <Text color={"white"} marginLeft={"10px"}>
            Brasil
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
