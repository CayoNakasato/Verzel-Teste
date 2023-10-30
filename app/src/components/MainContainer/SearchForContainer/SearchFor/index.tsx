import { Divider } from "@chakra-ui/react";
import { SearchForOption } from "../SearchForOption";
import { searchOptions } from "../../../../data/constants";

export const SearchFor = () => {
  return (
    <>
      {searchOptions?.map((opt) => {
        return <SearchForOption key={opt.name} data={opt} />;
      })}

      <Divider />
    </>
  );
};
