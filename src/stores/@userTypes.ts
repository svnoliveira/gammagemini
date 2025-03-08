export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  isSuperUser: boolean;
}

export interface TToken {
  access: string;
  refresh: string;
}

export interface IUserState {
  userData: { user: IUser | null; token: string };
  userList: IUser[];

  setUserData: (user: { user: IUser | null; token: string }) => void;
  setUserList: (userList: IUser[]) => void;
  login: (username: string, password: string) => void;
  logout: () => void;
}
