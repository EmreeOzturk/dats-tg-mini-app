import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const EarnInfoSection = () => {
    return (
        <div className='h-40 border  rounded-lg w-3/4 gap-4 flex flex-col items-center justify-center'>
            <Avatar>
                <AvatarImage src="/mavi3.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className='text-white text-sm'>
                XP Earned: 0
            </p>

        </div>
    )
}

export default EarnInfoSection