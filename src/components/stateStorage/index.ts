import { create } from "zustand";

type ContactsType = {
  name: string;
  email: string;
  message: string;
};

type State = {
  contacts: ContactsType[];
  addContact: (contacts: ContactsType) => void;
};

const contactForm = create<State>()((set) => ({
  contacts: [],
  addContact: (contact: ContactsType) => {
    set((state) => ({ contacts: [...state.contacts, contact] }));
  },
}));

export default contactForm;
