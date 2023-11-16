import React from "react";
import Headers from "../../Components/Headers/Headers";
import Categorynavbar from "../../Components/Categorynavbar/Categorynavbar";
import Trending from "../../Components/Trending/Trending";
import Tamil from "../../Components/Tamil/Tamil";
import Navbar from "../../Components/Navbar/Navbar";
// import Navslider from '../../Components/Navslider/Navslider'
import "./Home.css";

const Home = () => {
  return (
    <>
      <div id="homecontainer">
        <div id="homenavbar">
          <Navbar />
        </div>
        <div id="category">
          <div id="headernavbar">
            <Headers />
          </div>

          <div id="headercategorynavbar">
            <Categorynavbar />
            {/* <Trending className="trendingsidebar" /> */}
          </div>
      
        </div>
      </div>

      {/* 
    // <Tamil className="tamilsidebar" />
    // <Navslider /> */}
    </>
  );
};

export default Home;
