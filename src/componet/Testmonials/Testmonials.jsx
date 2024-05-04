import React from 'react';
import "./Testmonials.css"
import '../../index.css'
import black from '../../assets/mame/testmonial/black.jpg'
import whiteG from '../../assets/mame/testmonial/whiteglass.jpg'
import whiteO from '../../assets/mame/testmonial/whiteold.jpg'
import whiteC from '../../assets/mame/testmonial/chana.jpg'
import { Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
{
  image:black,
  name:'abe',
  review:'I am extremely impressed with the outstanding service provided. The team went above and beyond to ensure my complete satisfaction. Their professionalism, attention to detail, and top-notch quality work exceeded my expectations. I wholeheartedly recommend their services!'
},
{
  image:whiteG,
  name:'kebe',
  review:'Working with ZSMC on our web design was a game-changer. Their ability to create intuitive and visually striking designs has set our website apart from the competition'
},

{
  image:whiteC,
  name:'mohamed',
  review:'The web designs crafted by ZSMC are a perfect blend of creativity and usability. They have a keen eye for detail and deliver visually stunning websites.!'
},

{
  image:whiteO,
  name:'jon',
  review:'With ZSMC web design expertise, our online presence has never looked better. Their innovative designs have captured the essence of our brand'
},

{
  image:whiteC,
  name:'jemal',
  review:'The web designs created by ZSMC are simply breathtaking. Their ability to blend aesthetics and functionality is truly remarkable.'
},

]

const Testmonials = () => {
return(
  <section id="Testmonial">
  <h5>Review from Cliants</h5>
  <h2>Testmoniala</h2>
  <Swiper className='contianer testmonial__contianer'
  
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
  >
  {
    data.map(({image,name,review},index) =>{
return(
  <SwiperSlide className='testmonial' key={index}>
  <div className='cliant__avater'>
  <img src={image} alt='do' />
  </div>
  <h5 className='cliant__name'>{name}</h5>
  <small className='cliant__review'>{review}</small>     
  </SwiperSlide>

)
  
})
  }
  </Swiper>
   </section>
)
};

export default Testmonials;