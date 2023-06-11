import { create } from "zustand";
import { persist, StateStorage, createJSONStorage } from "zustand/middleware";
import _ from "lodash";
import Cryptr from "cryptr";

// const cryptr = new Cryptr("lele");

import createSelectors from "@/utils/createSelectors";

interface IAuthState {
  username?: string;
}

// const storage: StateStorage = {
//   getItem: async (name: string): Promise<string | null> => {
//     console.log(name, "has been retrieved");
//     return cryptr.decrypt(localStorage.getItem(name) || "");
//   },
//   setItem: async (name: string, value: string): Promise<void> => {
//     console.log(name, "with value", value, "has been saved");
//     await localStorage.setItem(name, cryptr.encrypt(value));
//   },
//   removeItem: async (name: string): Promise<void> => {
//     console.log(name, "has been deleted");
//     await localStorage.removeItem(name);
//   },
// };

const useStoreAuth = create<IAuthState>()(
  persist(
    (_) => ({
      username: undefined,
    }),
    {
      name: "htb-auth",
      // version: 1,
      // merge: (persistedState, currentState) =>
      //   _.merge(currentState, persistedState),
      // storage: createJSONStorage(() => storage),
    }
  )
);

export default createSelectors(useStoreAuth);
