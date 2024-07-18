"use client"
import WebApp from "@twa-dev/sdk";
import { useBaseStore } from "@/store/useBaseStore";

const useTelegram = () => {
    const telegram = useBaseStore((state) => state.tg);
    const setTg = useBaseStore((state) => state.setTg);
    const removeTg = useBaseStore((state) => state.removeTg);
    const userId = useBaseStore((state) => state.userId);
    const userName = useBaseStore((state) => state.userName);

    const initTelegram = () => {
        if (typeof window !== 'undefined' && WebApp) {
            console.log('Telegram WebApp is set');
            setTg(WebApp);
            WebApp.ready();
            WebApp.expand();
            WebApp.enableClosingConfirmation();
        }
        else {
            console.log('Telegram WebApp is undefined, retrying…');
            setTimeout(initTelegram, 500);
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
        userName
    }
}

export default useTelegram