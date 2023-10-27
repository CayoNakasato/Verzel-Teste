import { Divider } from "@chakra-ui/react";
import { SearchForOption } from "../SearchForOption";

interface SearchOption {
  name: string;
  subOptions: string[];
}

export const SearchFor = () => {

  const searchOptions: SearchOption[] = [
    {
      name: "marca",
      subOptions: [
        "Chevrolet",
        "Fiat",
        "Volkswagen",
        "Hyundai",
        "Toyota",
        "Jeep",
        "Renault",
        "Honda",
        "Nissan",
        "Peugeot",
      ],
    },
    {
      name: "ano",
      subOptions: [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
      ],
    },
    {
      name: "localização",
      subOptions: ["São Paulo"],
    },
    {
      name: "filiais",
      subOptions: [
        "Hub Kvak City",
        "Kavak Shopping SP Market",
        "Kavak Shopping Itaquera",
        "Shopping Golden Square",
      ],
    },
    {
      name: "carroceria",
      subOptions: [
        "SUV",
        "Hatckback",
        "Sedan",
        "Pickup",
        "Wagon",
        "Coupe",
        "Minivan",
        "Convetible",
      ],
    },
    {
      name: "câmbio",
      subOptions: ["Automático", "Manual"],
    },
    {
      name: "tipo de combustível",
      subOptions: ["Flex", "Gasolina", "Gasolina regular", "Diesel"],
    },
  ];

  return (
    <>
      {searchOptions?.map((opt) => {
            return <SearchForOption key={opt.name} data={opt}/>;
      })}

      <Divider/>
    </>
  );
};
