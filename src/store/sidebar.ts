import { create } from "zustand";

type State = {
  open: boolean;
  isMobileMenu: boolean;
  setToggle: (value: boolean) => void;
  setIsMobileMenu: (value: boolean) => void;
};

export const sidebarMenu = create<State>((set) => ({
  open: true,
  isMobileMenu: false,
  setToggle(value) {
    set({ open: value });
  },
  setIsMobileMenu(value) {
    set({ isMobileMenu: value });
  },
}));
