interface SearchOption {
  name: string;
  subOptions?: string[];
}

export const searchOptions: SearchOption[] = [
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

export const moreSearchOptions: SearchOption[] = [
  {
    name: "Localização - Estado e Loja",
    subOptions: ["São Paulo"],
  },
  {
    name: "Marca e Modelo",
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
    name: "Ano",
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
    name: "Preço",
  },
  {
    name: "Tipo",
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
    name: "Transmissão",
    subOptions: ["Automático", "Manual"],
  },
  {
    name: "Status do carro",
    subOptions: ["Disponível", "Reservado"],
  },
  {
    name: "Quilômetragem",
  },
  {
    name: "Cor",
    subOptions: [
      "Branco",
      "Preto",
      "Cinza",
      "Prata",
      "Vermelho",
      "Azul",
      "Marrom",
      "Verde",
      "Bege",
      "Laranja",
      "Dourado",
      "Outros",
    ],
  },
  {
    name: "Assentos",
    subOptions: ["2", "4", "5", "7"],
  },
  {
    name: "Combustível",
    subOptions: ["Flex", "Gasolina", "Gasolina Regular", "Diesel"],
  },
];
