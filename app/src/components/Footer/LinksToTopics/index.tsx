import { Flex, Link, Text } from "@chakra-ui/react";

export const LinksToTopics = () => {
  const topics = [
    "Comprar Carro",
    "Vender Carro",
    "App Kavak",
    "Onde estamos",
    "Perguntas frequentes",
    "Blog",
    "Guia de preços",
    "Carreiras",
    "Contato",
    "Imprensa",
  ];

  return (
    <>
      <Flex flexDirection={"column"} padding={"5px"} gap={"10px"}>
        {topics.map((topic, index) => {
          return (
            <Link key={index} color={"white"} marginLeft={"10px"}>
              {topic}
            </Link>
          );
        })}

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
