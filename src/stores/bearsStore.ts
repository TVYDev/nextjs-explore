import { create } from "zustand";

import createSelectors from "@/utils/createSelectors";

interface IBearState {
  bears: number;
}

interface IBearAction {
  increase: (by: IBearState["bears"]) => void;
}

const initialState: IBearState = {
  bears: 0,
};

const useBearsStore = create<IBearState & IBearAction>()((set) => ({
  ...initialState,
  increase: (by) => set(({ bears }) => ({ bears: bears + by })),
}));

export default createSelectors(useBearsStore);
