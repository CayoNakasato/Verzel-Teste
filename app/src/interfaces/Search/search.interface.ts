export interface IData {
  data: SearchOptionsInterface;
}

export interface SearchOptionsInterface {
  name: string;
  subOptions?: string[];
}
