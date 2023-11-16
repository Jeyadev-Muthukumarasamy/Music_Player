import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { HomeContext } from "../../../Context/Homecontext";
import { AudioContext, useAudio } from "../../../Context/AudioContext";
import "./Seeall.css";
import Songs from "../../../Components/Songs/Songs";
import Headers from "../../../Components/Headers/Headers";
import Footer from "../../../Components/Footer/Footer";
import Rightsideplaybar from "../../../Components/Rightsideplaybar/Rightsideplaybar";
import Playlist from "../../../Components/Playlist/Playlist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";




const Seeall = () => {
  const { language } = useParams();
  const { musicData } = useContext(HomeContext);

  const {
    currentSong,
    isPlaying,
    playAudio,
    songDuration,
    updateSongDuration,
    currentTime,
    updateCurrentTime,
    setCurrentTime,
    footerSong,
    HandleFooter,
    setIsPlaying,
    setCurrentSong,
    addSongProps,
    playListProps
  } = useAudio(AudioContext);

  const [languageData, setLanguageData] = useState([]);

  const [openMoreButtonForIndex, setOpenMoreButtonForIndex] = useState(-1);
  const [rsbsong, setRsbsong] = useState([]);
 

  useEffect(() => {
    if (language === "tamil") {
      setLanguageData(
        musicData.filter((music) => music.songLanguage === "tamil")
      );
    } else if (language === "malayalam") {
      setLanguageData(
        musicData.filter((music) => music.songLanguage === "malayalam")
      );
    }
  }, [language]);

  const navigate=useNavigate()

  const handleToggle = (index) => {
    console.log(openMoreButtonForIndex);
  
  console.log(index);

    if (openMoreButtonForIndex === index) {
      
      setOpenMoreButtonForIndex(-1);
    } else {
      // If a different song's "more" button is clicked, open it and close the previous one
      setOpenMoreButtonForIndex(index);
    }
  };


  console.log(playListProps,"this is playlist props");

  const onLike = () =>{

  }

  const onDislike = () =>{

  }


  
  
  return (
    <>
      <div >
        {/* <div>
          <Headers />
        </div>

        <div>
          <Rightsideplaybar className="rspcsa" />
        </div> */}

        <div>
          <Songs className="songsba" />
          <div id="slsongcontainer" className="songcontainer">
            {languageData.map((song, index) => (
              <div key={index}>
                <div id="slsongcontainerimage">
                  <img src={song.songImage} id="slsongimage" alt="Song Image" />
                </div>
                <div id="slsongdetails">
                  <p id="slsongsingername">{song.singerName}</p>
                  <p id="slsongsongname">{song.songName}</p>
                  <p id="slsongplaypauses">
                    <img
                      src={
                        currentSong === song.songs && isPlaying
                          ? "../public/pause.png"
                          : "../public/play-button-arrowhead.png"
                      }
                      id="slsongplaypause"
                      alt="Play Icon"
                      onClick={() => {
                        if (currentSong === song.songs) {  
                          setIsPlaying(!isPlaying);
                        } else {
                          setCurrentSong(song.songs);
                          setIsPlaying(true);
                        }
                        HandleFooter(song);
                      }}
                    />
                    <div id="seeAllLikes">
                    <FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#d11010",}} onClick={onLike}/>
                    <FontAwesomeIcon icon={faHeart} size="2xl" style={{color: "#000000",}} onClick={onDislike}/>
                    <div id="morebutton">
                      
                    <img
                      src="../public/more.png"
                      id="slsongmore"
                      className="play-icon"
                      alt="More Icon"
                      onClick={() => {
                        handleToggle(index);
                        addSongProps(song);
                      }}
                    />  
                    {openMoreButtonForIndex === index && (
                      <div className="dropdown-menu" id="pmenudropdown">
                      
                        <p id="moredropdown" onClick={()=>navigate("/playlist")}>Add to Playlist</p>

                        
                        
                        <p id="moredropdown">Like Song</p>
                        <p id="moredropdown">Add to Queue</p>
                      </div>
                    )}


                    </div>



                    </div>
                    
              

               
                  
                  </p>
                </div>
                <div id="slsongplayfurther">
                  {/* Add additional details here if needed */}
                </div>
              </div>
            ))}
          </div>

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
        </div>
        <p>duration: {songDuration}</p>

        <Footer footerSong={footerSong} />
      </div>

      <Rightsideplaybar rightsidesongs={rsbsong} />

      
    </>
  );
};

export default Seeall;
