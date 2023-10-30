import { Select } from "@chakra-ui/react";
import React from "react";
import { UserListProps } from "../../../../interfaces/User/user.interface";

export const UserList: React.FC<UserListProps> = ({ users, register }) => {
  return (
    <>
      <Select
        placeholder="Select a owner"
        {...register("userId")}
        fontWeight={"400"}
        fontSize={["md", "xl"]}
        height={["50px", "70px"]}
      >
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
