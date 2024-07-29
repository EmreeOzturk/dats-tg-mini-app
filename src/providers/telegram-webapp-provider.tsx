"use client"
import { PropsWithChildren, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query";
import { useBaseStore } from "@/store/useBaseStore";

import useTelegram from "@/hooks/useTelegram";
import WebApp from "@twa-dev/sdk";
import LoadingPage from "@/components/loading";
const TelegramWebAppProvider = ({ children }: PropsWithChildren<{}>) => {
    const { removeTelegram, initTelegram } = useTelegram();
    const setUserPoints = useBaseStore((state) => state.setUserPoints);
    const setUserTotalTimeOfUsingApp = useBaseStore((state) => state.setUserTotalTimeOfUsingApp);
    const setUserLastCheckInDate = useBaseStore((state) => state.setUserLastCheckInDate);
    useEffect(() => {
        initTelegram();
        return () => {
            removeTelegram();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { data, isLoading } = useQuery({
        queryFn: async () => await fetch("/api/validateUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ telegramInitData: typeof window !== "undefined" && WebApp.initData }),
        }).then((res) => res.json()).then((data) => {
            setUserPoints(data.points);
            setUserTotalTimeOfUsingApp(data.totalTimeOfUsingApp);
            setUserLastCheckInDate(new Date(data.lastCheckIn));
        }),
        queryKey: ["handleAndValidateUser"],
    });


    return (
        <>
            {
                isLoading ? <LoadingPage /> : children
            }
        </>
    )
}
export default TelegramWebAppProvider
