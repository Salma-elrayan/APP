import React from 'react'
import Title from '../Components/Titel'
import NewsletterBox from '../Components/NewLatterBox'
import contact_img from './../../public/contact_img.png'
const Contact = () => {
  return (
    <div>
      <div className='text-center  text-2xl  pt-10  border-t'>
   <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10  flex flex-col  justify-center  md:flex-row gap-10  mb-28'>
  <img className='w-full md:max-w-[480px]' src={contact_img} alt="" />
  <div className='flex flex-col  justify-center  items-start gap-6'>
<p className='font-semibold text-xl text-gray-600 '>Our Store</p>
<p className='text-gray-500'>5489 Willms Station <br/>Suite 350, Washington, USA</p>
<p className='text-gray-500'>Tel:(415) 555-0135<br/>Email: admin@forever.com</p>
<p className='font-semibold text-xl text-gray-600 ' >Careers at Forever</p>
<p className='text-gray-500'>Learn more about our team and jop openings</p>
<button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs
</button>
  </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact