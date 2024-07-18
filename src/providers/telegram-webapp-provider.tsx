"use client"
import { PropsWithChildren, useEffect } from "react"

import useTelegram from "@/hooks/useTelegram";
const TelegramWebAppProvider = ({ children }: PropsWithChildren<{}>) => {
    const { removeTelegram, initTelegram, userId, userName } = useTelegram();

    useEffect(() => {
        initTelegram();

        return () => {
            removeTelegram();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>
        <div>
            {userId && <div>userId: {userId}</div>}
            {userName && <div>userName: {userName}</div>}
        </div>
        {children}</>;
}

export default TelegramWebAppProvider
