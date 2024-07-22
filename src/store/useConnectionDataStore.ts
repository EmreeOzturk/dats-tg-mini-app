import { create } from "zustand";

type ConnectionDataStoreState = {
  downloadSpeed: number;
  uploadSpeed: number;
  userLocation: string;
  userIp: string;
};

type ConnectionDataStoreActions = {
  setDownloadSpeed: (downloadSpeed: number) => void;
  setUploadSpeed: (uploadSpeed: number) => void;
  setUserLocation: (userLocation: string) => void;
  setUserIp: (userIp: string) => void;
};

const useConnectionDataStore = create<
  ConnectionDataStoreState & ConnectionDataStoreActions
>((set) => ({
  downloadSpeed: 0,
  uploadSpeed: 0,
  userLocation: "",
  userIp: "",

  setDownloadSpeed: (downloadSpeed) => set({ downloadSpeed }),
  setUploadSpeed: (uploadSpeed) => set({ uploadSpeed }),
  setUserLocation: (userLocation) => set({ userLocation }),
  setUserIp: (userIp) => set({ userIp }),
}));

export default useConnectionDataStore;
