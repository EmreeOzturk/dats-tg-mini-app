import WebApp from "@twa-dev/sdk";
import { create } from "zustand";

type BaseStoreState = {
  tg: typeof WebApp | null;
  img: string | null;
  telegramId: number | null;
  userId: number | null;
  userName: string | null;
  userPoints: number | null;
  userTotalTimeOfUsingApp: number | null;
  userLastCheckInDate: Date | null;
  isFollowingTwitter: boolean;
};

type BaseStoreActions = {
  setTg: (tg: typeof WebApp) => void;
  setImg: (img: string) => void;
  setUserPoints: (points: number) => void;
  setTelegramId: (id: number) => void;
  setUserTotalTimeOfUsingApp: (totalTime: number) => void;
  setUserLastCheckInDate: (date: Date) => void;
  incrementUserPoints: (points: number) => void;
  setIsFollowingTwitter: (isFollowing: boolean) => void;
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
    isFollowingTwitter: false,
    img: null,
    setTg: (tg: typeof WebApp) =>
      set(() => ({
        tg: tg,
        userId: tg.initDataUnsafe.user?.id,
        userName: tg.initDataUnsafe.user?.username,
        telegramId: tg.initDataUnsafe.user?.id,
      })) as void,
    setUserPoints: (points: number) => set({ userPoints: points }),
    incrementUserPoints: (points: number) => {
      set((state) => ({ userPoints: state.userPoints! + points }));
    },
    setTelegramId: (id: number) => set({ telegramId: id }),
    setUserTotalTimeOfUsingApp: (totalTime: number) =>
      set({ userTotalTimeOfUsingApp: totalTime }),
    setUserLastCheckInDate: (date: Date) => set({ userLastCheckInDate: date }),
    setIsFollowingTwitter: (isFollowing: boolean) =>
      set({ isFollowingTwitter: isFollowing }),
    setImg: (img: string) => set({ img: img }),
  })
);
