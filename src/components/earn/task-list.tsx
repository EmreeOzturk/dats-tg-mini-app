"use client"
import TaskCard from "./task-card"
import { FaTelegram, FaYoutube, FaTwitter, FaDiscord, FaLinkedin, FaCheck } from "react-icons/fa";
import useTelegram from "@/hooks/useTelegram";
import useCheckDaily from "@/hooks/useCheckDaily";

const TaskList = () => {
    const { telegramId } = useTelegram();
    const { checkIsCompleted, handleCheckIn, success } = useCheckDaily(telegramId as number);
    const isCompleted = checkIsCompleted()


    return (
        <div className="flex flex-col z-10 items-center justify-start py-4 gap-3 mt-4  max-h-[340px] overflow-y-auto w-full">
            {/* <TaskCard
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
                isCompleted={true}
                index={3}
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
            /> */}
            <TaskCard
                title="Daily Check-in"
                description="Check-in daily and earn 5 XP"
                reward={5}
                icon={FaCheck}
                index={6}
                action={handleCheckIn}
                isCompleted={isCompleted}
                success={success}
            />
        </div>
    )
}

export default TaskList