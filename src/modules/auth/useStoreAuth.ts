import { create } from "zustand";

interface IAuthState {
  username?: string;
}

const useStoreAuth = create<IAuthState>()(() => ({
  username: undefined,
}));

export default useStoreAuth;
