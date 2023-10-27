export interface IRegisterData {
  name: string;
  email: string;
  admin: boolean;
  password: string;
  confirmPassword: string;
}

export interface IRegisterDataFormatted {
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

export interface IRegisterContextData {
  registerForm: (data: IRegisterDataFormatted) => Promise<void>;
}
