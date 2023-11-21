import React from "react";
import Headers from "../../Components/Headers/Headers";
import Categorynavbar from "../../Components/Categorynavbar/Categorynavbar";
import Trending from "../../Components/Trending/Trending";
import Tamil from "../../Components/Tamil/Tamil";
import Navbar from "../../Components/Navbar/Navbar";
// import Navslider from '../../Components/Navslider/Navslider'
import "./Home.css";
import Queue from "../../Components/Queue/Queue";

const Home = () => {
  return (
    <>
        <div id="homecontainer">

          <div id="navbarhome">
            <Headers />

            {/* <Navbar /> */}
          </div>
          <div id="secondlefthome">
            <div id="slh">
              <Navbar />
              

            </div>
            <div id="sls">
              <Trending />
              <Tamil />

            </div>
            {/* <Trending /> */}
            {/* <Tamil /> */}
          </div>
          <div id="thirdlefthome">
            <Queue />
            
          </div>
          
        </div>
    </>
  );
};

export default Home;
