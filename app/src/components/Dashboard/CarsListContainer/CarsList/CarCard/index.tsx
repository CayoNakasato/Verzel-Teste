import {
  Button,
  Flex,
  Image,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { CarCardProps } from "../../../../../interfaces/Vehicle/vehicle.interface";
import React, { useState } from "react";

import { EditCarModal } from "../EditCarModal";
import { DeleteCarModal } from "../DeleteCarModal";

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <ListItem key={car.id} borderRadius={"10px"}>
        <Flex
          gap={"10px"}
          width={"90%"}
          shadow={"xl"}
          margin={"0 auto"}
          borderRadius={"10px"}
        >
          <Image src={car.frontImg} width={["100px"]} borderRadius={"10px"} />
          <Flex flexDirection={["column"]} padding={"10px"}>
            <Text fontWeight={"600"}>
              {car.brand} {car.model}
            </Text>
            <Flex flexDirection={"column"}>
              <Text fontWeight={"600"}>R${car.price}</Text>
              <Flex gap={"20px"}>
                <Button onClick={() => setEditModalOpen(true)}>
                  <FaEdit size={10} />
                </Button>

                <Modal
                  closeOnOverlayClick={false}
                  isOpen={isEditModalOpen}
                  onClose={() => setEditModalOpen(false)}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Edit vehicle</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <EditCarModal car={car} closeModal={setEditModalOpen} />
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <Button onClick={() => setDeleteModalOpen(true)}>
                  <FaTrash size={10} />
                </Button>

                <Modal
                  closeOnOverlayClick={false}
                  isOpen={isDeleteModalOpen}
                  onClose={() => setDeleteModalOpen(false)}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Edit vehicle</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <DeleteCarModal
                        id={car.id}
                        closeModal={setDeleteModalOpen}
                      />
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </ListItem>
    </>
  );
};
