import React from 'react'
import { Navigation, Pagination } from 'swiper/modules';
import "./Navslider.css"

import { Swiper, SwiperSlide } from 'swiper/react';

const Navslider = () => {
  return (
    <div className='swipercontainer'>
        <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={8}
      navigation
      width={null}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}

    >
      <SwiperSlide>English</SwiperSlide>
<SwiperSlide>Bollywood Songs</SwiperSlide>
<SwiperSlide>Kollywood Songs</SwiperSlide>
<SwiperSlide>Mollywood Songs</SwiperSlide>
<SwiperSlide>Hip-Hop</SwiperSlide>
<SwiperSlide>R&B</SwiperSlide>
<SwiperSlide>Pop</SwiperSlide>
<SwiperSlide>Rock</SwiperSlide>
<SwiperSlide>Jazz</SwiperSlide>
<SwiperSlide>Classical</SwiperSlide>
<SwiperSlide>western</SwiperSlide>
<SwiperSlide>Bollywood Songs</SwiperSlide>
<SwiperSlide>Kollywood Songs</SwiperSlide>
<SwiperSlide>Mollywood Songs</SwiperSlide>
<SwiperSlide>Rock</SwiperSlide>
<SwiperSlide>Jazz</SwiperSlide>
<SwiperSlide>Classical</SwiperSlide>
<SwiperSlide>western</SwiperSlide>
<SwiperSlide>Bollywood Songs</SwiperSlide>
<SwiperSlide>Kollywood Songs</SwiperSlide>
<SwiperSlide>Mollywood Songs</SwiperSlide>

      ...
    </Swiper>
        
      
    </div>
  )
}

export default Navslider
