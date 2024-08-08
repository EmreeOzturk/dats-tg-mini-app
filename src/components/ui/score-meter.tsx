"use client"
import { useEffect, useRef, useState } from "react";
import { useCountdownStore } from "@/store/useCountdownStore";

const SECOND = 1000;

const ScoreMeter = () => {
    return (
        <div className="mx-auto flex w-fit max-w-5xl flex-wrap items-center text-zinc-50 px-4 justify-center gap-x-4 text-xs md:text-sm
            bg-gradient-to-r from-sky-600/30 via-sky-600/50 to-sky-500/30 rounded-full border border-sky-950 
        ">
            <ScoreItem unit="Score" text="DP" />
        </div>
    );
};

const ScoreItem = ({ unit, text }: { unit: string; text: string }) => {
    const { score } = useTimer();
    return (
        <div className="flex w-fit items-center justify-center gap-1.5 py-2 ">
            <div className="relative w-full overflow-hidden text-center">
                <span
                    className="block font-mono text-sm font-semibold md:text-base">
                    {unit === "Score" && score.toFixed(3)}
                </span>
            </div>
            <span>{text}</span>
        </div>
    );
};

export default ScoreMeter;

const useTimer = () => {

    const isRunning = useCountdownStore((state) => state.isRunning);
    const startTime = useCountdownStore((state) => state.startTime);
    const accumulatedTime = useCountdownStore((state) => state.accumulatedTime);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const [score, setScore] = useState((accumulatedTime + (isRunning ? Date.now() - startTime : 0)) / SECOND);

    useEffect(() => {
        if (isRunning) {
            if (!intervalRef.current) {
                intervalRef.current = setInterval(handleScoreCounter, 456);
            }
        } else {
            clearInterval(intervalRef.current || undefined);
            intervalRef.current = null;
        }

        // return () => clearInterval(intervalRef.current || undefined);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isRunning]);
    const handleScoreCounter = async () => {
        const now = Date.now();
        const elapsed = accumulatedTime + (isRunning ? now - startTime : 0);
        const newScore = elapsed / SECOND;
        setScore(newScore);
    };

    return { score };
};