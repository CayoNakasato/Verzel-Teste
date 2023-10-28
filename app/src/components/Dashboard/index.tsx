import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { CarsListContainer } from "./CarsListContainer";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { CreateVehicleForm } from "./Forms/CreateVehicleForm";
import { VehicleContext } from "../../contexts/vehicleContext";

export const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getUsers } = useContext(UserContext);
  const { getVehicles, vehicles } = useContext(VehicleContext);

  useEffect(() => {
    getVehicles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Flex flexDirection={"column"} gap={"20px"}>
        <Header />

        <Flex padding={"20px"} flexDirection={"column"} gap={"10px"}>
          <Heading as="h2" fontSize={"24px"}>
            Dashboard
          </Heading>

          <Button
            onClick={() => {
              onOpen();
              getUsers();
            }}
          >
            Add Vehicle
          </Button>

          <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create vehicle</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <CreateVehicleForm />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Flex flexDirection={"column"} gap={"40px"}>
            <Text fontSize={"lg"} fontWeight={"600"}>Cars</Text>
            <CarsListContainer vehicles={vehicles} />
          </Flex>

          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
};
