import { dailyCheckIn } from "@/actions/mission-actions";
import { useBaseStore } from "@/store/useBaseStore";
import { useMutation } from "@tanstack/react-query";
const useCheckDaily = (telegramId: number) => {
    const lastCheckIn = useBaseStore((state) => state.userLastCheckInDate);
    const setLastCheckIn = useBaseStore((state) => state.setUserLastCheckInDate);
    const incrementUserPoints = useBaseStore((state) => state.incrementUserPoints);

    const { isPending, mutate } = useMutation(
        {
            mutationFn: () => dailyCheckIn({ telegramId: telegramId }),
            mutationKey: ["dailyCheckIn"],
            onSuccess: (data) => {
                console.log(data)
                if (data.success) {
                    setLastCheckIn(new Date());
                    incrementUserPoints(5);
                } else {
                    window.alert(data.message);
                }
            },
            onError: (err) => {
                console.error(err);
            }
        }
    )

    const checkIsCompleted = () => {
        if (lastCheckIn && new Date(lastCheckIn).toDateString() === new Date().toDateString()) {
            return true;
        }
        return false
    }

    const isCheckedInToday = checkIsCompleted();

    return {
        isCheckedInToday,
        mutate,
        isPending
    }
}

export default useCheckDaily