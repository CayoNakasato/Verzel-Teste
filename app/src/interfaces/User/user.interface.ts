export interface IUserContextData {
  getUserProfile: (userId: string) => Promise<void>;
  userProfile: IUserProfileData;
}

export interface IUserProfileData {
  id: string;
  name: string;
  email: string;
  admin: boolean;
}
