"use client"
import { useCountdownStore } from '@/store/useCountdownStore';
import { Power, PowerOff } from 'lucide-react';
import { motion } from 'framer-motion';
const SharingButtons = () => {
    const start = useCountdownStore((state) => state.start);
    const stop = useCountdownStore((state) => state.stop);
    return (
        <div className="flex items-center text-sm justify-center gap-4">
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.04 }}
                whileFocus={{ scale: 1.04 }}
                onClick={stop} className="px-4 gap-2 py-2 z-20 flex items-center justify-between  font-bold rounded-r-lg rounded-l-full
                    bg-gradient-to-r from-sky-950/60 to-sky-800/60   ">
                <PowerOff size={22} />
                <span>
                    Stop Sharing
                </span>
            </motion.button>
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.04 }}
                whileFocus={{ scale: 1.04 }}
                onClick={start} className="px-4 gap-2 py-2 z-20 flex items-center justify-between  rounded-r-full !rounded-l-[10px]  font-bold
                    bg-gradient-to-l from-sky-950/60 to-sky-800/60   ">
                <span>
                    Start Sharing
                </span>
                <Power size={22} />
            </motion.button>
        </div>
    )
}

export default SharingButtons