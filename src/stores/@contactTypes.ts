import { TContactForm } from "@/components/ContactForm/schema";

export interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface IContactState {
  contactList: IContact[];
  setContactList: (contactList: IContact[]) => void;
  registerContact: (formData: TContactForm) => void;
  loadContactList: () => Promise<void>;
}
