import { create } from "zustand";

interface ICarStore {
  cars: number;
  increase: (by: number) => void;
}

const useCarsStore = create<ICarStore>()((set) => ({
  cars: 10,
  increase: (by) => set(({ cars }) => ({ cars: cars + by })),
}));

export default useCarsStore;
