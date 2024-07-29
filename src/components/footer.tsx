"use client"
import { AiOutlineHome } from 'react-icons/ai'
import { LiaCoinsSolid } from 'react-icons/lia'
import { IoWalletOutline } from "react-icons/io5";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion'
import Link from 'next/link';
const Footer = () => {
    const pathname = usePathname()
    return (
        <motion.footer

            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}

            className='w-full pb-4 text-blue-950 flex justify-evenly z-10'>
            <Link
                href='/earn'
                className={`bg-zinc-300 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 z-10 transition-all w-1/4 px-4 flex flex-col items-center justify-center  py-3 rounded-lg ${pathname === "/earn" ? 'shadow-lg shadow-sky-500/60 scale-105 text-sky-500 hover:bg-zinc-300 hover:text-sky-500' : ''}`}>
                <LiaCoinsSolid size={24} />
                <p>
                    Earn
                </p>
            </Link>
            <Link
                href='/'
                className={`bg-zinc-300 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 z-10 transition-all w-1/4 px-4 flex flex-col items-center justify-center py-3 rounded-lg -translate-y-2 ${pathname === "/" ? 'shadow-lg shadow-sky-500/60 scale-105  text-sky-500 hover:bg-zinc-300 hover:text-sky-500' : ''}`}>
                <AiOutlineHome size={24} />
                <p >
                    Home
                </p>
            </Link>
            <Link
                href='/wallet'
                className={`bg-zinc-300 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 z-10 transition-all w-1/4 px-4 flex flex-col items-center justify-center  py-3 rounded-lg ${pathname === "/wallet" ? 'shadow-lg shadow-sky-500/60 scale-105 text-sky-500 hover:bg-zinc-300 hover:text-sky-500' : ''}`}>
                <IoWalletOutline size={24} />
                <p>
                    Wallet
                </p>
            </Link>
        </motion.footer>
    )
}

export default Footer