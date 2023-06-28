// import { Swiper, SwiperSlide } from 'swiper/react';
// import React from "react";



// // Import Swiper styles
// import 'swiper/css';
// import { Autoplay } from 'swiper';


// import fisrt from '../images/fisrt.jpg';
// import Login from '../images/Login.jpg';
// import screen from '../images/screen.jpg';
// import uix from '../images/uix.jpg';








// // for (let index = 0; index < ImageList.length; index++) {

// //     const element = ImageList[index];

// //     <SwiperSlide> </SwiperSlide>
    
// // }

// export default () => {

    
//   return (

//     <div style={{backgroundColor:'black', height: 500}}>
//     <Swiper

//     modules={[Autoplay]}

//     onAutoplay={true}
//       spaceBetween={10}
//       slidesPerView={3}
//       loop={true}
//       autoplay={{
//           delay: 1000,
//           disableOnInteraction: false
//       }}

      
      

//     >

    


//       <SwiperSlide> <div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}} ></div>
      
//       </SwiperSlide>
//       <SwiperSlide><div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}}>
//     </div> </SwiperSlide>
//       <SwiperSlide><div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}}></div></SwiperSlide>
//       <SwiperSlide><div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}}></div></SwiperSlide>
//       <SwiperSlide><div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}}></div></SwiperSlide>
//       <SwiperSlide><div style={{width:300, height:300, backgroundColor:'white', justifyContent:'center' , marginLeft:500}}></div></SwiperSlide>
     
//       ...
//     </Swiper>


//     </div>
    
//   );
// };


import { useState, useRef, useEffect } from 'react';
import './slider.css';
import Head from './heading';



export default function App1() {
  const slides = [
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile2-kitchen_186x116_in-en._SY116_CB612501062_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/home_186._SY116_CB592083129_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/kitchen186._SY116_CB592083129_.jpg',
    },
    {
      url: 'https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/baugwsept/xcm_banners_tile4-home_186x116_in-en._SY116_CB612501080_.jpg',
    },
  ];
  const values = [
    {
      text:`npm install sequelize sqlite3 `, 
      text1: '# or',
      text2: 'yarn add sequelize sqlite3'
    },
    {
      text: 'import { Sequelize, Model, DataTypes } from sequelize ;',
      text1: ' username: DataTypes.STRING,',
      text2: ' birthday: DataTypes.DATE,'
    },
    {
      text: 'username: janedoe',
      text1: ' birthday: new Date(1980, 6, 20),',
      text2:'const users = await User.findAll();'
    },
    {
      text: 'title: DataTypes.STRING,',
      text1: ' quantity: DataTypes.NUMBER,',
      text2:'await sequelize.sync();'
    },
    {
      text: 'Wish.belongsTo(Wishlist);',
      text1: 'Wishlist.hasMany(Wish);',
      text2:'await user.destroy();'
    },
  ];
  const [currentIndex, SetCurrentIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      currentIndex === values.length - 1
        ? SetCurrentIndex(0)
        : SetCurrentIndex(currentIndex + 1);
    }, 3000);
  }, [currentIndex]);


  return (

 
    <div>

    <div>
    <Head/>
    </div>

    <div  className='maincontent'>
      <p className="slide" style={{paddingTop:8,lineHeight:1.9,paddingLeft:10,fontFamily:'sans-serif'}}>
        {' '}
       
        {values[currentIndex].text }
        <br />
        {values[currentIndex].text1}
        <br  />
        {values[currentIndex].text2}

      </p>
      
      </div>

    </div>
  );
}