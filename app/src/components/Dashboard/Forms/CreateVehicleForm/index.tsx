import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  CreateModalProps,
  IVehicleCreate,
} from "../../../../interfaces/Vehicle/vehicle.interface";
import { useContext } from "react";
import { UserContext } from "../../../../contexts/userContext";
import { UserList } from "../UserList";
import { VehicleContext } from "../../../../contexts/vehicleContext";

const schema = z.object({
  name: z.string(),
  brand: z.string(),
  model: z.string(),
  frontImg: z.string(),
  userId: z.string(),
  price: z.string(),
});

export const CreateVehicleForm: React.FC<CreateModalProps> = ({
  closeModal,
}) => {
  const { handleSubmit, register } = useForm<IVehicleCreate>();

  const { users } = useContext(UserContext);

  const { createVehicle } = useContext(VehicleContext);

  const onSubmit = async (data: IVehicleCreate) => {
    schema.parse(data);

    createVehicle(data);
    closeModal(false);
  };

  return (
    <>
      <Flex flexDirection={"column"}>
        <FormControl isRequired as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} gap={"2rem"} alignItems={"center"}>
            <Input
              id="name"
              placeholder="Name"
              {...register("name")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px", "70px"]}
            />
            <Input
              id="brand"
              placeholder="Brand"
              {...register("brand")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px", "70px"]}
            />
            <Input
              id="model"
              placeholder="Model"
              {...register("model")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px", "70px"]}
            />
            <Input
              id="img"
              placeholder="Image Url"
              {...register("frontImg")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px", "70px"]}
            />
            <Input
              type="string"
              id="price"
              placeholder="Price"
              {...register("price")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px", "70px"]}
            />
            <UserList users={users} register={register} />
            <Flex
              width={"100%"}
              justifyContent={"center"}
              gap={"20px"}
              padding={"20px"}
            >
              <Button
                width={"50%"}
                colorScheme="blue"
                type="submit"
                fontWeight={"600"}
                fontSize={["md", "xl"]}
              >
                Add Car
              </Button>
              <Button
                width={"50%"}
                onClick={() => closeModal(false)}
                fontWeight={"600"}
                fontSize={["md", "xl"]}
              >
                Cancel
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
};
