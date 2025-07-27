import React from 'react'
import exchange_icon from './../../public/exchange_icon.png'
import quality_icon from './../../public/quality_icon.png'
import support_img from './../../public/support_img.png'
const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
     <div>
        <img src={exchange_icon} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We Offer Hassle Free Exchange Policy</p>
     </div>
     <div>
        <img src={quality_icon} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 Days Free Return  Policy</p>
     </div>
     <div>
        <img src={support_img} className='w-12 m-auto mb-5' alt=''/>
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We Provide 24/7 Custmor Support</p>
     </div>
    </div>
  )
}

export default OurPolicy