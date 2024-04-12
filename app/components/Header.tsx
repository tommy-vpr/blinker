'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaBars, FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'
import NavButton from './NavButton'

import { motion } from 'framer-motion'
import useScreenSize from '@/context/useScreenSize'

const Header = () => {
  const screenSize = useScreenSize();

  const mobileScreen = screenSize.width <= 460
  const midScreen = screenSize.width <= 600

  return (
    <div className='bg-black flex justify-between items-center p-8 sticky top-0 z-10'>
      <motion.div 
      initial={{
        opacity: 0,
        x: -10
      }}
      viewport={{
        once: true
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      className='hidden md:flex items-center gap-2 text-gray-400 text-2xl'>
        <div>
        <FaFacebook className='hover:text-white  transition duration-200 cursor-pointer' />
        </div>
        <div>
        <FaInstagram className='hover:text-white transition duration-200 cursor-pointer' />
        </div>
        <div>
        <FaTwitter className='hover:text-white transition duration-200 cursor-pointer' />
        </div>
      </motion.div>

      <motion.div
        initial={{
          y: -10,
          opacity: 0
        }}
        viewport={{
          once: true
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: {
            delay: .04,
            ease: 'easeOut'
          }
        }}
        className={`${mobileScreen ? 'w-1/6	' : 'w-fit'}`}
      >
        {
          mobileScreen
            ?
            <Link href='/'>
              <Image
                src={'/assets/mobile-logo.png'}
                alt='logo'
                width={80}
                height={80}
                className='object-cover w-full flex-1'
              />
            </Link>
            : <Link href='/'>
                <Image
                  src={'/images/logo.webp'}
                  alt='logo'
                  width={600}
                  height={600}
                  className={`object-cover ${midScreen ? 'w-1/2' : 'w-full'} flex-1`}
                />
              </Link>
        }
      </motion.div>
      
      <motion.div 
      initial={{
        opacity: 0,
        x: 20
      }}
      viewport={{
        once: true
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      className=''>
        <NavButton />
      </motion.div>
    </div>
  )
}

export default Header
