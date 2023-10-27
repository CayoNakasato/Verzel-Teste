import { Box } from "@chakra-ui/react";
import { InfoFilter } from "../../components/MainContainer/InfoFilter";
import { VehicleContainer } from "../../components/MainContainer/VehicleContainer";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/Header/SearchBar";

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
