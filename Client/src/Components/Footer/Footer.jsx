import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import { useAudio } from "../../Context/AudioContext";
import { AdminContext } from "../../Context/Admincontext";
import { HomeContext } from "../../Context/Homecontext";
import Rightsideplaybar from "../Rightsideplaybar/Rightsideplaybar";

const Footer = () => {
  const {
    setCurrentSong,
    currentSong,
    updateCurrentTime,
    playAudios,
    playAudio,
    setIsPlaying,
    setFooterSong,
    HandlePrevious,
    songUpdate,
    HandleFooter,
  } = useAudio(AudioContext);

  const { footerSong, isPlaying } = useAudio(AudioContext);

  console.log(footerSong, "this is footer");

  return (
    <>
      <div id="footercontainer">
        <div id="footerimage">
          <img src={footerSong.songImage} alt="" id="footerimg" />
        </div>

        <div id="footersongdetails">
          <div id="footersongdetailsflex">
            <p id="footersongname">{footerSong.songName}</p>
            <p id="footersingername">{footerSong.singerName}</p>
          </div>
          <div id="footersongtwoflex">
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
                if (currentSong === songUpdate.songs) {
                  // If the same song is clicked, toggle play/pause
                  setIsPlaying(!isPlaying);
                } else {
                  // If a different song is clicked, start playing it
                  setCurrentSong(songUpdate.songs);
                  setIsPlaying(true);
                }
                HandleFooter(song);
              }}
            />
            <img src="../public/next-button.png" alt="" id="footernexticon" />
          </div>
        </div>

        <div id="footerthreeicons">
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
            <source src={footerSong.songs} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          <img src="" alt="" id="footervolume" />

          {/* <Rightsideplaybar songrsb={songUpdate} />  */}
        </div>
      </div>
    </>
  );
};

export default Footer;
