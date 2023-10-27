import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { useState, useContext } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { ILoginData } from "../../interfaces/Login/login.interface";
import { useForm } from "react-hook-form";
import { LoginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().email("Email is incorrect"),
  password: z.string(),
});

export const Login = () => {
  const [showFirst, setShowFirst] = useState(false);
  const handleClick = () => setShowFirst(!showFirst);

  const navigate = useNavigate();

  const { login } = useContext(LoginContext);

  const { handleSubmit, register } = useForm<ILoginData>();

  const onSubmit = (data: ILoginData) => {
    schema.parse(data);
    login(data);
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
          Login
        </Heading>
        <FormControl isRequired as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <Flex flexDirection={"column"} gap={"2rem"} alignItems={"center"}>
            <Input id="email" placeholder="Email" {...register("email")} />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showFirst ? "text" : "password"}
                placeholder="Enter password"
                id="password"
                {...register("password")}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {showFirst ? <FaEye /> : <FaEyeSlash />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Flex gap={"10px"} flexDirection={"column"} alignItems={"center"}>
              <Button
                color={"blue"}
                variant="grey2"
                onClick={() => navigate("/register")}
              >
                Esqueceu a senha?
              </Button>
              <Text fontSize={"xs"}>
                Ao clicar em "Iniciar sessão" confirmo que li e aceito os{" "}
                <Link color={"blue"}>Termos e Condições</Link> e{" "}
                <Link color={"blue"}>Aviso de privacidade</Link> Kavak.
              </Text>
              <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                width={"100%"}
                margin={"0 auto"}
              >
                Iniciar sessão
              </Button>
              <Text color={"gray.500"} fontSize={"xs"}>
                Ainda não possui conta?
              </Text>
              <Button
                onClick={() => navigate("/register")}
                width={"100%"}
                color={"blue"}
                variant="outline1"
              >
                Cadastre-se aqui!
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Flex>
    </>
  );
};
