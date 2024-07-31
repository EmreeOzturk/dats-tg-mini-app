"use client"
import TaskCard from "./task-card"
import { FaTelegram, FaYoutube, FaTwitter, FaDiscord, FaLinkedin, FaCheck } from "react-icons/fa";
import useTelegram from "@/hooks/useTelegram";
import useCheckDaily from "@/hooks/useCheckDaily";
import useCheckTwitterFollowing from "@/hooks/useCheckTwitterFollowing";
const TaskList = () => {
    const { telegramId } = useTelegram();
    const { isCheckedInToday, mutate: handleCheckIn, isPending: dailyCheckPending } = useCheckDaily(telegramId as number);
    const { isFollowingTwitter, mutate: handleFollowTwitter, isPending: isFollowingTwitterPending } = useCheckTwitterFollowing(telegramId as number);


    return (
        <div className="flex flex-col z-10 items-center justify-start py-4 gap-3 mt-4  h-[70dvh] rounded-lg overflow-y-auto w-full ">
            <h2>Daily tasks</h2>
            <TaskCard
                title="Daily Check-in"
                description="Check-in daily and earn 5 XP"
                reward={5}
                icon={FaCheck}
                index={1}
                action={handleCheckIn}
                isCompleted={isCheckedInToday}
                isPending={dailyCheckPending}
            />
            <h2>One-time tasks</h2>
            <TaskCard
                title="Join Telegram"
                description="Join our telegram channel and earn 10 XP"
                reward={10}
                icon={FaTelegram}
                index={1}
            />
            <TaskCard
                title="Subscribe to Youtube"
                description="Subscribe to our youtube channel and earn 20 XP"
                reward={20}
                icon={FaYoutube}
                index={2}
            />
            <TaskCard
                title="Follow us on Twitter"
                description="Follow us on Twitter and earn 15 XP"
                reward={15}
                icon={FaTwitter}
                index={3}
                action={handleFollowTwitter}
                isCompleted={isFollowingTwitter}
                isPending={isFollowingTwitterPending}
            />
            <TaskCard
                title="Join Discord"
                description="Join our discord server and earn 10 XP"
                reward={10}
                icon={FaDiscord}
                index={4}
            />
            <TaskCard
                title="Connect on LinkedIn"
                description="Connect with us on LinkedIn and earn 15 XP"
                reward={15}
                icon={FaLinkedin}
                index={5}
            />

        </div>
    )
}

export default TaskList