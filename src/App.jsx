import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Order from './Pages/Order'
import Navbar from './Components/Navbar'
import Fotter from './Components/Fotter'
import SearchBar from './Components/SearchBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true'
  const location = useLocation()
  const hideLayout = location.pathname === '/' || location.pathname === '/login'

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      {!hideLayout && <Navbar />}
      {!hideLayout && <SearchBar />}

      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to='/home' /> : <Login />} />
        <Route path='/login' element={isAuthenticated ? <Navigate to='/home' /> : <Login />} />
        <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to='/' />} />
        <Route path='/collection' element={isAuthenticated ? <Collection /> : <Navigate to='/' />} />
        <Route path='/about' element={isAuthenticated ? <About /> : <Navigate to='/' />} />
        <Route path='/contact' element={isAuthenticated ? <Contact /> : <Navigate to='/' />} />
        <Route path='/product/:productId' element={isAuthenticated ? <Product /> : <Navigate to='/' />} />
        <Route path='/cart' element={isAuthenticated ? <Cart /> : <Navigate to='/' />} />
        <Route path='/place-order' element={isAuthenticated ? <PlaceOrder /> : <Navigate to='/' />} />
        <Route path='/orders' element={isAuthenticated ? <Order /> : <Navigate to='/' />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      {!hideLayout && <Fotter />}
    </div>
  )
}

export default App
