import { IUser } from "./@userTypes";

export interface IAdminState {
  adminAddModal: boolean;
  adminEditModal: boolean;
  adminDeleteModal: boolean;
  adminActiveUser: IUser | null;
  message: string;
  error: unknown;
  loading: boolean;

  setAdminAddModal: (boolean: boolean) => void;
  setAdminEditModal: (boolean: boolean) => void;
  setAdminDeleteModal: (boolean: boolean) => void;
  setAdminActiveUser: (user: IUser | null) => void;
  setError: (string: string) => void;
  setMessage: (string: string) => void;
  setLoading: (boolean: boolean) => void;
}
