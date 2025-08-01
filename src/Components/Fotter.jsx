import React from 'react'
import logo from './../../public/logo.png'
const Footer = () => {
  return (
<div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      <div>
        <img src={logo} className='mb-5 w-32' alt="Company Logo" />
        <p className='w-full md:w-2/3 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque et nam temporibus id. Architecto fuga nesciunt amet incidunt libero minima commodi minus aspernatur. Nemo numquam aperiam maiores quae itaque praesentium, unde quisquam sit animi perferendis ea totam rem repellendus.
        </p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-631-365-6985</li>
          <li>contact@foreveryou.com</li>
        </ul>
      </div>
    </div>
    <div>
        <hr/>
        <p className='py-5 text-sm text-center'> Copyright 2025@ forever.com - All Right Reserved.</p>
    </div>
    </div>
  );
};

export default Footer;
