import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { useAudio } from "../../Context/AudioContext";
import { AdminContext } from "../../Context/Admincontext";
import { HomeContext } from "../../Context/Homecontext";

const Footer = () => {
  
  const { musicData } = useContext(HomeContext);
  const {footerSong,isPlaying,currentSong,updateCurrentTime,HandleFooter,playAudio} = useAudio(AudioContext)
  // console.log(footerSong,"footer song from context")

  const HandlePrevious = () => {
    const currentSongIndex = musicData.findIndex((song) => song.songs === currentSong);
    console.log(currentSongIndex)
    if (currentSongIndex === 0) {
      console.log(musicData[musicData.length - 1],"on if part");
      playAudio(musicData[musicData.length - 1].songs);
      HandleFooter(footerSong);

    } else {
      console.log(musicData[currentSongIndex - 1],"on else part");
      playAudio(musicData[currentSongIndex - 1].songs );
      HandleFooter(footerSong);
    }
  };

  return (
    <div className="footer">
      <div id="footerone">
        <img src={footerSong.songImage} alt="" id="footerimg" />
        <p id="songname">{footerSong.songName}</p>
        <p id="singername">{footerSong.singerName}</p>
      </div>

      <div id="footertwo">
        <div id="footericons">
          <img
            src="../public/rewind-button.png"
            alt=""
            id="footerpreviousicon"
            onClick={HandlePrevious}
          />
          <img
            src={
              isPlaying
                ? "../public/pause.png"
                : "../public/play-button-arrowhead.png"
            }
            id="footerplayicon"
            alt="Play Icon"
            onClick={() => {
              playAudio(footerSong.songs);
              HandleFooter(footerSong);
            }}
          />
          <img src="../public/next-button.png" alt="" id="footernexticon" />
        </div>
        <div id="footerprogress">{/* Add your progress bar here */}</div>
      </div>
      <audio
        controls
        autoPlay
        onLoadedMetadata={(e) => {
          updateSongDuration(e.target.duration);
        }}
        onTimeUpdate={(e) => {
          updateCurrentTime(e.target.currentTime);
        }}
      >
        <source src={currentSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div id="footerthree">
        <img src="" alt="" id="footervolume" />
      </div>
    </div>
  );
};

export default Footer;
