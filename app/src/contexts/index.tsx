import { ProviderData } from "../interfaces/provider.interface";
import { LoginProvider } from "./loginContext";
import { RegisterProvider } from "./registerContext";
import { UserProvider } from "./userContext";
import { VehicleProvider } from "./vehicleContext";

export const ContextProvider = ({ children }: ProviderData) => {
  return (
    <>
      <RegisterProvider>
        <LoginProvider>
          <UserProvider>
            <VehicleProvider>{children}</VehicleProvider>
          </UserProvider>
        </LoginProvider>
      </RegisterProvider>
    </>
  );
};
