import React from 'react'
import Title from './../Components/Titel';
import NewsletterBox from './../Components/NewLatterBox';
import about_img from './../../public/about_img.png'
const About = () => {
  return (
    <div>
    <div className='text-2xl  text-center pt-8 border-t'>
  <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className='my-10  flex flex-col md:flex-row  gap-16 '>
   <img  className='w-full md:max-w-[450px]' src={about_img} alt="" />
   <div className='flex flex-col justify-center  gap-6 md:w-2/4 text-gray-600'>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quod, optio alias nostrum non tempora labore laborum vitae eius, ipsa cumque fuga quis dolores vel. Alias similique dignissimos reprehenderit fugiat.</p>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, cupiditate? Quibusdam, eos. Adipisci, iure corrupti modi, rem vero aliquam debitis incidunt perferendis neque aut repellat.</p>
   <b className='text-gray-800'>Our Missin</b>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis ipsum, rem accusantium cum magni quisquam aliquid, at neque, quis corporis sed impedit totam? Quod voluptatum nisi possimus! Adipisci voluptatem libero harum magnam reprehenderit temporibus alias soluta quisquam eligendi voluptatum, culpa praesentium dolorum iure incidunt?</p>
   </div>
    </div>
    <div className='text-4xl py-4'>
   <Title text1={'WHY'} text2={'CHOOSE US'}/>
    </div>
    <div className='flex flex-col  md:flex-row  text-sm  mb-20'>
  <div className='border  px-10  md:px-16  py-8  sm:py-20  flex flex-col gap-5'>
  <b>Quality Assurance:</b>
  <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda temporibus id blanditiis, repudiandae laborum corporis at, quae ipsam molestiae dolore nulla ipsum est pariatur.</p>
  </div>
  <div className='border  px-10  md:px-16  py-8  sm:py-20  flex flex-col gap-5'>
  <b>Convnience:</b>
  <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum, nemo accusamus delectus dolores expedita, architecto cumque quaerat deleniti reprehenderit laudantium magni ad sunt fugiat, aperiam molestias repellendus ex unde!</p>
  </div>
  <div className='border  px-10  md:px-16  py-8  sm:py-20  flex flex-col gap-5'>
  <b>Exceptional Customer Service:</b>
  <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ab quaerat eius aliquid amet. Reiciendis atque deserunt vero perspiciatis voluptate?</p>
  </div>
    </div>
    <NewsletterBox/>
    </div>
  )
}

export default About