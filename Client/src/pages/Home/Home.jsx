import React from 'react'
import Headers from '../../Components/Headers/Headers'
import Categorynavbar from '../../Components/Categorynavbar/Categorynavbar'
import Trending from '../../Components/Trending/Trending'
import Tamil from '../../Components/Tamil/Tamil'
import Navbar from '../../Components/Navbar/Navbar'
// import Navslider from '../../Components/Navslider/Navslider'





const Home = () => {
  return (
    <div>
        <Headers className="headerpagesidebar"/> 
        <Navbar />
         <Categorynavbar className="cnsidebar"/> 
        <Trending className="trendingsidebar"/>
        <Tamil className="tamilsidebar"/>
        {/* <Navslider /> */}
        
        
      
    </div>
  )
}

export default Home
