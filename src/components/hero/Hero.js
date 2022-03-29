import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='content'>
        <h1>Welcome to Old St. ASCII Shop!</h1>
        <p className='search-text'> Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our selection of ascii faces in an exciting range of sizes and prices.</p>
        <form className='search'>
          <div>
            <input type='text' placeholder='Enter Keyword..'/>
             <button type='submit'>
               <AiOutlineSearch className='icon'/>
             </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hero