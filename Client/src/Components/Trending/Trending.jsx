import React, { useContext, useEffect } from "react";
import "./Trending.css";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/Homecontext";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';



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
      <p id="trendingheading">New Releases</p>
  


    
        <Swiper
        
        spaceBetween={0}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={true}
 
        modules={[Navigation, Pagination]}
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