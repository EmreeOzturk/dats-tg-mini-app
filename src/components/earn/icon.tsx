"use client"
import type { IconType } from 'react-icons'


type IconProps = {
    icon: IconType
    size?: number
}
const Icon: React.FC<IconProps> = ({ icon: Icon, size }) => {
    return (
        <Icon size={size} />
    )
}

export default Icon