"use client"
import { motion } from "framer-motion";
import PulseButton from "@/components/ui/pulse-button";
import Timer from "@/components/ui/timer";
import useConnectionDataStore from "@/store/useConnectionDataStore";
import SharingButtons from "@/components/home/sharing-buttons";

export default function Home() {

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
      className="relative h-[70dvh]  flex  pt-3 flex-col gap-4 items-center justify-between pb-12 px-4" >
      <div className="text-4xl  mb-12 font-bold text-center">
        <h2 className="drop-shadow-[0px 0px 8px #000] tracking-wider  shadow-black  stroke-black dark:stroke-white" >
          DATS PROJECT
        </h2>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Check your connection speed
        </div>
      </div>
      <PulseButton />
      {downloadSpeed !== 0 &&
        <div className="flex items-center text-sm justify-between gap-3" >
          <p className="text-white font-bold">Download Speed: <span className="text-sky-400">{downloadSpeed}</span></p>
          <p className="text-white font-bold">Upload Speed: <span className="text-sky-400">{uploadSpeed}</span></p>
        </div>
      }
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="font-bold text-xl text-white">Total Shared Time</p>
        <Timer />
      </div>
      <SharingButtons />
    </motion.div>
  );
}
