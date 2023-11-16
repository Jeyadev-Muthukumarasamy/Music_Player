import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Playlistinput from "../Playlistinput/Playlistinput";
import { useContext } from "react";
import { PlaylistContext } from "../../Context/Playlistcontext";
import "./Playlist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAudio } from "../../Context/AudioContext";
import Playlistsongs from "../Playlistsongs/Playlistsongs";

const Playlist = () => {
  const [username, setUserName] = useState();
  const [playListInput, setShowPlayListInput] = useState(false);
  const { closeInputBox, setCloseInputBox } = useContext(PlaylistContext);
  const [userId, setUserId] = useState();
  const [openMoreButtonForIndex, setOpenMoreButtonForIndex] = useState(-1);
  const [playListNames, setPlayListNames] = useState([]);
  // const [playListId, setPlayListId] = useState(null); // Initialize playListId as null
  const [playLists, setPlayLists] = useState([]);

  const [playListSong, setPlayListSong] = useState({
    songName: "",
    singerName: "",
    songCategory: "",
    songLanguage: "",
    songImage: "",
    songs: "",
  });
  const {playListId,setProps,playListProps } = useAudio(AudioContext);
  const [nullState, setNullState] = useState();
  const navigate = useNavigate("");

  const API_URL = `http://localhost:3005/api/playlistname/${userId}`;
  const SONGAPI_URL = `http://localhost:3005/api/playlistsongs/${playListId}`;
  

  console.log(playListProps, "this is playlistprops");


  useEffect(() => {
    fetchData();
    fetchPlayListNames();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/api/profile", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setUserId(response.data.message._id);
      setUserName(response.data.message.username);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        window.location.href = "/";
      }
    }
  };

  const fetchPlayListNames = async () => {
    try {
      const playlistresponse = await axios.get(API_URL);
      console.log(playlistresponse, "this is response");
      const playlistNames = playlistresponse.data.playListnames.map(
        (playlist) => playlist.playlistname
      );

      const playlistNamed = playlistresponse.data.playListnames.map(
        (playlist) => playlist
      );

      console.log(playlistNamed, "afwherpaopoj");

      setPlayLists(
        playlistNamed.reduce((acc, playlist) => {
          acc[playlist._id] = playlist;
          return acc;
        }, {})
      );

      setPlayListNames(playlistNames);
    } catch (error) {
      console.log(error, "Error fetching playlist names");
    }
  };

  const handlePlaylistBox = () => {
    setShowPlayListInput(!playListInput);
    setCloseInputBox(false);
  };

  const handleAddSong = async (playlistId) => {
    try {
      const response = await axios.post(SONGAPI_URL, {
        playListId: playlistId, // Use the provided playlistId
        Songs: playListProps, // Send the song data from the state
        userId: userId,
      });
      console.log(playListId);
      toast.success("added song successfully");

      console.log(response.Songs); // This should contain a success message
      // You can add a success toast message here
     
    } catch (error) {
      console.error(error);
      toast.error("Error adding the song");
    }
  };

  const handleToggle = (index) => {
    if (openMoreButtonForIndex === index) {
      setOpenMoreButtonForIndex(-1);
    } else {
      setOpenMoreButtonForIndex(index);
    }
  };




  

 

  return (
    <div id="playlistcontainer">
      <button onClick={handlePlaylistBox}>Create a New Playlist</button>
      <div id="playlistinputnamecontainer">
        {playListInput && <Playlistinput />}
      </div>
      <div id="playlistnametopcontainer">
        <div id="playlistnamescontainer">
          {Object.keys(playLists).map((playlistId) => {
            const playlist = playLists[playlistId];
            return (
              <div key={playlist._id} id="playlistcount">
                <div id="playlistimagee">
                  <img
                    src="../public/loginpage.jpg"
                    id="playlistimage"
                    alt="Playlist Image"
                  />
                </div>
                <div
                  id="playlistdetails"
                  onClick={() => {
                    handleAddSong(playlist._id); // Pass the playlist._id
                    setPlayListId(playlist._id); // Set the playListId here
                  }}
                >
                  <p id="playlistnamename">{playlist.playlistname}</p>
                  <p id="playlistnamesongscount">20 Songs</p>
                </div>
                <div id="playlistnamemore">
                  <img
                    src="../public/more.png"
                    id="slsongmore"
                    className="play-icon"
                    alt="More Icon"
                    onClick={() => handleToggle(playlist._id)}
                  />
                  {openMoreButtonForIndex === playlist._id && (
                    <div id="playlistnamemenudropdown">
                      <p id="playlistnamemoredropdown">Delete Playlist</p>
                      <p id="playlistnamemoredropdown">Change Playlist Name</p>
                   
                        <p
                          id="playlistnamemoredropdown"
                          onClick={() => {
                            console.log("Link clicked");
                            setProps(playlist._id);
                          }}
                        >
                          Open this Playlist
                        </p>
                      
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>


        <ToastContainer />
      </div>
    </div>
  );
};

export default Playlist;
