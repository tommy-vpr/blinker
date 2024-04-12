'use client'
import React from 'react'
import ProductItem from './ProductItem'
import { products } from '@/lib/data'

import { animate, delay, motion } from 'framer-motion'

const fadeinVariant = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * .1
        }
    })
}

const Products = () => {
  return (
    <div className='grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product, i) => (
        <motion.div
            key={i}
            variants={fadeinVariant}
            initial='initial'
            whileInView='animate'
            viewport={{
                once: true
            }}
            custom={i}
        >
            <ProductItem />
        </motion.div>
      ))}
    </div>
  )
}

export default Products
