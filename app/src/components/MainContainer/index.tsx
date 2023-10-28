import { Box } from "@chakra-ui/react";
import { Header } from "../Header";
import { SearchBar } from "../Header/SearchBar";
import { InfoFilter } from "./InfoFilter";
import { VehicleContainer } from "./VehicleContainer";
import { Footer } from "../Footer";

export const MainContainer = () => {
  return (
    <Box backgroundColor={"#3374DB"}>
      <Header />
      <SearchBar />
      <Box backgroundColor={"white"} borderTopRadius={"15px"}>
        <InfoFilter />
        <VehicleContainer />
      </Box>
      <Footer />
    </Box>
  );
};
