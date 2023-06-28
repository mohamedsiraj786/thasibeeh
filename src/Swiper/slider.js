import { Swiper, SwiperSlide } from 'swiper/react';

import login from '../images/logo.svg';
import image1 from '../images/seq1.png';
import './slider.css';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper';

export default () => {
  return (
    <div className='sliderparts'>
    <Swiper

    modules={[Autoplay]}

    onAutoplay={true}
      spaceBetween={50}
      slidesPerView={2.5}
      loop={true}
      autoplay={{
          delay: 1000,
          disableOnInteraction: true
      }}

      
      

    >

   
      <SwiperSlide> <img className='slides' src={login}/></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/bitovi-logo.png'} /></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/secure-coders.png'} /></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/logo-snaplytics-green.png'} /></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/uphold-logo.svg'} /></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/bitovi-logo.png'} /></SwiperSlide>
      <SwiperSlide><img className='slides' src={'https://sequelize.org/img/walmart-labs-logo.png'} /></SwiperSlide>
     
      ...
      </Swiper>
      </div>
 
    
  );
};


