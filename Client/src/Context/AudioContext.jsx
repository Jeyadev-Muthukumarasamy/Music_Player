import React, { createContext, useContext, useState } from "react";
import { HomeContext } from "./Homecontext";
import { useNavigate } from "react-router-dom";

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
  const [playListProps,setPlayListProps] = useState({});
  const [playListIdProps, setPlayListIdProps] = useState();
  const [songUpdate, setSongUpdate] = useState();


  const navigate = useNavigate();

  const {musicData} = useContext(HomeContext)


  const playAudio = (src) => {
    setCurrentSong(src)
    setIsPlaying(true)
  
    
  };

  console.log(currentSong)
  
  

  const HandleFooter = (song) => {
    setFooterSong(song);
   
   
  };




  const updateSongDuration = (duration) => {
    setSongDuration(duration);
  };

  const updateCurrentTime = (time) => {
    setCurrentTime(time);
  };

  const addSongProps = (index)=>{
    setPlayListProps(index)

  }

  const setProps = async (id) => {
    console.log(id, "hfpaepo[pkpj");
    await setPlayListIdProps(id); // Wait for the state to be updated
    navigate("/playlistsongs");
  };

  
  const HandlePrevious = () => {
    const currentSongIndex = musicData.findIndex(
      (song) => song.songs === currentSong
    );
    console.log(currentSongIndex);

    if (currentSongIndex === 0) {
      playAudio(musicData[musicData.length - 1].songs);
      HandleFooter(footerSong);
      setSongUpdate(musicData[musicData.length - 1]);
      setFooterSong(musicData[musicData.length - 1]);

      // setFooterSong(musicData[musicData.length - 1]) 
    } else {
      console.log(musicData[currentSongIndex - 1], "on else part");
      playAudio(musicData[currentSongIndex - 1].songs);
      HandleFooter(footerSong);

      setIsPlaying(false);

      setSongUpdate(musicData[currentSongIndex - 1]);
      setFooterSong(musicData[currentSongIndex - 1]);

      // setFooterSong(musicData[musicData.length - 1])
    }
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
      playListProps,
      updateCurrentTime,
      setCurrentSong,
      HandleFooter,
      setIsPlaying,
      setFooterSong,
      addSongProps,
      setProps,
      playListIdProps, // Include playListIdProps in the context
      setPlayListIdProps, // Include the setter function
      footerSong,
      HandlePrevious,
      songUpdate,
      setSongUpdate,
      currentSong,
      setCurrentSong
    }}
  >
    {children}
  </AudioContext.Provider>

  );
};
