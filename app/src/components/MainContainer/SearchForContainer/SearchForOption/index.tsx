import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { IData } from "../../../../interfaces/Search/search.interface";

export const SearchForOption = ({ data }: IData) => {
  return (
    <>
      <Accordion border={"none"} allowMultiple>
        <AccordionItem border={"none"}>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={{ base: "sm", md: "xl" }}
              >
                Buscar por {data.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Flex flexDirection={"column"} gap={"10px"}>
              {data && data.subOptions ? (
                data.subOptions.map((opt, index) => {
                  return <Link key={index}>{opt}</Link>;
                })
              ) : (
                <span>Ops! Algo deu errado</span>
              )}
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
