import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { IRegisterData } from "../../interfaces/Register/register.interface";
import { RegisterContext } from "../../contexts/registerContext";

const schema = z.object({
  name: z.string(),
  email: z.string().email("Email incorrect"),
  admin: z.boolean(),
  password: z.string(),
  confirmPassword: z.string(),
});

export const Register = () => {
  const [admin, setAdmin] = useState(false);

  const [showFirst, setShowFirst] = useState(false);
  const handleClick = () => setShowFirst(!showFirst);

  const [showSecond, setShowSecond] = useState(false);
  const handleClickSecond = () => setShowSecond(!showSecond);

  const { registerForm } = useContext(RegisterContext);

  const { handleSubmit, register } = useForm<IRegisterData>();

  const [selectedValue, setselectedValue] = useState("");

  const onSubmit = (data: IRegisterData) => {
    const currentData = { ...data, admin };

    schema.parse(currentData);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...newData } = currentData;

    registerForm(newData);
  };

  const handleRadioChange = (value: string) => {
    setselectedValue(value);
    if (value === "true") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  return (
    <>
      <Header />

      <Flex
        width={"90%"}
        margin={"0 auto"}
        marginTop={"30px"}
        flexDirection={"column"}
        gap={"2rem"}
      >
        <Heading as={"h1"} size={"lg"} margin={"0 auto"}>
          Cadastre-se
        </Heading>
        <FormControl isRequired as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} gap={"2rem"} alignItems={"center"}>
            <Input
              id="name"
              placeholder="Name"
              {...register("name")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px"]}
            />

            <Input
              id="email"
              placeholder="Email"
              {...register("email")}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
              height={["50px"]}
            />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showFirst ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                {...register("password")}
                fontWeight={"400"}
                fontSize={["md", "xl"]}
                height={["50px"]}
              />
              <InputRightElement width="5rem" marginTop={"5px"}>
                <Button h="1.75rem" size={["sm", "md"]} onClick={handleClick}>
                  {showFirst ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showSecond ? "text" : "password"}
                placeholder="Confirm password"
                id="confirmPassword"
                {...register("confirmPassword")}
                fontWeight={"400"}
                fontSize={["md", "xl"]}
                height={["50px"]}
              />
              <InputRightElement width="5rem" marginTop={"5px"}>
                <Button
                  h="1.75rem"
                  size={["sm", "md"]}
                  onClick={handleClickSecond}
                >
                  {showSecond ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <RadioGroup onChange={handleRadioChange} value={selectedValue}>
              <Stack spacing={5} direction="row">
                <Radio
                  colorScheme="red"
                  value="true"
                  fontWeight={"400"}
                  size={["md", "lg"]}
                >
                  Admin
                </Radio>
                <Radio
                  colorScheme="green"
                  value="false"
                  fontWeight={"400"}
                  size={["md", "lg"]}
                >
                  User
                </Radio>
              </Stack>
            </RadioGroup>
            <Button
              mt={4}
              colorScheme="teal"
              type="submit"
              width={"60%"}
              margin={"0 auto%"}
              fontWeight={"400"}
              fontSize={["md", "xl"]}
            >
              Cadastrar-se
            </Button>
            <Text fontWeight={"400"} fontSize={["md", "xl"]}>
              Já possui conta?{" "}
              <Link href="/login" color={"blue"}>
                Logue
              </Link>
            </Text>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
};
