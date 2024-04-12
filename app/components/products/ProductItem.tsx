import Image from 'next/image'
import React from 'react'

const ProductItem = () => {
  return (
    <div className='flex flex-col relative'>
        <Image
                alt='item'
                // unoptimized={true}
                src='/assets/green-apple-diesel.png'
                width={300}
                height={300}
                className='object-cover h-64 w-full'
            />
        <div className='flex justify-center flex-col items-center w-full gap-2 relative'>
        <div className='rounded-full px-2 text-white w-fit text-[9px] bg-red-700 absolute left-0 -top-2'>
            Hybrid
        </div>
            <h3 className='text-white'>Green Apple</h3>
            <button className='hover:bg-green-500 duration-200 transition bg-green-400 text-white rounded-full w-full p-2'>Buy Now</button>
        </div>
    </div>
  )
}

export default ProductItem
