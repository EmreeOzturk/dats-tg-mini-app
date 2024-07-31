import { useBaseStore } from "@/store/useBaseStore";
import { followTwitter } from "@/actions/mission-actions";
import { useMutation } from "@tanstack/react-query";

const useCheckTwitterFollowing = (telegramId: number) => {
    const isFollowingTwitter = useBaseStore((state) => state.isFollowingTwitter);
    const setIsFollowingTwitter = useBaseStore((state) => state.setIsFollowingTwitter);
    const incrementUserPoints = useBaseStore((state) => state.incrementUserPoints);
    const { mutate, isPending } = useMutation(
        {
            mutationFn: () => followTwitter({ telegramId: telegramId }),
            mutationKey: ["followTwitter"],
            onSuccess: (data) => {
                if (data.success) {
                    setIsFollowingTwitter(true);
                    incrementUserPoints(15);
                } else {
                    window.alert(data.message);
                }
            },
            onError: (err) => {
                console.error(err);
            }
        }
    )
    return {
        isFollowingTwitter,
        mutate,
        isPending
    }
}

export default useCheckTwitterFollowing