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

            className='w-full pb-2 text-zinc-500  pt-4 flex justify-evenly z-10'>
            <Link
                href='/earn'
                className={` cursor-pointer  bg-transparent border-sky-500/60  z-10 transition-all w-1/4 px-4 flex flex-col items-center justify-center  py-3 rounded-lg ${pathname === "/earn" ? 'shadow-lg shadow-sky-500/60 scale-105 -translate-y-2 text-sky-500  hover:text-sky-500' : 'border-t border-t-sky-500/60 hover:scale-90 hover:text-zinc-300'}`}>
                <LiaCoinsSolid size={24} />
                <p>
                    Earn
                </p>
            </Link>
            <Link
                href='/'
                className={` cursor-pointer z-10 bg-transparent border-sky-500/60 transition-all w-1/4 px-4 flex flex-col items-center justify-center py-3 rounded-lg  ${pathname === "/" ? 'shadow-lg shadow-sky-500/60 scale-105 -translate-y-2 text-sky-500  hover:text-sky-500' : 'border-t border-t-sky-500/60 hover:scale-90 hover:text-zinc-300'}`}>
                <AiOutlineHome size={24} />
                <p >
                    Home
                </p>
            </Link>
            <Link
                href='/wallet'
                className={` cursor-pointer bg-transparent border-sky-500/60  z-10 transition-all w-1/4 px-4 flex flex-col items-center justify-center  py-3 rounded-lg ${pathname === "/wallet" ? 'shadow-lg shadow-sky-500/60 scale-105 -translate-y-2 text-sky-500  hover:text-sky-500' : 'border-t border-t-sky-500/60 hover:scale-90 hover:text-zinc-300'}`}>
                <IoWalletOutline size={24} />
                <p>
                    Wallet
                </p>
            </Link>
        </motion.footer>
    )
}

export default Footer