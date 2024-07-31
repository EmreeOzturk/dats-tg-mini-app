"use client"
import Image from "next/image";
import { useBaseStore } from "@/store/useBaseStore";
const Header = () => {
    const userName = useBaseStore((state) => state.userName);
    const userPoints = useBaseStore((state) => state.userPoints);
    return (
        <header className='flex w-[96dvw] overflow-hidden items-center justify-between py-1 border-b px-4 rounded-2xl mt-2'>
            <div className='flex items-center justify-between gap-2 w-full  text-sm font-bold'>
                <div>
                    <p className="font-bold text-base">
                        {userName}
                    </p>
                    <p className="font-bold text-base">
                        XP: {userPoints}
                    </p>
                </div>
                <Image priority src="/mavi3.png" alt="dats project logo" width={40} height={40} className="object-cover" />
            </div>
            {/* <button className="bg-black border z-10 tracking-wide border-black text-sm  w-fit text-white px-5 py-2">
                Close App
            </button> */}
        </header>
    )
}

export default Header
