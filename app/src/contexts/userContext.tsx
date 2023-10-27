import { createContext, useState } from "react";
import { api } from "../api";
import { ProviderData } from "../interfaces/provider.interface";
import {
  IUserContextData,
  IUserProfileData,
} from "../interfaces/User/user.interface";

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
);

export const UserProvider = ({ children }: ProviderData) => {
  const [userProfile, setUserProfile] = useState<IUserProfileData>(
    {} as IUserProfileData
  );

  const getUserProfile = async (userId: string) => {
    await api
      .get(`/users/${userId}`)
      .then((resp) => {
        setUserProfile(resp.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <UserContext.Provider value={{ getUserProfile, userProfile }}>
      {children}
    </UserContext.Provider>
  );
};
