import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/streamify-logo.svg"
          width={190}
          height={50}
          alt="Streamify logo"
          className='max-sm:size-120 max-sm:px-2 md:px-3'
          />
      </Link>

      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar