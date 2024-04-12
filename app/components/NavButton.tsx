'use client'
import { links } from '@/lib/data'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { FaArrowRight, FaBars } from 'react-icons/fa'

const NavButton = () => {
    const pathname = usePathname()

  return (
    <Sheet>
        <SheetTrigger>
            <div className='text-white border-[1px] border-gray-300
                group rounded-md p-2 text-lg group hover:border-[#333] duration-200 transition'>
                <FaBars className='group-hover:scale-110 duration-100 transition' />
            </div>
        </SheetTrigger>
        <SheetContent className="sheet-content sm:w-64">
            <>
                <ul className='header-nav_elements mt-12 flex gap-2 flex-col'>
                    {links.map(link => {
                        const isActive = link.route === pathname

                        return (
                            <li 
                                key={link.route} 
                                className={`${isActive && 'gradient-text'} p-18 
                                    group flex items-center whitespace-nowrap text-dark-700 hover:text-gray-500 duration-150 transition gap-2`}>
                                <FaArrowRight className='text-sm text-gray-500 opacity-0 group-hover:opacity-100 duration-150 transition' />

                                <Link 
                                    className='sidebar-link cursor-pointer uppercase text-lg'
                                    href={link.route}>
                                        {link.name}
                                </Link> 
                            </li>
                        )
                    })}
                </ul>
            </>
        </SheetContent>
    </Sheet>
  )
}

export default NavButton
