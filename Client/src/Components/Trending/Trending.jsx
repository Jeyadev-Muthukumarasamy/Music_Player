import React, { useContext, useEffect } from "react";
import "./Trending.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { Navigation,Scrollbar } from "swiper/modules";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/Homecontext";




const Trending = () => {

  const {musicData} = useContext(HomeContext)
  
  
  const checking =()=>{
    try{
      if (!musicData) {
        console.log("musicData is not  here", musicData);
      } else {
        console.log(musicData, "musicData");
      }
    }catch(error){
      console.log(error,"afdkjb")
    }
  }

  useEffect(()=>{
    checking()
  },[])


  return (
    <div id="trendingcontainer">
      <div id="Trendingheading">Trending</div>
    
      <div id="seeall">See All</div>


    
      <Swiper
      
       modules={[Navigation, Scrollbar]}
       spaceBetween={200}
       slidesPerView={6}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       breakpoints={{
         320: {
           slidesPerView: 1,
           spaceBetween: 40,
         },
         390:{
          slidesPerView:1,
          spaceBetween: 40,
          
         },
         490: {
           slidesPerView: 2 ,
           spaceBetween: 70,
         },

         590:{
          spaceBetween: 80

         },

         720:{
          slidesPerView:3,
          spaceBetween:80,
          
         },
         850: {
           slidesPerView: 3,
           spaceBetween: 260,
         }
       }}
     >

      
        {musicData?.map((item, index) => (
          <SwiperSlide key={index}>
            <div id="trendingcards">
              <img src={item.songImage} alt="" id="trendingimages" />
              <h3 id="trendingsingername">{item.songName}</h3>
              <h3 id="trendingsong">{item.singerName}</h3>
              {/* <h3 id="song">{item.songs}</h3>    */}
            </div>
            </SwiperSlide>
         
        ))}
        
      </Swiper>
    </div>
  );
};



export default Trending;