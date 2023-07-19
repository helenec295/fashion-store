import React, { useState } from 'react'
import { IoIosArrowDown, IoIosHeartEmpty } from 'react-icons/io';
import { IoPersonOutline } from 'react-icons/io5';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import Flag from '../images/flag.png'
import Logo from '../images/logo.jpg'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Cart from './Cart';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products);

  return (
    <div className='navbar'>
      <div className="wrapper">      
        <div className='left'>
          <div className='item'>
            <img src={Flag} height='20' />
            <IoIosArrowDown />
          </div>
          <div className='item'>
            <span>USD</span>
            <IoIosArrowDown />
          </div>
          <div className='item'>
            <Link className='link' to='/products/1' >Dinner Time</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2' >Accessories</Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/3' >Lounging</Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/' >
            <img src={Logo} />
           
          </Link>
        </div>
        <div className='right'>
       
        <div className='item'>
          <Link className='link' to='/' >Homepage</Link>      
        </div>
        <div className='item'>
          <Link className='link' to='/' >About</Link>      
        </div>
        <div className='item'>
          <Link className='link' to='/' >Contact</Link>      
        </div>
        <div className='item'>
          <Link className='link' to='/' >Stores</Link>      
        </div>
        <div className="icons">
          <FiSearch />
          <IoPersonOutline />
          <IoIosHeartEmpty />
          <div className="cart-icon" onClick={()=>setOpen(!open)} >
            <FiShoppingCart />
            <span>{products.length}</span>
          </div>
        </div>
       
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar