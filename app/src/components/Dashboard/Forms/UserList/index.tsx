import { Select } from "@chakra-ui/react";
import React from "react";
import { IUserProfileData } from "../../../../interfaces/User/user.interface";
import { UseFormRegister } from "react-hook-form";
import { IVehicleCreate } from "../../../../interfaces/Vehicle/vehicle.interface";

interface UserListProps {
  users: IUserProfileData[];
  register: UseFormRegister<IVehicleCreate>;
}

export const UserList: React.FC<UserListProps> = ({ users, register }) => {
  return (
    <>
      <Select placeholder="Select a owner" {...register("userId")}>
        {users?.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          );
        })}
      </Select>
    </>
  );
};
