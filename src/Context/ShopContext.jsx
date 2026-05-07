import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom";
export const ShopContext = createContext();
const ShopContextProvider =(props)=>{
    const currency ='$';
    const delivery_fee=10;
    const [search,setSearch]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [cartItems,setCartItems]=useState({});
    const [orders,setOrders]=useState([]);
    const navigate =useNavigate()
    
    // Load user orders on component mount
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user?.email) {
        fetch(`http://localhost:5000/api/orders/${user.email}`)
          .then(res => res.json())
          .then(data => setOrders(data))
          .catch(error => console.error('Error loading orders:', error));
      }
    }, []);
    
    const addToCart=async(itemId,size)=>{
        if (!size) {
     toast.error('Select product Size');
     return;            
        }
    let cartData=structuredClone(cartItems);
    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId] [size]+=1;
        }
        else{
            cartData[itemId][size]=1
        }
    }
    else{
        cartData[itemId]={};
        cartData[itemId][size]=1;
    }
    setCartItems(cartData);
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if (cartItems[items][item]>0) {
                    totalCount+=cartItems[items][item];
                }
            }
        }
        return totalCount;
    }

    const updateQuantity=async(itemId,size,quantity)=>{
   let cartData =structuredClone(cartItems);
   cartData[itemId][size]=quantity;
   setCartItems(cartData);
    }
  const getCartAmount=()=>{
  let totalAmount=0;
  for(const items in cartItems){
    let itemInfo= products.find((product)=> product ._id=== items);
    for(const item in cartItems[items]){
        if (cartItems[items][item]>0) {
            totalAmount+=itemInfo.price* cartItems[items][item];
        }
    }
  }
  return totalAmount;
  }

  const placeOrder=async(deliveryInfo)=>{
    if (Object.keys(cartItems).length === 0) {
      toast.error('Your cart is empty');
      return false;
    }

    const orderProducts = Object.entries(cartItems).flatMap(([productId, sizes]) => {
      const productInfo = products.find((product) => product._id === productId);
      if (!productInfo) return [];
      return Object.entries(sizes).map(([size, quantity]) => ({
        ...productInfo,
        size,
        quantity,
      }));
    });

    try {
      const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
      if (!userEmail) {
        toast.error('Please login first');
        return false;
      }

      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: orderProducts,
          total: getCartAmount(),
          deliveryInfo,
          userEmail
        })
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return false;
      }

      setOrders((prev) => [data.order, ...prev]);
      setCartItems({});
      toast.success('Order placed successfully');
      return true;
    } catch (error) {
      toast.error('Error placing order: ' + error.message);
      return false;
    }
  };

    const value={
  products,currency,delivery_fee,
  search,setSearch,showSearch,setShowSearch,
  cartItems,addToCart,
  getCartCount,updateQuantity,
  getCartAmount,navigate,orders,placeOrder
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;