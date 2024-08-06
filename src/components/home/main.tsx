"use client"

import { motion } from "framer-motion";
import PulseButton from "@/components/ui/pulse-button";
import Timer from "@/components/ui/timer";
import useConnectionDataStore from "@/store/useConnectionDataStore";
import SharingButtons from "@/components/home/sharing-buttons";
import ScoreMeter from "../ui/score-meter";

const Main = () => {
    const downloadSpeed = useConnectionDataStore((state) => state.downloadSpeed);
    const uploadSpeed = useConnectionDataStore((state) => state.uploadSpeed);
    return (
        <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="relative h-full flex pt-8 flex-col items-center justify-between " >
            <div className="text-4xl font-bold text-center">
                <h2 className="drop-shadow-[0px 0px 8px #000] tracking-wider  shadow-black  stroke-black dark:stroke-white" >
                    DATS PROJECT
                </h2>
                <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 pt-2 ">
                    Check your connection speed
                </div>
                <div className="flex items-center justify-center my-16 scale-90">
                    <PulseButton />
                </div>
            </div>

            {downloadSpeed !== 0 &&
                <div className="flex items-center text-sm justify-between gap-3" >
                    <p className="text-white font-bold">Download Speed: <span className="text-sky-400">{downloadSpeed}</span></p>
                    <p className="text-white font-bold">Upload Speed: <span className="text-sky-400">{uploadSpeed}</span></p>
                </div>
            }
            <div className="flex flex-col mt-6 items-center justify-start gap-2 h-full ">
                <p className="font-bold text-xl text-white mb-4">Total Shared Time</p>
                <ScoreMeter />
                <Timer />
                <SharingButtons />
            </div>
        </motion.div>
    )
}

export default Main