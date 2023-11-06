import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className='bg-inherit p-6 sticky top-0 drop-shadow-xl z-9'>
        <div className='prose prose xl mx-auto flex justify-between flex-col sm:flex-row text-black/70 font-sans text-xl font-semibold'>
            
            <Link href="/" className='no-underline hover:text-black/90 mt-2'>HOME</Link>
            <Link href="/" className='no-underline hover:text-black/90 mt-2'>SERVICES</Link>
            <Link href="/" className='no-underline hover:text-black/90 mt-2'>CONTACT</Link>
            <Link href="/" className='no-underline hover:text-black/90 mt-2'>MEMBERSHIP</Link>

            <div className='flex space-x-4'>
                <Link href="https://patientgateway.massgeneralbrigham.org/mychart-prd/Authentication/Login?" target='_blank'>     
                    <Image
                    src="/patient-gateway.png"
                    alt='Patient Gateway'
                    width={40}
                    height={40}
                    />
                </Link>
                
                <Link href="https://twitter.com" target='_blank'>
                    <Image
                        src="/twitter2.png"
                        alt='Twitter'
                        width={40}
                        height={40}
                        />
                </Link>

                <Link href="https://facebook.com" target='_blank'>
                    <Image
                        src="/facebook.png"
                        alt='Facebook'
                        width={40}
                        height={40}
                        />
                    
                </Link>
            </div>
        </div>
    </nav>
  )
}
