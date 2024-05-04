import React from 'react'
import ME from '../../assets/mame/good-faces-DSj40n6beGk-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers,faBriefcase,faBook } from '@fortawesome/free-solid-svg-icons';
import "./About.css"
import "../../index.css"
const About = () => {
  return (
<section id="About">
<h5>Get To Know</h5>
<h2>About Me</h2>

<div className="contianer about__contianer">
  <div className='about-me'>  
<div className='mephoto'>
<img  src={ME} alt='aboutimage'/>
</div>
  </div>
  <div className='about__content'>
    <div className='about__cards'>
    <article className='about__card'>
    <FontAwesomeIcon icon={faBriefcase} className='about-icons' />
      <h5>Experience</h5>
      <small>4+ Years Working</small>
    </article>
    <article className='about__card'>
    <FontAwesomeIcon icon={faBriefcase} className='about-icons' />
      <h5>Experience</h5>
      <small>4+ Years Working</small>
    </article>
    <article className='about__card'>
     <FontAwesomeIcon icon={faUsers} className='about-icons' />
      <h5>Cliants</h5>
      <small>200 Worldwide</small>
    </article>
    <article className='about__card'>
    <FontAwesomeIcon icon={faBook} className='about-icons' />
      <h5>Projects</h5>
      <small>50+ Complted</small>
    </article>
    </div>
      <p>I am a highly skilled and experienced web developer with a passion for creating exceptional online experiences. With a meticulous eye for detail, I specialize in crafting visually stunning and user-friendly websites that engage and captivate audiences. My diverse skill set includes proficiency in HTML, CSS, JavaScript, and various content management systems. I am adept at translating client requirements into innovative and functional designs, ensuring seamless navigation and optimal performance across multiple devices.
      </p>
  
<a href='#Contact' className='btn btn-primary'>Let's Talk</a>
  </div>
</div>
</section>

  )
}

export default About
