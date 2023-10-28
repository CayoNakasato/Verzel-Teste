import { Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import {
  EditeModalProps,
  IVehicleUpdate,
} from "../../../../../interfaces/Vehicle/vehicle.interface";
import { useForm } from "react-hook-form";
import { useContext } from "react";

import z from "zod";
import { VehicleContext } from "../../../../../contexts/vehicleContext";

const schema = z.object({
  name: z.string().nullable(),
  brand: z.string().nullable(),
  model: z.string().nullable(),
  frontImg: z.string().nullable(),
  price: z.string().nullable(),
});

export const EditCarModal: React.FC<EditeModalProps> = ({
  car,
  closeModal,
}) => {
  const { handleSubmit, register } = useForm<IVehicleUpdate>();

  const { updateVehicle } = useContext(VehicleContext);

  const onSubmit = async (data: IVehicleUpdate) => {
    const vehicleId = car.id;
    schema.parse(data);
    updateVehicle(data, vehicleId);
  };

  return (
    <>
      <Flex flexDirection={"column"}>
        <FormControl isRequired as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} gap={"10px"} alignItems={"center"}>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Text>Name:</Text>
              <Input id="name" defaultValue={car.name} {...register("name")} />
            </Flex>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Text>Brand:</Text>

              <Input
                id="brand"
                defaultValue={car.brand}
                {...register("brand")}
              />
            </Flex>

            <Flex flexDirection={"column"} gap={"5px"}>
              <Text>Model:</Text>

              <Input
                id="model"
                defaultValue={car.model}
                {...register("model")}
              />
            </Flex>

            <Flex flexDirection={"column"} gap={"5px"}>
              <Text>Url:</Text>

              <Input
                id="img"
                defaultValue={car.frontImg}
                {...register("frontImg")}
              />
            </Flex>
            <Flex flexDirection={"column"} gap={"5px"}>
              <Text>Price:</Text>

              <Input
                type="number"
                id="price"
                defaultValue={car.price.toString()}
                {...register("price")}
              />
            </Flex>

            <Flex
              width={"100%"}
              justifyContent={"center"}
              gap={"20px"}
              padding={"20px"}
            >
              <Button width={"50%"} colorScheme="blue" type="submit">
                Edit Car
              </Button>
              <Button width={"50%"} onClick={() => closeModal(false)}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
};
