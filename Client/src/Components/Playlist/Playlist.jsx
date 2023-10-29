import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Playlistinput from "../Playlistinput/Playlistinput";
import { useContext } from "react";
import { PlaylistContext } from "../../Context/Playlistcontext";
import "./Playlist.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Playlist = () => {
  const [username, setUserName] = useState();
  const [playListInput, setShowPlayListInput] = useState(false);
  const { closeInputBox, setCloseInputBox } = useContext(PlaylistContext);
  const [userId, setUserId] = useState();
  const [openMoreButtonForIndex, setOpenMoreButtonForIndex] = useState(-1);
  const [playListNames, setPlayListNames] = useState([]);
  const [playListId, setPlayListId] = useState([]);
  const [playLists, setPlayLists] = useState([]);


  const navigate = useNavigate("");
  const API_URL = `http://localhost:3005/api/playlistname/${userId}`;
  const SONGAPI_URL = `http://localhost:3005/api/playlistsongs/${playListId}`

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
      const playlistNames = playlistresponse.data.playListnames.map(
        (playlist) => playlist.playlistname
      );
      const playlistNamed = playlistresponse.data.playListnames.map(
        (playlist) => playlist
      );
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

  const handleToggle = (index) => {
    if (openMoreButtonForIndex === index) {
      setOpenMoreButtonForIndex(-1);
    } else {
      setOpenMoreButtonForIndex(index);
    }
  };

  const handlePlaylistClick = (playlistId) => {
    setPlayListId(playlistId);
  };
  console.log(playListId)

  const addSongPlaylist = async()=>{
    try{
      const songResponse = await axios.post(SONGAPI_URL,{
        playListId:playListId,
        userId:userId

        
  
      
      })
      console.log("successfullt posted")
      console.log()
      toast.success("Successfully created Playlist")
     
      

    }catch(error){
      console.log(error)
      toast.error("error adding song")

    }
    
  }

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
                    handlePlaylistClick(playlist._id);
                    addSongPlaylist()
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
                      <p id="playlistnamemoredropdown">Open this Playlist</p>
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
