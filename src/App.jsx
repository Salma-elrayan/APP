import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Collection from './Pages/Collection'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Order from './Pages/Order';
import Navbar from './Components/Navbar';
import Fotter from './Components/Fotter';
import SearchBar from './Components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/collection' element={<Collection/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product/:productId' element={<Product/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/place-order' element={<PlaceOrder/>}/>
     <Route path='/orders' element={<Order/>}/>
      </Routes>
      <Fotter/>
    </div>
  )
}

export default App