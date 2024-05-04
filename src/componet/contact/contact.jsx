import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookMessenger, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./contact.css"
import "../../index.css"
const Contact = () => {
  return (
<section id="contact">
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className='contianer contact__contianer'>
      <div className='contact__options'>
   <article className='contact__option'> 
   <FontAwesomeIcon icon={faEnvelope} className='contact__option__icons' />
    <h4>Message</h4>
    <h5>+251925233133</h5>
    <a href='www.google.com'>Send Message</a>
   </article>
   <article className='contact__option'> 
   
   <FontAwesomeIcon icon={faTelegramPlane} className='contact__option__icons' /> 
    <h4>Telegram</h4>
    <h5>+251925233133</h5>
    <a href='www.google.com'>Send Message</a>
   </article>
   <article className='contact__option'> 
   <FontAwesomeIcon icon={faFacebookMessenger} className='contact__option__icons'  />
    <h4>Facebook</h4>
    <h5>+251925233133</h5>
    <a href='www.google.com'>Send Message</a>
   </article>
    </div>
    <form action="">
<input type="text"  name="name" placeholder='your full name' required />
<input type="email"  name="email" placeholder='your email' required />
    
  <textarea name='message' rows="7" placeholder='your message' required />
<button type="submit" className="btn btn-primary">Send Message</button>
    </form>
    </div>
</section>
  )
}

export default Contact;
