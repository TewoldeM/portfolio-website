import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "./Exprence.css"
import "../../index.css"
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
const Exprence = () => {
  return (
<section id='Exprence'>
  <h5>The Skills I have</h5>
  <h2>My Skills</h2>
<div className='contianer exprence-contianer'>
<div className='contianer__frontend'>
<h3>Frontend Devlopment</h3>
<div className='exprence__content'>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />

<div>
<h4>HTML</h4>
  <small className='text-light'>Experienced</small>
</div>
</article>

<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
<div>
<h4>CSS</h4>
  <small className='text-light'>Intermediate</small>
</div>
</article>

<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
<div>
<h4>Javascript</h4>
  <small className='text-light'>Intermediate</small>
</div>
</article>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
<div>
<h4>React</h4>
  <small className='text-light'>Bootstarp</small>
</div>
</article>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare}className='check' />
<div>
<h4>Tailwind</h4>
  <small className='text-light'>Experienced</small>
</div>
</article>
</div>
</div>
<div className='contianer__backend'>
<h3>Backend Devlopment</h3>
<div className='exprence__content'>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
 <div>
 <h4>PHP</h4>
  <small className='text-light'>Experienced</small>
 </div>
</article>

<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
<div>
<div>
<h4>Nod.js</h4>
  <small className='text-light'>Intermediate</small>
</div>
</div>
</article>

<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
 <div>
 <h4>My sql</h4>
  <small className='text-light'>Intermediate</small>
 </div>
</article>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />
<div>
<h4>Mongo DB</h4>
  <small className='text-light'>Bootstarp</small>
</div>
</article>
<article className='exprence__detail'>
<FontAwesomeIcon icon={faCheckSquare} className='check' />

 <div>
 <h4>Express.js</h4>
  <small className='text-light'>Experienced</small>
 </div>
</article>
</div>
</div>
</div>
</section>
  )
}

export default Exprence
