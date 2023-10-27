import { createContext } from "react";
import { ProviderData } from "../interfaces/provider.interface";
import { toast } from "react-toastify";
import {
  IRegisterContextData,
  IRegisterDataFormatted,
} from "../interfaces/Register/register.interface";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

export const RegisterContext = createContext<IRegisterContextData>(
  {} as IRegisterContextData
);

export const RegisterProvider = ({ children }: ProviderData) => {
  const navigate = useNavigate();

  const registerForm = async (data: IRegisterDataFormatted) => {
    try {
      await api.post("/users/", data);
      toast.success("Cadastro realizado com sucesso!!");
      navigate("/login")
    } catch (error) {
      toast.error("Algo não deu certo!");
      console.log(error);
    }
  };
  return (
    <RegisterContext.Provider value={{ registerForm }}>
      {children}
    </RegisterContext.Provider>
  );
};
