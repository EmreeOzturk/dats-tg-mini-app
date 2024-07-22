"use client"
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import useConnectionDataStore from "@/store/useConnectionDataStore";
import { useEffect } from "react";
import type { ConnectionResponseData } from "@/types";
const LOOP_DURATION = 4;

const PulseButton = () => {
    const setDownloadSpeed = useConnectionDataStore((state) => state.setDownloadSpeed);
    const setUploadSpeed = useConnectionDataStore((state) => state.setUploadSpeed);
    const setUserLocation = useConnectionDataStore((state) => state.setUserLocation);
    const setUserIp = useConnectionDataStore((state) => state.setUserIp);
    const { data, isPending, isError, mutate } = useMutation({
        mutationFn: () => {
            return fetch("/api/speedTest", {
                method: "POST",
            })
        },
    })

    useEffect(() => {
        if (data) {
            // setDownloadSpeed(data.downloadSpeed);
            // setUploadSpeed(data.uploadSpeed);
            // setUserLocation(data.userLocation);
            // setUserIp(data.userIp);
            console.log(data)
        }
    }, [data, isPending]);
    return (
        <motion.div
            onClick={() => {
                mutate();
            }}
            initial={{
                scale: 0.5,
            }}
            animate={{
                scale: 1.2,
            }}
            // whileHover={
            //     {
            //         scale: 1.1,
            //     }
            // }
            whileTap={
                {
                    scale: 0.9,
                }
            }
            className="relative cursor-pointer mb-32">
            <Logo />
            <Band delay={0} />
            <Band delay={LOOP_DURATION * 0.25} />
            <Band delay={LOOP_DURATION * 0.5} />
            <Band delay={LOOP_DURATION * 0.75} />
        </motion.div>
    );
};

const Logo = () => {
    return (
        <motion.svg
            width="70"
            height="55"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10 fill-violet-100"
            initial={{
                opacity: 0,
                scale: 0.85,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
        >
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
        </motion.svg>
    );
};

const Band = ({ delay }: { delay: number }) => {
    return (
        <motion.span
            style={{
                translateX: "-50%",
                translateY: "-50%",
            }}
            initial={{
                opacity: 0,
                scale: 0.25,
            }}
            animate={{
                opacity: [0, 0.6, 0.6, 0],
                scale: 1,
            }}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.5, 0.75, 1],
                duration: LOOP_DURATION,
                ease: "linear",
                delay,
            }}
            className="absolute left-[50%] top-[50%] z-0 h-56 w-56 rounded-full border-[1px] border-sky-500 bg-gradient-to-br from-sky-500/50 to-sky-800/30 shadow-2xl shadow-sky-500/40"
        />
    );
};

export default PulseButton;