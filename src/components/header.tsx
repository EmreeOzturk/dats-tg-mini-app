"use client"
import useTelegram from "@/hooks/useTelegram"
import { useBaseStore } from "@/store/useBaseStore";
const Header = () => {
    const userName = useBaseStore((state) => state.userName);
    const userPoints = useBaseStore((state) => state.userPoints);
    return (
        <header className='flex w-full overflow-hidden items-center justify-between pt-4 pb-4 '>
            <div className='border flex items-center justify-center gap-2  text-sm font-bold border-black px-6 py-2'>
                <p>
                    {userName}
                </p>
                <p>
                    XP: {userPoints}
                </p>
            </div>
            {/* <button className="bg-black border z-10 tracking-wide border-black text-sm  w-fit text-white px-5 py-2">
                Close App
            </button> */}
        </header>
    )
}

export default Header
