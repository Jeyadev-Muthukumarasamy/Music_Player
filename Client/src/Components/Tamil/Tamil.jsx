import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../Context/Homecontext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Tamil.css";
// import './styles.css';

// import required modules
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
// import Seeall from "../../pages/Home/Seeall/Seeall";

import { Link, useParams } from "react-router-dom";
import { useAudio } from "../../Context/AudioContext";
// import Seeall from "../Seeall/Seeall";

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
        <div id="flextamilcontainer">
          <p className="languageheading">Tamil</p>

          <Link to="/seeall/tamil">
            <p>See All</p>
          </Link>
        </div>

        <div></div>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation, Pagination]}
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
        <div id="flextamilcontainer">
          <p className="languageheading">Malayalam</p>

          <Link to="/seeall/malayalam">
            <p>See All</p>
          </Link>
        </div>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true}
          modules={[Navigation, Pagination]}
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
  );
};

export default Tamil;
