import Image from 'next/image'
import React from 'react'

const ValidatingError = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <Image priority src="/mavi3.png" alt="Telegram Logo" width={200} height={200} />
      <h2 className="text-4xl text-center mb-4">
        Opps! Something went wrong.
      </h2>
      <h3 className="text-xl text-center">
        We couldn&apos;t verify your identity.
      </h3>
    </div>
  )
}

export default ValidatingError