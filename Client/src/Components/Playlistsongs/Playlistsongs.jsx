import React, { useContext, useEffect, useState } from "react";
import "./playlistsongs.css";
import axios from "axios";
import { useAudio, AudioContext } from "../../Context/AudioContext";
import Footer from "../Footer/Footer";

const Playlistsongs = () => {
  const { playListIdProps,setCurrentSong,isPlaying,setIsPlaying,currentSong,HandleFooter,playAudio } = useContext(AudioContext);
  const [playListSongs, setPlayListSongs] = useState([]);

  const SONGAPI_URL = `http://localhost:3005/api/playlistsongs/${playListIdProps}`;

  useEffect(() => {
    handleSongs();
  }, []);

  const handleSongs = async () => {
    try {
      const response = await axios.get(SONGAPI_URL);
      setPlayListSongs(response.data); // Entire response with multiple arrays
      console.log(response.data, "Successful response");
    } catch (error) {
      console.error("Error response:", error.response);
    }
  };





  return (
    <div id="playListSongsContainer">
      {playListSongs.map((array, arrayIndex) => (
        <div key={arrayIndex} className="arrayContainer">
          {array.Songs.map((song, songIndex) => (
            <div key={songIndex} className="songItem">
              <div id="playListSongImageCon tainer">
                <img src={song.songImage} alt="Song Cover" className="playlistSongImage" />
              </div>
              <div id="playListSongDetails">
                <p>{song.songName}</p>
                <p>{song.singerName}</p>
              </div>
              <div id="playListPlayPauseIcon">
              <img
                  src={currentSong === song.songs && isPlaying ? "./public/pause.png" : "./public/play-button.png"}
                  alt="Play"
                  className="icons" onClick={()=>{

                  if(currentSong==song.songs){
                    setIsPlaying(!isPlaying)
                    console.log(song.songs,"dhu mama")
                    
                  }else{
                    setCurrentSong(song.songs)
                    console.log(song.songs,"afpeojpogejop")
                    setIsPlaying(true)
                    playAudio(song.songs)

                    
                  }
                  HandleFooter(song)
                }}/>
              
              </div>
            </div>
          ))}
        </div>
      ))}
       {currentSong && isPlaying && (
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
          )}
          <Footer />
    </div>
  );
};

export default Playlistsongs;
