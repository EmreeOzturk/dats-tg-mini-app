import Image from 'next/image'
const LoadingPage = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className="flex h-full items-center justify-start pt-32 flex-col relative">
                <div className="animate-none  rounded-full h-56 w-52 mt-4  relative">
                    <Image src="/mavi3.png" alt="logo" fill className='animate-none' priority />
                </div>
                <div className="animate-spin rounded-full h-64 w-64 border-b-2 border-t-2 border-gray-700 absolute" />
                <div className='mt-16  text-2xl'>
                    <h4 className='text-transparent bg-clip-text text-center text-4xl  font-bold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600'>
                        DATS PROJECT
                    </h4>
                </div>
                <div className='absolute bottom-0 right-0 left-0'>
                    v0.0.1
                </div>
            </div>
        </div>
    )
}

export default LoadingPage