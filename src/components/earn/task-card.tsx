"use client"
import { IconType } from "react-icons";
import Link from "next/link";
import Icon from "./icon"
import { Loader } from "lucide-react"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { motion } from "framer-motion"
type CardProps = {
    title: string;
    description: string;
    reward: number;
    icon?: IconType;
    isCompleted?: boolean;
    index?: number;
    action?: any;
    isPending?: boolean;
}

const TaskCard: React.FC<CardProps> = ({
    title,
    description,
    reward,
    icon,
    isCompleted,
    index,
    action,
    isPending
}) => {

    const renderButtonOrLink = () => {
        if (title === 'Follow us on Twitter') {
            return <Link
                target="_blank"
                onClick={() => {
                    action()
                }}
                className={`w-full py-2 rounded-lg ${isCompleted ? 'bg-emerald-500' : 'bg-sky-500'}`}
                href="https://twitter.com/intent/follow?screen_name=datsproject" >
                {isPending ? <div className="w-full flex items-center justify-center"><Loader className="animate-spin" /></div> : isCompleted ? <div
                    className="w-full flex items-center justify-center "
                >Completed</div> : <div
                    className="w-full flex items-center justify-center">
                    Claim Reward</div>}
            </Link>
        } else {
            return <button
                onClick={() => {
                    action()
                }}
                className="w-full bg-sky-500 py-2 rounded-lg disabled:bg-emerald-500"
                disabled={isCompleted}
            >
                {isPending ? <div className="w-full flex items-center justify-center"><Loader className="animate-spin" /></div> : isCompleted ? 'Completed' : 'Claim Reward'}
            </button>
        }
    }

    return (
        <Drawer >
            <DrawerTrigger asChild>
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.2,
                        delay: index && index * 0.1,
                    }}
                    className={`flex flex-col items-start cursor-pointer  bg-sky-600/30 py-2 justify-center w-full border-r-[10px] rounded-lg max-h-24 px-4 ${isCompleted ? 'border-emerald-500' : 'border-x-sky-600'}`}>

                    <div className="flex items-center justify-between w-full">
                        {icon && <Icon icon={icon} size={20} />}
                        <p className={` text-sm mt-1 ${isCompleted ? 'text-green-300' : 'text-white'}`}>{reward} XP</p>
                    </div>
                    <div className="flex w-full justify-between items-cente mt-2">
                        <p className="text-white text-sm">{title}</p>
                    </div>
                    <p className="text-white text-[11px]">{description}</p>
                </motion.button>
            </DrawerTrigger>

            <DrawerContent className="bg-slate-900 border-none">
                <DrawerHeader >
                    <DrawerTitle className="flex items-center justify-center">
                        {icon && <Icon icon={icon} size={20} />}
                    </DrawerTitle>
                    <DrawerTitle>{title}</DrawerTitle>
                    <DrawerClose />
                    <DrawerDescription>
                        {description}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    {renderButtonOrLink()}
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default TaskCard