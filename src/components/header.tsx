"use client"
import useTelegram from "@/hooks/useTelegram"
const Header = () => {
    const { userName, userPoints } = useTelegram();
    return (
        <header className='flex w-full overflow-hidden items-center justify-between pt-2 pb-4'>
            <div className='border flex items-center justify-center gap-2 rounded-full text-sm font-bold border-black px-6 py-2'>
                <p>
                    {userName}
                </p>
                <p>
                    XP: {userPoints}
                </p>
            </div>
            <button className="bg-black border z-10 tracking-wide border-black text-sm  rounded-full w-fit text-white px-5 py-2">
                Close App
            </button>
        </header>
    )
}

export default Header
