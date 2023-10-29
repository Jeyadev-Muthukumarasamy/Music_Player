import React from 'react'
import "./Rightsideplaybar.css"
import { useAudio } from '../../Context/AudioContext'

const Rightsideplaybar = () => {

    const {footerSong} = useAudio(AudioContext)

    



  return (
    <div id="rspcontainer">
        <div id="rsptotalcontainer">
            <div id="rspimagecontainer">
                <img src={footerSong.songImage} alt="" id="rspimage" />

            </div>
            <div id="rspdetailscontainer">
                <p id="rspsongname">{footerSong.songName}</p>
                <p id="rspsingername">{footerSong.singerName}</p>
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
