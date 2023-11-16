import { Swiper, SwiperSlide } from 'swiper/react';
import "./Categorynavbar.css"

// Import Swiper styles
import 'swiper/css';

const Categorynavbar = () => {
  return (
    <div id="swipercontainer">
        <Swiper
      spaceBetween={0}
      slidesPerView={5}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      
    
    >
      <SwiperSlide><button className='cnbutton'>Tamil Songs</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>Billie eilish</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>Rahman Hits</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>Sithara</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>Mollywood</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>Arjit Singh</button></SwiperSlide>
      <SwiperSlide><button className='cnbutton'>XXXTentacion</button></SwiperSlide>
      {/* <SwiperSlide><button>slide1</button></SwiperSlide> */}
     
    
      ...
    </Swiper>

    </div>
  
  );
};

export default Categorynavbar