import { Box } from "@chakra-ui/react";
import { InfoFilter } from "../../components/MainContainer/InfoFilter";
import { VehicleContainer } from "../../components/MainContainer/VehicleContainer";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const MainContainer = () => {
  return (
    <Box>
      <Header />
      <InfoFilter />
      <VehicleContainer />
      <Footer />
    </Box>
  );
};
