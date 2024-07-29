import { create } from "zustand";

type CountdownStoreState = {
  isRunning: boolean;
  startTime: number;
  accumulatedTime: number;
};

type CountdownStoreActions = {
  start: () => void;
  stop: () => void;
  setStartTime: (time: number) => void;
  setAccumulatedTime: (time: number) => void;
};

export const useCountdownStore = create<
  CountdownStoreState & CountdownStoreActions
>((set) => ({
  isRunning: false,
  startTime: 0,
  accumulatedTime: 0,
  start: () => set({ isRunning: true, startTime: Date.now() }),
  stop: () =>
    set((state) => ({
      isRunning: false,
      accumulatedTime: state.accumulatedTime + Date.now() - state.startTime,
    })),
  setStartTime: (time) => set({ startTime: time }),
  setAccumulatedTime: (time) => set({ accumulatedTime: time }),
}));
