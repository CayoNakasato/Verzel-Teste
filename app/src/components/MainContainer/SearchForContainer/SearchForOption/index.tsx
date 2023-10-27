import {
  Button,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

interface IData {
  data: SearchOptionsInterface;
}

interface SearchOptionsInterface {
  name: string;
  subOptions: string[];
}

export const SearchForOption = ({ data }: IData) => {
  return (
    <>
      <Menu>
        <Flex
          alignItems={"center"}
        >
          <MenuButton
            rightIcon={<FaArrowDown />}
            as={Button}
            variant={"ghost"}
            width={"100%"}
            height={"30px"}
          >
            Buscar por {data.name}
          </MenuButton>
        </Flex>
        <MenuList>
          {data.subOptions.map((opt, index) => {
            return <MenuItem key={index}>{opt}</MenuItem>;
          })}
        </MenuList>
      </Menu>

      <Divider />
    </>
  );
};
