import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../Context/Homecontext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar } from "swiper/modules";
import "./Tamil.css";
import "../Trending/Trending.css";
import Seeall from "../../pages/Home/Seeall/Seeall";
import { Link, useParams } from "react-router-dom";
import { useAudio } from "../../Context/AudioContext";

const Tamil = () => {
  const { musicData } = useContext(HomeContext);


  const filteredTamilData = musicData.filter(
    (music) => music.songLanguage === "tamil"
  );
  const filteredMalayalamData = musicData.filter(
    (music) => music.songLanguage === "malayalam"
  );




 

  return (
    <div>
      <div id="tamilcontainer">
        <Link to="/seeall/tamil">
          tamil link
          <div id="seeall">See All</div>
        </Link>

        <div id="Trendingheading">Tamil</div>

        <Swiper
          modules={[Navigation, Scrollbar]}
          spaceBetween={300}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            490: {
              slidesPerView: 2,
              spaceBetween: 80,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 120,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 260,
            },
          }}
        >
          {filteredTamilData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div id="trendingcards">
                <img src={item.songImage} alt="" id="trendingimages" />
                <h3 id="trendingsingername">{item.songName}</h3>
                <h3 id="trendingsong">{item.singerName}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <div id="malayalamcontainer">
          <div id="Trendingheading">malayalam</div>
          <Link to ="/seeall/malayalam">
            malayalam link
          <div id="seeall">See All</div>


          </Link>

          
          <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={300}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              490: {
                slidesPerView: 2,
                spaceBetween: 80,
              },
              720: {
                slidesPerView: 3,
                spaceBetween: 120,
              },
              850: {
                slidesPerView: 3,
                spaceBetween: 260,
              },
            }}
          >
            {filteredMalayalamData?.map((item, index) => (
              <SwiperSlide key={index}>
                <div id="trendingcards">
                  <img src={item.songImage} alt="" id="trendingimages" />
                  <h3 id="trendingsingername">{item.songName}</h3>
                  <h3 id="trendingsong">{item.singerName}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      
      </div>
    </div>
  );
};

export default Tamil;
