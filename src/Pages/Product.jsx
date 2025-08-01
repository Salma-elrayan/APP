import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import RelatedProducts from './../Components/RelatedProducts';
import star_icon from './../../public/star_icon.png'
import star_icon from './../../public/star_dull_icon.png'


const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image?.[0] || '');
        return;
      }
    });
  };

  useEffect(() => {
    setProductData(null);
    setImage('');
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        
       
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%]'>
            {Array.isArray(productData.image) && productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt={productData.name} />
          </div>
        </div>

  
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>
            {productData.name}
          </h1>

         
          <div className='flex items-center gap-1 mt-2'>
            <img src={star_icon} alt="" className="w-3.5" />
            <img src={star_icon} alt="" className="w-3.5" />
            <img src={star_icon} alt="" className="w-3.5" />
            <img src={star_icon} alt="" className="w-3.5" />
            <img src={star_dull_icon} alt="" className="w-3.5" />
            <p className='pl-2'>(122)</p>
          </div>

         
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

        
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {Array.isArray(productData.sizes) && productData.sizes.map((item, index) => (
                <button
                  onClick={() => {
                    setSize(item);
                    console.log('Selected size:', item);
                  }}
                  className={`border py-2 px-4 bg-gray-100 rounded ${
                    item === size ? 'border-orange-500 bg-orange-100' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
            Add to Cart
          </button>

          <hr className='mt-8 sm:w-4/5' />

          
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col  gap-4  border  px-6  py-6 text-sm  text-gray-500'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eos molestiae distinctio voluptatum minima minus exercitationem eaque debitis, qui molestias unde delectus? Voluptas, asperiores quaerat.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, porro! Necessitatibus facere labore exercitationem doloribus, nihil, mollitia commodi autem ducimus nam libero magnam eaque consequuntur.</p>
      </div>
      </div>
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;



