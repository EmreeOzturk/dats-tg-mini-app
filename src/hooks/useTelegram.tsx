"use client"
import WebApp from "@twa-dev/sdk";
import { useBaseStore } from "@/store/useBaseStore";
import { useRouter } from "next/navigation";
const useTelegram = () => {
    const setTg = useBaseStore((state) => state.setTg);
    const removeTg = useBaseStore((state) => state.removeTg);
    const router = useRouter();
    const telegram = useBaseStore((state) => state.tg);
    const telegramId = useBaseStore((state) => state.telegramId);
    const setTelegramId = useBaseStore((state) => state.setTelegramId);
    const initTelegram = () => {
        if (typeof window !== 'undefined' && WebApp !== undefined && telegram === null) {
            WebApp.ready()
            WebApp.expand()
            WebApp.enableClosingConfirmation()
            WebApp.BackButton.show()
            WebApp.BackButton.onClick(() => {
                router.back()
            })
            setTg(WebApp);
            setTelegramId(WebApp.initDataUnsafe.user?.id as number);
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
        telegramId
    }
}

export default useTelegram