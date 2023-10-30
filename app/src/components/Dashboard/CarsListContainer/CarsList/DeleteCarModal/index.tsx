import { Button, Flex, Text } from "@chakra-ui/react";
import { DeleteCarModalProps } from "../../../../../interfaces/Vehicle/vehicle.interface";
import { VehicleContext } from "../../../../../contexts/vehicleContext";
import { useContext } from "react";

export const DeleteCarModal: React.FC<DeleteCarModalProps> = ({
  id,
  closeModal,
}) => {
  const { deleteVehicle } = useContext(VehicleContext);

  const deleteCar = () => {
    deleteVehicle(id);
  };
  return (
    <>
      <Flex flexDirection={"column"}>
        <Flex
          width={"100%"}
          justifyContent={"center"}
          gap={"20px"}
          padding={"20px"}
          flexDirection={"column"}
          fontWeight={"400"}
          fontSize={["md", "xl"]}
        >
          <Text fontWeight={"600"}>
            When deleting this car, it will cease to exist in the store. Are you
            sure you want to delete it?
          </Text>
          <Flex gap={"20px"}>
            <Button
              width={"50%"}
              colorScheme="blue"
              type="submit"
              onClick={deleteCar}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
            >
              Delete Car
            </Button>
            <Button
              width={"50%"}
              onClick={() => closeModal(false)}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
            >
              Cancel
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
