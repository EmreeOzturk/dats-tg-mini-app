import { dailyCheckIn } from "@/actions/mission-actions";
import { useBaseStore } from "@/store/useBaseStore";
import { useState } from "react";
const useCheckDaily = (telegramId: number) => {
    const lastCheckIn = useBaseStore((state) => state.userLastCheckInDate);
    const setLastCheckIn = useBaseStore((state) => state.setUserLastCheckInDate);
    const incrementUserPoints = useBaseStore((state) => state.incrementUserPoints);
    const [success, setSuccess] = useState(false);

    const handleCheckIn = async () => {
        dailyCheckIn({ telegramId: telegramId }).then((res) => {
            if (res.success) {
                setLastCheckIn(new Date());
                incrementUserPoints(5);
                setSuccess(true);
            } else {
                window.alert(res.message);
            }
        }).catch((err) => {
            console.error(err);
        })
    }

    const checkIsCompleted = () => {
        if (lastCheckIn && new Date(lastCheckIn).toDateString() === new Date().toDateString()) {
            return true;
        }
        return false
    }


    return {
        handleCheckIn,
        checkIsCompleted,
        success
    }
}

export default useCheckDaily