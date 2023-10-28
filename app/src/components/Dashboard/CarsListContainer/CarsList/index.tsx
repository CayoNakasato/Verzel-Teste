import {
  Box,
  Button,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { CarsListProps } from "../../../../interfaces/Vehicle/vehicle.interface";
import { FaEdit, FaTrash } from "react-icons/fa";

export const CarsList: React.FC<CarsListProps> = ({ vehicles }) => {
  return (
    <>
      <Box>
        <UnorderedList
          listStyleType={"none"}
          spacing={"5"}
          overflowY={"auto"}
          maxHeight={"800px"}
        >
          {vehicles?.map((car) => {
            return (
              <ListItem key={car.id}>
                <Flex
                  gap={"10px"}
                  width={"90%"}
                  shadow={"xl"}
                  margin={"0 auto"}
                  borderRadius={"10px"}
                >
                  <Image
                    src={car.frontImg}
                    width={["100px"]}
                    borderTopLeftRadius={"10px"}
                    borderBottomLeftRadius={"10px"}
                  />
                  <Flex flexDirection={["column"]} padding={"10px"}>
                    <Text fontWeight={"600"}>
                      {car.brand} {car.model}
                    </Text>
                    <Flex flexDirection={"column"}>
                      <Text fontWeight={"600"}>R${car.price.toFixed(2)}</Text>
                      <Flex gap={"20px"}>
                        <Button>
                          <FaEdit size={15} />
                        </Button>
                        <Button>
                          <FaTrash size={15} />
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
    </>
  );
};
