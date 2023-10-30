import { Flex, Link, Text } from "@chakra-ui/react";

export const FooterInfo = () => {
  return (
    <>
      <Flex flexDirection={"column"} padding={"20px"} gap={"20px"}>
        <Flex flexDirection={["column", "row"]} gap={["", "10px"]}>
          <Text color={"white"}>Copyright © 2022 KAVAK.</Text>
          <Text color={"white"}> Todos os direitos reservados.</Text>
        </Flex>

        <Flex flexDirection={["column", "row"]} gap={["", "10px"]}>
          <Link color={"white"}>Política de Privacidade</Link>
          <Link color={"white"}>Termos e Confições</Link>
          <Link color={"white"}>Definições de cookies</Link>
        </Flex>

        <Flex paddingBottom={"50px"}>
          <Text color={"white"} fontSize={["sm", "md"]}>
            KAVAK TECNOLOGIA E COMERCIO DE VEICULOS LTDA., inscrita no CNPJ sob
            o nº 36.740.390/0001-83, com sede na Estrada dos Alpes, nº 855,
            Galpão A, Módulo 1, Jardim Belval, Barueri/SP, CEP 06.423-080
          </Text>
        </Flex>
      </Flex>
    </>
  );
};
