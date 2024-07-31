"use client"
import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useCountdownStore } from "@/store/useCountdownStore";
const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const Timer = () => {
    return (
        <div className="mx-auto flex w-fit max-w-5xl flex-wrap items-center text-zinc-50 px-4 justify-center gap-x-4 text-xs md:text-sm
            bg-gradient-to-r from-sky-950/30 via-sky-600/50 to-sky-950/30 rounded-full border border-sky-950 
        ">
            <CountdownItem unit="Day" text="days" />
            <CountdownItem unit="Hour" text="hours" />
            <CountdownItem unit="Minute" text="minutes" />
            <CountdownItem unit="Second" text="seconds" />
        </div>
    );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
    const { ref, time } = useTimer(unit);
    return (
        <div className="flex w-fit items-center justify-center gap-1.5 py-2">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block font-mono text-sm font-semibold md:text-base"
                >
                    {time}
                </span>
            </div>
            <span>{text}</span>
        </div>
    );
};


export default Timer;

const useTimer = (unit: Units) => {
    const [ref, animate] = useAnimate();

    const isRunning = useCountdownStore((state) => state.isRunning);
    const startTime = useCountdownStore((state) => state.startTime);
    const accumulatedTime = useCountdownStore((state) => state.accumulatedTime);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const timeRef = useRef(0);

    const [time, setTime] = useState(0);

    useEffect(() => {
        if (isRunning) {
            if (!intervalRef.current) {
                intervalRef.current = setInterval(handleStopwatch, 1000);
            }
        } else {
            clearInterval(intervalRef.current || undefined);
            intervalRef.current = null;
        }

        return () => clearInterval(intervalRef.current || undefined);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRunning]);
    const handleStopwatch = async () => {
        const now = Date.now();
        const elapsed = accumulatedTime + (isRunning ? now - startTime : 0);

        let newTime = 0;

        if (unit === "Day") {
            newTime = Math.floor(elapsed / DAY);
        } else if (unit === "Hour") {
            newTime = Math.floor((elapsed % DAY) / HOUR);
        } else if (unit === "Minute") {
            newTime = Math.floor((elapsed % HOUR) / MINUTE);
        } else {
            newTime = Math.floor((elapsed % MINUTE) / SECOND);
        }

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };

    return { ref, time };
};