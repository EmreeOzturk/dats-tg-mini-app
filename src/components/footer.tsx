"use client"
import { AiOutlineHome } from 'react-icons/ai'
import { LiaCoinsSolid } from 'react-icons/lia'
import { IoWalletOutline } from "react-icons/io5";
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <motion.footer

            initial={{ opacity: 0.0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}

            className='w-full pb-4 text-white flex justify-evenly  gap-4 z-20'>
            <div className='bg-zinc-400/50 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 z-10 transition-all w-1/3 px-4 flex flex-col items-center justify-center gap-1 py-3 rounded-lg'>
                <AiOutlineHome size={24} />
                <p>
                    Home
                </p>
            </div>
            <div className=' bg-zinc-400/50 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 transition-all  z-10 w-1/3 px-4 flex flex-col items-center justify-center gap-1 py-3 rounded-lg'>
                <LiaCoinsSolid size={24} />
                <p>
                    Earn
                </p>
            </div>
            <div className=' bg-zinc-400/50 cursor-pointer hover:text-zinc-300 hover:bg-zinc-500/80 transition-all z-10 w-1/3 px-4 flex flex-col items-center justify-center gap-1 py-3 rounded-lg'>
                <IoWalletOutline size={24} />
                <p>
                    Wallet
                </p>

            </div>
        </motion.footer>
    )
}

export default Footer