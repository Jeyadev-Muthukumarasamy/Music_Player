import React from 'react'
import "./Rightsideplaybar.css"

const Rightsideplaybar = ({rightsidesongs}) => {



  return (
    <div id="rspcontainer">
        <div id="rsptotalcontainer">
            <div id="rspimagecontainer">
                <img src="../public/loginpage.jpg" alt="" id="rspimage" />

            </div>
            <div id="rspdetailscontainer">
                <p id="rspsongname">Halena</p>
                <p id="rspsingername">Harris Maams</p>
                <img src="" alt="" id="rsplike" />
                <img src="" alt="" id="rspmore" />
            </div>
            <div id="rspqueue">
            <img src="../public/loginpage.jpg" alt="" id="rspqueueimage" />
            <p id="rspqueuesongname">Halena</p>
                <p id="rspqueuesingername">Harris Maams</p>

                <p id="rspqueuetitlecard">Next in Queue</p>
                

            </div>
        </div>
      
    </div>
  )
}

export default Rightsideplaybar
