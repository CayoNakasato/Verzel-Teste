import { ProviderData } from "../interfaces/provider.interface";
import { LoginProvider } from "./loginContext";
import { RegisterProvider } from "./registerContext";

export const ContextProvider = ({ children }: ProviderData) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>{children}</LoginProvider>
      </RegisterProvider>
    </>
  );
};
