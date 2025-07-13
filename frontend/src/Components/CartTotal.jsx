import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Titel from './Titel';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Titel text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency}{subtotal.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping fee</p>
          <p>{currency}{delivery_fee.toFixed(2)}</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <p>{currency}{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
