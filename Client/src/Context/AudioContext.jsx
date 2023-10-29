import React, { createContext, useContext, useState } from "react";
import { HomeContext } from "./Homecontext";

// import "./Seeall.css";


export const AudioContext = createContext();

export const useAudio = () => {
  return useContext(AudioContext);
};

export const AudioProvider = ({ children }) => {
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState();
  const [songDuration, setSongDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [footerSong, setFooterSong] = useState([]);

  // console.log(currentSong,"default song")
  

  // const playAudio = (src) => {
  //   console.log(src,"idhu src oda value");
  //   if (currentSong === src) {
  //     // If the same song is clicked, toggle play/pause
  //     setIsPlaying(!isPlaying);
  //     console.log(isPlaying,src,"idhu src",currentSong,"play aagadhu yena idhu true");
  //   } else {
  //     // If a different song is clicked, start playing it
  //     setCurrentSong(src);
    
  //     setIsPlaying(true)

      
      
  //     console.log(isPlaying,"idhu src",src,"idhu current song",currentSong,"play aagum yena idhu false");
      
  //   };
  // };

  const playAudio = (src) => {
    setCurrentSong(src)
    setIsPlaying(true)
  
  };
  
  

  const HandleFooter = (song) => {
    setFooterSong(song);
   
   
  };



  const updateSongDuration = (duration) => {
    setSongDuration(duration);
  };

  const updateCurrentTime = (time) => {
    setCurrentTime(time);
  };

  return (
    <AudioContext.Provider
      value={{
        currentSong,
        isPlaying,
        playAudio,
        songDuration,
        updateSongDuration,
        currentTime,
        updateCurrentTime,
        setCurrentSong,
        HandleFooter, 
        setIsPlaying,
        setFooterSong,
    
        footerSong
       
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
