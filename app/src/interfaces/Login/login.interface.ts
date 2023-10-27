export interface ILoginData {
  email: string;
  password: string;
}

export interface IContextData {
  login: (data: ILoginData) => Promise<void>;
}