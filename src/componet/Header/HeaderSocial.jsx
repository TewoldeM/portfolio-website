import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
  <a href='https://linkedin.com' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
  <a href='https://github.com' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
  <a href='https://facebook.com' target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
      

      
    </div>
  )
}

export default HeaderSocial
