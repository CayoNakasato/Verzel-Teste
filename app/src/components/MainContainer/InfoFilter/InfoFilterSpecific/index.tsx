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
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { InfoFilterModal } from "../InfoFilterModal";

export const InfoFilterSpecific = () => {
  const filters = ["Localização", "Marca e Modelo", "Ano", "+ Filtros"];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Flex padding={"20px"}>
        <Stack
          spacing={4}
          maxWidth={"90%"}
          direction="row"
          align="center"
          overflowX={"auto"}
        >
          {filters.map((filter, index) => {
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
                >
                  {filter}
                </Button>

                <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
                  <ModalOverlay />
                  <ModalContent overflowY="scroll">
                    <ModalHeader>Filtros</ModalHeader>

                    <ModalCloseButton />

                    <ModalBody >
                      <InfoFilterModal />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};
