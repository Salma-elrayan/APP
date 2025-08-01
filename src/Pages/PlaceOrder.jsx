import React, { useContext, useState } from 'react';
import Titel from '../Components/Titel';
import CartTotal from './../Components/CartTotal';
import { ShopContext } from '../Context/ShopContext';
import stripe_logo from './../../public/stripe_logo.png'
import razorpay_logo from './../../public/razorpay_logo.png'
const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const{navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/* Form Section */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Titel text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='First name'
          />
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='Last name'
          />
        </div>

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="email"
          placeholder='Email Address'
        />

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="text"
          placeholder='Street'
        />

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='City'
          />
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='State'
          />
        </div>

        <div className='flex gap-3'>
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="number"
            placeholder='Zipcode'
          />
          <input
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
            type="text"
            placeholder='Country'
          />
        </div>

        <input
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="number"
          placeholder='Phone'
        />
      </div>

      {/* Order Summary + Payment Method */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Titel text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex gap-3 flex-col lg:flex-row mt-4'>

            {/* Stripe Option */}
            <div
              onClick={() => setMethod('stripe')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={stripe_logo} alt="Stripe" />
            </div>

            {/* Razorpay Option */}
            <div
              onClick={() => setMethod('razorpay')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={razorpay_logo} alt="Razorpay" />
            </div>

            {/* Cash On Delivery Option */}
            <div
              onClick={() => setMethod('cod')}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full  text-end mt-8 '>
          <button onClick={()=>navigate('/orders')} className='bg-black  text-white px-16  py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

