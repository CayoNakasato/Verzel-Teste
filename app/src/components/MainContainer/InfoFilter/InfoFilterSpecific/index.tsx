import { useContext, useState, useEffect } from "react";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Wrap,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoFilterModal } from "../InfoFilterModal";
import { VehicleContext } from "../../../../contexts/vehicleContext";

export const InfoFilterSpecific = () => {
  const { getVehicles, getVehiclesPerPage } = useContext(VehicleContext);

  const filtersTopic = ["Localização", "Marca e Modelo", "Ano", "+ Filtros"];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState<string>("md");
  const [filtersModal, setFiltersModal] = useState<string[]>([]);

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const handleFilters = (filterRemove: string) => {
    const updatedFilters = filtersModal.filter(
      (filter) => filter !== filterRemove
    );
    setFiltersModal(updatedFilters);
  };

  useEffect(() => {
    getVehiclesPerPage(1, "desc");
    getVehicles("desc");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Flex padding={"20px"} flexDirection={"column"} gap={"20px"}>
        <Stack
          spacing={4}
          maxWidth={"90%"}
          direction="row"
          align="center"
          overflowX={"auto"}
        >
          {filtersTopic.map((filter, index) => {
            return (
              <Flex
                key={index}
                fontWeight={"600"}
                justifyItems={"center"}
                minWidth={"40%"}
              >
                <Button
                  aria-label={filter}
                  onClick={() => handleSizeClick(size)}
                  colorScheme="teal"
                  size="sm"
                  backgroundColor={"#E9EEF7"}
                  color={"#3374DB"}
                  minWidth={"100%"}
                  fontSize={{ base: "sm", md: "lg" }}
                >
                  {filter}
                </Button>
              </Flex>
            );
          })}
        </Stack>
        <Wrap gap={"10px"}>
          {filtersModal.length != 0 ? (
            <>
              {filtersModal.map((filter, index) => {
                return (
                  <Flex
                    key={index}
                    alignItems={"center"}
                    backgroundColor={"gray.200"}
                    borderRadius={"10px"}
                  >
                    {" "}
                    <Text padding={"5px"} fontSize={{ base: "sm", md: "lg" }}>
                      {filter}
                    </Text>
                    <Button
                      variant={"ghost"}
                      onClick={() => handleFilters(filter)}
                    >
                      X
                    </Button>
                  </Flex>
                );
              })}
            </>
          ) : (
            ""
          )}
        </Wrap>
        <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent overflowY="scroll">
            <ModalHeader fontSize={{ base: "sm", md: "2xl" }}>
              Filtros
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InfoFilterModal setFiltersModal={setFiltersModal} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};
