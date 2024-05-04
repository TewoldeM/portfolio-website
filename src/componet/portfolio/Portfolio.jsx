import React from 'react'
import one from '../../assets/mame/portfolio__image/one.png'
import two from '../../assets/mame/portfolio__image/two.png'
import three from '../../assets/mame/portfolio__image/three.png'
import four from '../../assets/mame/portfolio__image/four.png'
import five from '../../assets/mame/portfolio__image/five.png'
import six from '../../assets/mame/portfolio__image/six2.png'
import "./Portfolio.css"
import "../../index.css"

const data=[
  {
    id:1,
    image:one,
    title:'Crypto Website',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
  {
    id:2,
    image:two,
    title:'UI Design',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
  {
    id:3,
    image:three,
    title:'UI Design',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
  {
    id:4,
    image:four,
    title:'Ecommerce Website',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
  {
    id:5,
    image:five,
    title:'Landing Page for website',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
  {
    id:6,
    image:six,
    title:'Landing page for football website',
    github:'https:github.com',
    demo:'https://dribbble.com/designers?tab=results&search%5Bname%5D=Brand%20designer&search%5BworkType%5D=freelance&searchId='
  },
]




const Portfolio = () => {
  return (
  <section id="Portfolio">
<h5>My Recent Work</h5>
<h2>Portfolio</h2>

<div className='contianer portfolio__contianer'>
{
  data.map(({id,image,title,github,demo})=>{


  return(
     <article key={id} className='portfolio__item' >
     <div className='portfolio__item-image'>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <div className='btns'>
  <a href={github} className="btn">Github</a>
      <a href={demo} target='_blank' className="btn btn-primary">Live Demo</a>
  </div>
     </div>
  
     </article>
  )
  })
}
  


   
</div>
  </section>
  )
}

export default Portfolio
