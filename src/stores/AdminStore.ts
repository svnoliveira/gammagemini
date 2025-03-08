import { create } from "zustand";
import { IAdminState } from "./@adminTypes";

export const adminStore = create<IAdminState>()((set) => ({
  adminAddModal: false,
  adminEditModal: false,
  adminDeleteModal: false,
  adminActiveUser: null,
  message: "",
  error: "",
  loading: false,

  setAdminAddModal: (boolean) => {
    set({ adminAddModal: boolean });
  },
  setAdminEditModal: (boolean) => {
    set({ adminEditModal: boolean });
  },
  setAdminDeleteModal: (boolean) => {
    set({ adminDeleteModal: boolean });
  },
  setAdminActiveUser: (user) => {
    set({ adminActiveUser: user });
  },
  setError: (string) => {
    set({ error: string });
  },
  setMessage: (string) => {
    set({ message: string });
  },
  setLoading: (boolean) => {
    set({ loading: boolean });
  },
}));
