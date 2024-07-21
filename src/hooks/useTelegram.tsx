"use client"
import WebApp from "@twa-dev/sdk";
import { useBaseStore } from "@/store/useBaseStore";

const useTelegram = () => {
    const setTg = useBaseStore((state) => state.setTg);
    const removeTg = useBaseStore((state) => state.removeTg);

    const telegram = useBaseStore((state) => state.tg);
    const userId = useBaseStore((state) => state.userId);
    const userName = useBaseStore((state) => state.userName);
    const userPoints = useBaseStore((state) => state.userPoints);
    const userTotalTimeOfUsingApp = useBaseStore((state) => state.userTotalTimeOfUsingApp);

    const initTelegram = () => {
        if (typeof window !== 'undefined' && WebApp !== undefined && telegram === null) {
            WebApp.ready()
            WebApp.expand()
            WebApp.enableClosingConfirmation()
            setTg(WebApp);
        }
        else {
            setTimeout(initTelegram, 400);
        }
    }

    const removeTelegram = () => {
        removeTg();
    }

    return {
        initTelegram,
        removeTelegram,
        telegram,
        userId,
        userName,
        userPoints,
        userTotalTimeOfUsingApp,
    }
}

export default useTelegram