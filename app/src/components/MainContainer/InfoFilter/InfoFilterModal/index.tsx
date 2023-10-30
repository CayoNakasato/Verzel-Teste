import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import { moreSearchOptions } from "../../../../data/constants";
import { useState } from "react";
import { toast } from "react-toastify";
import { InfoFilterModalProps } from "../../../../interfaces/Vehicle/vehicle.interface";

export const InfoFilterModal = ({ setFiltersModal }: InfoFilterModalProps) => {
  const [sliderValueKm, setSliderValueKm] = useState([120, 240]);
  const [sliderValuePrice, setSliderValuePrice] = useState([5000, 100000]);

  const handleSliderChangeKm = (newValue: [number, number]) => {
    setSliderValueKm(newValue);
  };

  const handleSliderChangePrice = (newValue: [number, number]) => {
    setSliderValuePrice(newValue);
  };

  const handleButtonClick = (filter: string) => {
    setFiltersModal((prevFilters: string[]) => [...prevFilters, filter]);
    toast.success("Filtro adicionado");
  };

  return (
    <Flex
      gap={"10px"}
      flexDirection={"column"}
      maxHeight="700px"
      width={"80%"}
      overflowX={"auto"}
    >
      <Accordion width={"100%"} allowMultiple>
        {moreSearchOptions.map((opt, index) => {
          return (
            <AccordionItem key={index} width={"95%"}>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontWeight={"400"}
                    fontSize={["md", "xl"]}
                  >
                    {opt.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel>
                {opt.subOptions ? (
                  opt.subOptions.map((subOpt, subIndex) => (
                    <Flex justifyContent={"center"} key={subIndex}>
                      <Button
                        variant={"ghost"}
                        onClick={() => handleButtonClick(subOpt)}
                        fontWeight={"400"}
                        fontSize={["md", "xl"]}
                      >
                        {subOpt}
                      </Button>
                    </Flex>
                  ))
                ) : opt.name === "Preço" ? (
                  <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                      <Text>R${sliderValuePrice[0].toFixed(2)}</Text>

                      <Text>R${sliderValuePrice[1].toFixed(2)}</Text>
                    </Flex>
                    <RangeSlider
                      defaultValue={[5000, 100000]}
                      min={0}
                      max={1000000}
                      step={1000}
                      onChange={handleSliderChangePrice}
                    >
                      <RangeSliderTrack bg="red.100">
                        <RangeSliderFilledTrack bg="tomato" />
                      </RangeSliderTrack>
                      <RangeSliderThumb boxSize={6} index={0} />
                      <RangeSliderThumb boxSize={6} index={1} />
                    </RangeSlider>
                  </Flex>
                ) : opt.name === "Quilômetragem" ? (
                  <Flex flexDirection={"column"}>
                    <Flex justifyContent={"space-between"}>
                      <Text>{sliderValueKm[0]} KM </Text>

                      <Text>{sliderValueKm[1]} KM </Text>
                    </Flex>
                    <RangeSlider
                      defaultValue={[120, 240]}
                      min={0}
                      max={500}
                      step={10}
                      onChange={handleSliderChangeKm}
                    >
                      <RangeSliderTrack bg="red.100">
                        <RangeSliderFilledTrack bg="tomato" />
                      </RangeSliderTrack>
                      <RangeSliderThumb boxSize={6} index={0} />
                      <RangeSliderThumb boxSize={6} index={1} />
                    </RangeSlider>
                  </Flex>
                ) : (
                  <span>Não há nada aqui!</span>
                )}
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Flex>
  );
};
