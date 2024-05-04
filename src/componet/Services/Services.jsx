import React from 'react'
import "./Service.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "../../index.css"
const Services = () => {
  return (
 <section id="Services">
<h5>What I offer</h5>
<h2>Service</h2>
<div className='contianer services__contianer'>
  <article className='service'>
    <div className='service__head'>
   <h3>UI/UX design</h3>
    </div>
<ul className='service__list'>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>PixelPerfect Designs</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>DesignCraft Studio</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>VisualVibe Solutions</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>ArtisticAura Studio</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>UXfinity Design</p>
  </li>
</ul>
  </article>
  {/*  */}
  <article className='service'>
    <div className='service__head'>
   <h3>Web Development</h3>
    </div>
<ul className='service__list'>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Custom Website Development</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Responsive Web Design</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>E-commerce Development</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>CMS Development</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Web Application Development</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Website Maintenance and Support</p>
  </li>
</ul>
  </article>
  {/*  */}
  <article className='service'>
    <div className='service__head'>
   <h3>Content Creation</h3>
    </div>
<ul className='service__list'>
<li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
<p>Blog Writing and Management</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Copywriting and Editing</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Social Media Content Creation</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Video Scripting and Production</p>
  </li>
  <li><FontAwesomeIcon icon={faCheck} className='service__list-icon' /> 
  <p>Content Strategy and Planning</p>
  </li>
</ul>
  </article>
</div>
 </section>
  )
}

export default Services
