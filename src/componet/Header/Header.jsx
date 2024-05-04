import React from 'react'
import CTA from './CTA'
import me from '../../assets/mame/christina-wocintechchat-com-8jwCWlsBys8-unsplash.jpg'
import HeaderSocial from './HeaderSocial'
import "./Header.css"
const Header = () => {
  return (
 <header>
  <div className="contianer header__contianer">
   <h5>Hello I'am</h5>
   <h1>Mohamed Abdela</h1>
   <h5 className='text-light'>Full stack developer</h5>
   <CTA/>
   <div className="me">
    <img  src={me} alt='mephoto' />
   </div>
  <a href='#contact' className='scroll__down'>Scroll Down</a>
 <HeaderSocial />
  </div>
 </header>
  )
}

export default Header
