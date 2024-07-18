import WebApp from "@twa-dev/sdk";
import { create } from "zustand";

type BaseStoreState = {
  tg: typeof WebApp | null;
  userId: number | null;
  userName: string | null;
};

type BaseStoreActions = {
  setTg: (tg: typeof WebApp) => void;
  removeTg: () => void;
  removeUserId: () => void;
};

export const useBaseStore = create<BaseStoreState & BaseStoreActions>(
  (set) => ({
    tg: null,
    userId: null,
    userName: null,
    setTg: (tg: typeof WebApp) =>
      set(() => ({
        tg: tg,
        userId: tg.initDataUnsafe.user?.id,
        userName: tg.initDataUnsafe.user?.username,
      })) as void,
    removeTg: () => set({ tg: null }),
    removeUserId: () => set({ userId: null }),
  })
);
