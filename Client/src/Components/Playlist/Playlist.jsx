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
    const [playLists, setPlayLists] = useState([]);
    const [playListSong, setPlayListSong] = useState({
      songName: "",
      singerName: "",
      songCategory: "",
      songLanguage: "",
      songImage: "",
      songs: "",
    });
    const { playListId, setProps, playListProps } = useAudio(AudioContext);
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
          playListId: playlistId,
          Songs: playListProps,
          userId: userId,
        });
        console.log(playListId);
        toast.success("added song successfully");

        console.log(response.Songs);
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
      <>
        <div className="playlistsongscontainer">
          {Object.keys(playLists).map((playlistId) => {
            const playlist = playLists[playlistId];
            return (
              <div key={playlist._id} className="playlist-item">
                <div className="playlist-image">
                  <img
                    src="../public/loginpage.jpg"
                    className="playlistimage"
                    alt="Playlist Image"
                  />
                </div>
                <div className="playlist-details">
                  <div
                    className="playlist-details-container"
                    onClick={() => {
                      handleAddSong(playlist._id);
                      setPlayListId(playlist._id);
                    }}
                  >
                    <p className="playlist-name">{playlist.playlistname}</p>
                    <p className="playlist-songs-count">20 Songs</p>
                  </div>
                </div>
                <div className="more-button">
                  <img
                    src="../public/more.png"
                    id="slsongmore"
                    className="play-icon"
                    alt="More Icon"
                    onClick={() => handleToggle(playlist._id)}
                  />
                  {openMoreButtonForIndex === playlist._id && (
                    <div className="playlist-name-menu-dropdown">
                      <p className="playlist-name-more-dropdown">Delete Playlist</p>
                      <p className="playlist-name-more-dropdown">Change Playlist Name</p>
                      <Link to = "/playlistsongs">
                      <p
                        className="playlist-name-more-dropdown"
                        onClick={() => {
                          console.log("Link clicked");
                          setProps(playlist._id);
                        }}
                      >
                        Open this Playlist
                      </p>

                      </Link>
                     
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <ToastContainer />
      </>
    );
  };

  export default Playlist;
