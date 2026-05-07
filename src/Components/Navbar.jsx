import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { setShowSearch, getCartCount } = useContext(ShopContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false')
    navigate('/')
  }

  return (
    <nav className='relative flex items-center justify-between py-5 font-medium'>
      <Link to='/home' className='text-xl font-semibold'>
        Shop
      </Link>

      <ul className='hidden sm:flex gap-6 text-sm text-gray-700'>
        <NavLink to='/home' className='hover:text-black'>HOME</NavLink>
        <NavLink to='/collection' className='hover:text-black'>COLLECTION</NavLink>
        <NavLink to='/about' className='hover:text-black'>ABOUT</NavLink>
        <NavLink to='/contact' className='hover:text-black'>CONTACT</NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <button type='button' onClick={() => setShowSearch(true)} className='text-sm'>
          Search
        </button>

        <Link to='/cart' className='relative text-sm'>
          Cart
          <span className='absolute -right-2 -bottom-2 w-4 h-4 rounded-full bg-black text-white text-[8px] text-center leading-4'>
            {getCartCount()}
          </span>
        </Link>

        <button type='button' onClick={logout} className='text-sm'>
          Logout
        </button>

        <button type='button' onClick={() => setMenuOpen((prev) => !prev)} className='text-sm sm:hidden'>
          Menu
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full right-0 z-10 w-48 rounded bg-white p-4 shadow-lg sm:hidden'>
          <NavLink to='/home' onClick={() => setMenuOpen(false)} className='block py-2 text-sm text-gray-700 hover:text-black'>HOME</NavLink>
          <NavLink to='/collection' onClick={() => setMenuOpen(false)} className='block py-2 text-sm text-gray-700 hover:text-black'>COLLECTION</NavLink>
          <NavLink to='/about' onClick={() => setMenuOpen(false)} className='block py-2 text-sm text-gray-700 hover:text-black'>ABOUT</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)} className='block py-2 text-sm text-gray-700 hover:text-black'>CONTACT</NavLink>
          <button onClick={() => { logout(); setMenuOpen(false) }} className='mt-2 w-full text-left text-sm text-gray-700 hover:text-black'>LOGOUT</button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
