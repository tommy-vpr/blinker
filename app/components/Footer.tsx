'use client'
import useScreenSize from '@/context/useScreenSize'
import { motion } from 'framer-motion'

import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const DynamMapComponent = dynamic(() => import('./MapComponent'), {ssr: false})

const Footer = () => {

  return (
    <motion.div 
        initial={{
            opacity: 0,
            y: 100
        }}
        viewport={{
            once: true
        }}
        whileInView={{
            opacity: 1,
            y: 0,
            transition: {
                delay: .02
            }
        }}
        className='p-8 bg-black w-full flex flex-col gap-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
            <div className='w-full'>
                <form action="" className='flex flex-col gap-2'>
                    <div className='text-green-500 uppercase text-2xl'>
                        Subscribe for latest updates!
                    </div>
                    <div>
                        <input type="text" className='px-2 py-2 w-full' placeholder='Name' />
                    </div>
                    <div>
                        <input type="text" className='px-2 py-2 w-full' placeholder='Email' />
                    </div>
                    <button className='w-1/2 px-6 py-2 border-[1px] border-gray-200 text-gray-200 hover:bg-green-400 
                    hover:border-green-400 hover:text-black duration-200 transition'>Subscribe</button>
                </form>
            </div>
            <div className='text-white'>
                <DynamMapComponent />
            </div>

            
            {/* {
                mobile && (
                <div
                    className='flex items-center gap-2 text-gray-400 text-2xl'>
                    <div>
                        <FaFacebook className='hover:text-white  transition duration-200 cursor-pointer' />
                    </div>
                    <div>
                        <FaInstagram className='hover:text-white transition duration-200 cursor-pointer' />
                    </div>
                    <div>
                        <FaTwitter className='hover:text-white transition duration-200 cursor-pointer' />
                    </div>
                </div>
                )
            } */}
            
        </div>
      <div className='text-gray-300 text-sm font-light text-center mt-8'>
        Copyright © 2022 Hitting Blinkers - All Rights Reserved.
      </div>
    </motion.div>
  )
}

export default Footer
