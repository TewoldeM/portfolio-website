import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faToolbox, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Nav.css"
import { useState } from 'react';
const Nav = () => {
  const [activeNAV, setactive]=useState('#')
  return (
    <div>
      <nav>
<a href="#" onClick={()=>setactive('#')}  className={activeNAV==='#'?'active':''}> <FontAwesomeIcon icon={faHome} /></a>
<a href="#About"    onClick={()=>setactive('#About')} className={activeNAV==='#About'?'active':''}> <FontAwesomeIcon icon={faInfoCircle} /></a>
<a href="#Exprence" onClick={()=>setactive('#Exprence')} className={activeNAV==='#Exprence'?'active':''}>  <FontAwesomeIcon icon={faBriefcase} /></a>
<a href="#Services" onClick={()=>setactive('#Services')} className={activeNAV==='#Services'?'active':''}> <FontAwesomeIcon icon={faToolbox} /></a>
<a href="#contact"  onClick={()=>setactive('#Contact')} className={activeNAV==='#Contact'?'active':''}><FontAwesomeIcon icon={faEnvelope} /></a>

      </nav>
    </div>
  )
}

export default Nav
