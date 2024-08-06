"use client"
import { PropsWithChildren, useEffect } from "react"
import { useQuery } from "@tanstack/react-query";
import { useBaseStore } from "@/store/useBaseStore";
import { useRouter, useSearchParams } from "next/navigation";
import WebApp from "@twa-dev/sdk";
import LoadingPage from "@/components/loading";
const TelegramWebAppProvider = ({ children }: PropsWithChildren<{}>) => {
    const setUserPoints = useBaseStore((state) => state.setUserPoints);
    const setUserTotalTimeOfUsingApp = useBaseStore((state) => state.setUserTotalTimeOfUsingApp);
    const setUserLastCheckInDate = useBaseStore((state) => state.setUserLastCheckInDate);
    const setIsFollowingTwitter = useBaseStore((state) => state.setIsFollowingTwitter);
    const setTg = useBaseStore((state) => state.setTg);
    const setImg = useBaseStore((state) => state.setImg);
    const router = useRouter();
    const searchParams = useSearchParams();
    const img = searchParams.get("img");
    useEffect(() => {
        if (typeof window !== "undefined") {
            WebApp.ready()
            WebApp.setHeaderColor("#000055")
            WebApp.expand()
            WebApp.enableClosingConfirmation()
            WebApp.MainButton.hide()
            WebApp.BackButton.show()
            WebApp.BackButton.onClick(() => {
                router.back()
            })
            setTg(WebApp);
            setImg(img!);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { isLoading } = useQuery({
        queryFn: () => fetch("/api/validateUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ telegramInitData: typeof window !== "undefined" && WebApp.initData }),
        }).then((res) => res.json()).then((data) => {
            setUserPoints(data.points);
            setUserTotalTimeOfUsingApp(data.totalTimeOfUsingApp);
            setUserLastCheckInDate(new Date(data.lastCheckIn));
            setIsFollowingTwitter(data.isFollowingTwitter);
        }),
        queryKey: ["handleAndValidateUser"],
    });



    return isLoading ? <LoadingPage /> : <>{children}</>;
}
export default TelegramWebAppProvider
