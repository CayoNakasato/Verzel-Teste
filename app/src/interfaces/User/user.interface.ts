export interface IUserContextData {
  getUserProfile: (userId: string) => Promise<void>;
  userProfile: IUserProfileData;
  getUsers: () => Promise<void>;
  users: IUserProfileData[];
}

export interface IUserProfileData {
  id: string;
  name: string;
  email: string;
  admin: boolean;
}