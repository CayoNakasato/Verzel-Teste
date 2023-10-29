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
} from "@chakra-ui/react";
import { Header } from "../Header";
import { CarsListContainer } from "./CarsListContainer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { CreateVehicleForm } from "./Forms/CreateVehicleForm";
import { VehicleContext } from "../../contexts/vehicleContext";

export const Dashboard = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const { getUsers } = useContext(UserContext);
  const { getVehicles, vehicles } = useContext(VehicleContext);

  useEffect(() => {
    getVehicles("desc");
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
              setCreateModalOpen(true);
              getUsers();
            }}
          >
            Add Vehicle
          </Button>

          <Modal
            closeOnOverlayClick={false}
            isOpen={isCreateModalOpen}
            onClose={() => setCreateModalOpen(false)}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create vehicle</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <CreateVehicleForm closeModal={setCreateModalOpen} />
              </ModalBody>
            </ModalContent>
          </Modal>

          <Flex flexDirection={"column"} gap={"40px"}>
            <Text fontSize={"lg"} fontWeight={"600"}>
              Cars
            </Text>
            <CarsListContainer vehicles={vehicles} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
