"use client"
import { useBaseStore } from "@/store/useBaseStore";
import UserPhoto from "./home/user-photo";
const Header = () => {
    const userName = useBaseStore((state) => state.userName);
    const userPoints = useBaseStore((state) => state.userPoints);
    return (
        <header className='flex w-[96dvw] overflow-hidden items-center justify-between pt-2 pb-3 border-b px-4 rounded-2xl'>
            <div className='flex items-center justify-between gap-2 w-full  text-sm font-bold'>
                <div>
                    <p className="font-bold text-base">
                        {userName}
                    </p>
                    {/* <p className="font-bold text-base">
                        DP: {userPoints}
                    </p> */}
                </div>
                <UserPhoto />
            </div>
            {/* <button className="bg-black border z-10 tracking-wide border-black text-sm  w-fit text-white px-5 py-2">
                Close App
            </button> */}
        </header>
    )
}

export default Header
