import { createContext } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { IContextData, ILoginData } from "../interfaces/Login/login.interface";

export const LoginContext = createContext<IContextData>({} as IContextData);

export const LoginProvider = ({ children }: ProviderData) => {
  const navigate = useNavigate();
  const login = async (data: ILoginData) => {
    try {
      const response = await api.post("/login/", data);
      localStorage.setItem("@Token", response.data.token);
      toast.success("Login Realizado");
      navigate("/dashboard")
    } catch (error) {
      toast.error("Algo não deu certo");
      console.log(error);
    }
  };
  return (
    <LoginContext.Provider value={{ login }}>{children}</LoginContext.Provider>
  );
};
