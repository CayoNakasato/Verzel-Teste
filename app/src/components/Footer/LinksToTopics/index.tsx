import { Flex, Link, Text, useBreakpointValue } from "@chakra-ui/react";

export const LinksToTopics = () => {
  const breakpointValue = useBreakpointValue({
    sm: "375px",
    md: "768px",
    lg: "1920px",
  });

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

  const topicsMdOne = topics.slice(0, 5);
  const topicsMdTwo = topics.slice(5, 10);

  return (
    <>
      <Flex padding={"20px"}>
        {breakpointValue === undefined ? (
          <Flex flexDirection={"column"} padding={"5px"} gap={"10px"}>
            {topics.map((topic, index) => {
              return (
                <Link
                  fontSize={{ base: "sm", md: "xl" }}
                  key={index}
                  color={"white"}
                  marginLeft={"10px"}
                >
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
        ) : breakpointValue === "768px" ? (
          <Flex padding={"5px"} gap={"100px"}>
            <Flex flexDirection={"column"} gap={"10px"}>
              {topicsMdOne.map((topic, index) => {
                return (
                  <Link
                    fontSize={{ base: "sm", md: "xl" }}
                    key={index}
                    color={"white"}
                    marginLeft={"10px"}
                  >
                    {topic}
                  </Link>
                );
              })}
            </Flex>

            <Flex flexDirection={"column"} gap={"10px"}>
              {topicsMdTwo.map((topic, index) => {
                return (
                  <Link
                    fontSize={{ base: "sm", md: "xl" }}
                    key={index}
                    color={"white"}
                    marginLeft={"10px"}
                  >
                    {topic}
                  </Link>
                );
              })}
            </Flex>

            <Flex gap={"5px"} display={["flex"]} alignItems={"flex-start"}>
              <Text fontSize={"xs"} color={"white"} marginLeft={"10px"}>
                BR
              </Text>
              <Text color={"white"} marginLeft={"10px"}>
                Brasil
              </Text>
            </Flex>
          </Flex>
        ) : (
          <Flex padding={"5px"} gap={"300px"}>
            <Flex flexDirection={"column"} gap={"10px"}>
              {topicsMdOne.map((topic, index) => {
                return (
                  <Link
                    fontSize={{ base: "sm", md: "xl" }}
                    key={index}
                    color={"white"}
                    marginLeft={"10px"}
                  >
                    {topic}
                  </Link>
                );
              })}
            </Flex>

            <Flex flexDirection={"column"} gap={"10px"}>
              {topicsMdTwo.map((topic, index) => {
                return (
                  <Link
                    fontSize={{ base: "sm", md: "xl" }}
                    key={index}
                    color={"white"}
                    marginLeft={"10px"}
                  >
                    {topic}
                  </Link>
                );
              })}
            </Flex>
            <Flex alignItems={"center"} gap={"5px"} display={["flex"]}>
              <Text fontSize={"xs"} color={"white"} marginLeft={"10px"}>
                BR
              </Text>
              <Text color={"white"} marginLeft={"10px"}>
                Brasil
              </Text>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};
