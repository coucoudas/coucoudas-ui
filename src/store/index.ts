import { create } from "zustand";
import { ActionEvent } from "../interface";

interface ActionProps<T = any> {
  events: ActionEvent[];
  setView: (prop: string) => void;
  removeView: (prop: string) => void;
  clearView: () => void;

  setModal: (prop: string) => void;
  removeModal: (prop: string) => void;
  clearModal: () => void;

  // Controll tag state
  flag: boolean;
  setFlag: () => void;
  isOwn: boolean | string;
  setIsOwn: (prop: boolean | string) => void;
  isOwnId: string;
  setIsOwnId: (prop: string) => void;
}

export const useActionStore = create<ActionProps>((set) => ({
  events: [],
  setView: (prop) =>
    set((state) => {
      state.setIsOwn(true);
      if (state.events.find(({ event }) => event === prop) !== undefined)
        return state;
      return {
        events: [...state.events, { event: prop, type: "view" }],
      };
    }),
  removeView: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },
  clearView: () =>
    set((state) => ({
      events: state.events.filter(({ type }) => type !== "view"),
    })),

  setModal: (prop) =>
    set((state) => ({
      events: [...state.events, { event: prop, type: "modal" }],
    })),
  removeModal: (prop) => {
    set((state) => ({
      events: state.events.filter(({ event }) => event !== prop),
    }));
  },
  clearModal: () =>
    set((state) => ({
      events: state.events.filter(({ type }) => type !== "modal"),
    })),

  flag: false,
  setFlag: () => set((state) => ({ flag: !state.flag })),

  isOwn: false,
  setIsOwn: (prop) => set({ isOwn: prop }),
  isOwnId: "",
  setIsOwnId: (prop) => set({ isOwnId: prop }),
}));
