"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
    <Sheet>
      <SheetTrigger asChild>
        <Image src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="hamburger"
          className="cursor-pointer sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none bg-dark-1">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/icons/streamify-logo.svg"
            width={190}
            height={50}
            alt="Streamify logo"
            className='max-sm:size-50'
            />
        </Link>

        <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full gap-6 flex-col pt-16 text-white">
              {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                
                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn(
                        'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                        {
                          'bg-blue-1': isActive,
                        }
                      )}
                    >
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                      />
                      <p className="font-semibold">
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </section>
          </SheetClose>

        </div>
      </SheetContent>
    </Sheet>

    </section>
  )
}

export default MobileNav