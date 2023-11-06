import React from 'react'
import Image from 'next/image'

export default function MetaLogo() {
  return (
    <div className='flex items-center justify-center bg-inherit p-10 top-0 drop-shadow-xl z-10'>
        <Image src="/middlebury.png" alt='midd logo' width={200} height={100}/>
    </div>
  )
}
