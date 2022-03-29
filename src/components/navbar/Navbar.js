import React, { useState } from 'react';
import {HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaRegTimesCircle} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import '../navbar/Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span>¯\_(ツ)_/¯ </span>Old St E-Commerce</h1>
            <button className='btn'>Go to Shop!</button>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>Contact</li>
        <li><AiOutlineShoppingCart className='icon'/></li>
      </ul>        
    <div className='hamburger' onClick={handleClick}>
      {click ? <FaRegTimesCircle className='icon'/> : <HiOutlineMenuAlt4 className='icon'/>} 
      </div>
        </div>
    </div>
  )
}

export default Navbar