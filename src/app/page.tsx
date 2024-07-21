"use client"
import { motion } from "framer-motion";
import PulseButton from "@/components/ui/pulse-button";
import Footer from "@/components/footer";
export default function Home() {

  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex h-full pt-8 flex-col gap-4 items-center justify-start px-4"
    >
      <div className="text-4xl md:text-7xl mb-24 font-bold text-center">
        <h2
          className="drop-shadow-[0px 0px 8px #000]  shadow-black
           stroke-black dark:stroke-white"
        >
          DATS PROJECT
        </h2>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Check your connection speed
        </div>
      </div>

      <PulseButton />
      <Footer />
    </motion.div>
  );
}
