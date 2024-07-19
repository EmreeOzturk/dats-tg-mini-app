"use client"
import { PropsWithChildren, useEffect, useState } from "react"

import useTelegram from "@/hooks/useTelegram";
const TelegramWebAppProvider = ({ children }: PropsWithChildren<{}>) => {
    const { removeTelegram, initTelegram, telegram } = useTelegram();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        initTelegram();
        setLoading(false);
        return () => {
            removeTelegram();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>
        {loading ? <div>Loading…</div> : children}
    </>
}

export default TelegramWebAppProvider
