"use client"

import { useBaseStore } from "@/store/useBaseStore";
import Image from "next/image";
const UserPhoto = () => {
    const img = useBaseStore((state) => state.img);

    return (
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-t-sky-300 border-l-sky-300 border-b-sky-800 border-r-sky-950">
            {img ? (
                <Image src={img!} layout="fill" objectFit="cover" alt="user image" />
            ) : (
                <div className="w-full h-full bg-sky-800 flex items-center justify-center">
                    <p className="text-zinc-50">DP</p>
                </div>
            )
            }
        </div>
    )
}
export default UserPhoto