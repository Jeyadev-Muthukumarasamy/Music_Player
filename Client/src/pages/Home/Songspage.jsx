import React from "react";
import "./Songspage.css";
import Seeall from "../../Components/Seeall/Seeall";
import Headers from "../../Components/Headers/Headers";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar"

const Songspage = () => {
  return (
    <>
      <div id="songspagecontainer">
        <div id="songsgridone">
        
          <Headers />
          
        </div>
        <div id="songsgridtwo">
        <Navbar />
          <Seeall />
        </div>
        <div id="songsgridthree"></div>
        {/* <Footer id="footer">
          <Footer />
        </Footer> */}
      </div>
      <Footer id="footer">
        <Footer />
      </Footer>
    </>
  );
};

export default Songspage;
