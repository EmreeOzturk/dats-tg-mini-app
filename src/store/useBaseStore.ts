import WebApp from "@twa-dev/sdk";
import { create } from "zustand";

type BaseStoreState = {
  tg: typeof WebApp | null;
  telegramId: number | null;
  userId: number | null;
  userName: string | null;
  userPoints: number | null;
  userTotalTimeOfUsingApp: number | null;
  userLastCheckInDate: Date | null;
};

type BaseStoreActions = {
  setTg: (tg: typeof WebApp) => void;
  setUserPoints: (points: number) => void;
  setTelegramId: (id: number) => void;
  setUserTotalTimeOfUsingApp: (totalTime: number) => void;
  removeTg: () => void;
  removeUserId: () => void;
  setUserLastCheckInDate: (date: Date) => void;
  incrementUserPoints: (points: number) => void;
};

export const useBaseStore = create<BaseStoreState & BaseStoreActions>(
  (set) => ({
    tg: null,
    userId: null,
    userName: null,
    telegramId: null,
    userPoints: null,
    userTotalTimeOfUsingApp: null,
    userLastCheckInDate: null,
    setTg: (tg: typeof WebApp) =>
      set(() => ({
        tg: tg,
        userId: tg.initDataUnsafe.user?.id,
        userName: tg.initDataUnsafe.user?.username,
      })) as void,
    removeTg: () => set({ tg: null }),
    removeUserId: () => set({ userId: null }),
    setUserPoints: (points: number) => set({ userPoints: points }),
    incrementUserPoints: (points: number) => {
      set((state) => ({ userPoints: state.userPoints! + points }));
    },
    setTelegramId: (id: number) => set({ telegramId: id }),
    setUserTotalTimeOfUsingApp: (totalTime: number) =>
      set({ userTotalTimeOfUsingApp: totalTime }),
    setUserLastCheckInDate: (date: Date) => set({ userLastCheckInDate: date }),
  })
);
