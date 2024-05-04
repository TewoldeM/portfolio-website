import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
<footer>
  <a href='#' className="footer__logo">ZSMC</a>
<ul className='permalinks'>
<li><a href='#'>Home</a></li>
<li><a href='#About'>About</a></li>
<li><a href='#Services'>Services</a></li>
<li><a href='#Portfolio'>Portfolio</a></li>
<li><a href='#Testmonials'>Testmonials</a></li>
<li><a href='#contact'>Contact</a></li>
</ul>
<div className='footer__social'>
  <a href='www.gmail.com'><FontAwesomeIcon icon={faEnvelope}  className="footer__social__icons" /></a>
  <a href='www.facebook.com'> <FontAwesomeIcon icon={faFacebookMessenger}  className="footer__social__icons"  /> </a>
  <a href='www.telegram.com'><FontAwesomeIcon icon={faTelegramPlane}  className="footer__social__icons" /></a>
</div>
<div className='footer_copyright'>
  <small>
    &copy; ZSMC. All right reserved
  </small>
</div>
</footer>
  )
}

export default Footer
