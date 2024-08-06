import { create } from "zustand";

type ScoreMeterTypes = {
  isRunning: boolean;
  startTime: number;
  accumulatedTime: number;
};

type ScoreMeterActions = {
  start: () => void;
  stop: () => void;
  setStartTime: (time: number) => void;
  setAccumulatedTime: (time: number) => void;
};

const useScoreMeterStore = create<ScoreMeterTypes & ScoreMeterActions>(
  (set) => ({
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
  })
);

export default useScoreMeterStore;
