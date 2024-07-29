"use client"
import { IconType } from "react-icons";
import Icon from "./icon"
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
    action: any;
    success?: boolean;
}

const TaskCard: React.FC<CardProps> = ({
    title,
    description,
    reward,
    icon,
    isCompleted,
    index,
    action,
    success
}) => {

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
                    <button
                        onClick={action}
                        className="w-full bg-sky-500 py-2 rounded-lg disabled:bg-emerald-500"
                        disabled={isCompleted}
                    >
                        {
                            isCompleted ? 'Completed' : 'Claim Reward'
                        }
                    </button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default TaskCard