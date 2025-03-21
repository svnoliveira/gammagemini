import { create } from "zustand";
import { adminStore } from "./AdminStore";
import { post, retrieve } from "@/lib/fetchClient";
import { IContact, IContactState } from "./@contactTypes";

const setError = adminStore.getState().setError;
const setMessage = adminStore.getState().setMessage;
const setLoading = adminStore.getState().setLoading;

export const contactStore = create<IContactState>()((set) => ({
  contactList: [],
  setContactList: (contactList) => set({ contactList }),

  registerContact: async (formData) => {
    setLoading(true);
    try {
      const data = await post<IContact[]>("/contacts/", formData);
      if (data) {
        set({ contactList: data });
        setMessage("Contato registtrado!");
      }
    } catch (error: unknown) {
      console.error(error);
      setError("Tentativa registro de contato falhou");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError("");
        setMessage("");
      }, 2000);
    }
  },

  loadContactList: async () => {
    try {
      const data = await retrieve<IContact[]>("/contacts/");
      if (data) {
        set({ contactList: data });
      }
    } catch (error) {
      console.error(error);
    }
  },
}));
