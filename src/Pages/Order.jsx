import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from '../Components/Titel'; 
const Order = () => {
  const { orders, currency } = useContext(ShopContext);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl '>
        <Title text1={'MY'} text2={'ORDER'} />
      </div>
      <div>
        {orders.length === 0 ? (
          <p className='text-gray-500 mt-8'>No orders yet. Place an order first.</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} className='py-6 border-t text-gray-700'>
              <div className='flex flex-col gap-2 mb-4'>
                <p className='text-sm text-gray-500'>Order ID: {order.id}</p>
                <p className='text-sm text-gray-500'>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                <p className='text-sm text-gray-500'>Status: {order.status}</p>
              </div>
              {order.products.map((item, index) => (
                <div
                  key={index}
                  className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
                >
                  <div className='flex items-start gap-6 text-sm'>
                    <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                    <div>
                      <p className='sm:text-base font-medium'>{item.name}</p>
                      <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {item.size}</p>
                      </div>
                    </div>
                  </div>
                  <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                      <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                      <p className='text-sm md:text-base'>Ready To Ship</p>
                    </div>
                    <button className='border px-4 py-2 text-sm font-meduim rounded-sm'>Track Order</button>
                  </div>
                </div>
              ))}
              <div className='text-right mt-4 text-base font-medium'>
                Total: {currency}{order.total.toFixed(2)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Order;
