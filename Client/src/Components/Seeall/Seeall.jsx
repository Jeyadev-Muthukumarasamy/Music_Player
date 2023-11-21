import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { HomeContext } from "../../Context/Homecontext";
import { useAudio } from "../../Context/AudioContext";
import Headers from "../Headers/Headers";
import Footer from "../Footer/Footer";
import Rightsideplaybar from "../Rightsideplaybar/Rightsideplaybar";
import Playlist from "../Playlist/Playlist";
import Songs from "../Songs/Songs";
import "./Seeall.css";

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
    playListProps,
  } = useAudio(); // Update this line with the correct hook

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

  const navigate = useNavigate();

  const handleToggle = (index) => {
    if (openMoreButtonForIndex === index) {
      setOpenMoreButtonForIndex(-1);
    } else {
      setOpenMoreButtonForIndex(index);
    }
  };

  const onLike = () => {
    // Add logic for liking the song
  };

  const onDislike = () => {
    // Add logic for disliking the song
  };

  return (
    <>
      {languageData.map((song, index) => (
        <div key={index} id="seeallcontainerone">
          <div id="slimagegrid">
            <img src={song.songImage} id="slsongimage" alt="Song Image" />
          </div>

          <div id="slsongdetails">
            <p id="slsongsongname">{song.songName}</p>
            <p id="slsongsingername">{song.singerName}</p>
          </div>
          <div id="slsonggridthree">
            <p id="slsongplaypauses">
              <img
                src={
                  currentSong === song.songs && isPlaying
                    ? "../public/pause.png"
                    : "../public/play-button-1.png"
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
            </p>
            <FontAwesomeIcon
              icon={faHeart}
              size="2xl"
              style={{ color: "#d11010" }}
              onClick={onLike}
              id="slsonglike"
            />
            <img
              src="../public/more.png"
              id="slsongmore"
              alt="More Icon"
              onClick={() => {
                handleToggle(index);
                addSongProps(song);
              }}
            />
            {openMoreButtonForIndex === index && (
              <div id="pmenudropdown">
                <p id="moredropdown" onClick={() => navigate("/playlist")}>
                  Add to Playlist
                </p>
                <p id="moredropdown">Like Song</p>
                <p id="moredropdown">Add to Queue</p>
              </div>
            )}
          </div>
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
    </>
  );
};

export default Seeall;
