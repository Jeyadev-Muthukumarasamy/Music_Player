import React from 'react';
import './Categorynavbar.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation,Pagination } from 'swiper';
import 'swiper/css/navigation';


export const Categorynavbar = () => {
  return (
    <div className='cncontainer'>
      <Swiper
        // modules={[Navigation,Pagination]}
        spaceBetween={50}
        navigation
        width={null}
        
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
            
          },
          490: {
            slidesPerView: 3, 
            spaceBetween:90
          },
          720:{
            slidesPerView:4,
            spaceBetween:60
          }
        }}
      >
        <SwiperSlide>All</SwiperSlide>
        <SwiperSlide>Trending songs</SwiperSlide>
        <SwiperSlide>Old Songs</SwiperSlide>
        <SwiperSlide>New Songs</SwiperSlide>
        <SwiperSlide>Mood genre</SwiperSlide>
        <SwiperSlide>Billie eilish playlist</SwiperSlide>
        <SwiperSlide>Podcast</SwiperSlide>
        <SwiperSlide>Rock</SwiperSlide>
        <SwiperSlide>Jazz</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categorynavbar;
