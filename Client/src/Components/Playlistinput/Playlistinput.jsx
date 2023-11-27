import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Playlistinput.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlaylistContext } from "../../Context/Playlistcontext";
import Playlist from "../Playlist/Playlist";


const Playlistinput = () => {
  const [playListName, setPlayListName] = useState();
  const [userid, setUserId] = useState();
  const POST_API = "http://localhost:3005/api/playlistname";
  const { closeInputBox, ShowInput } = useContext(PlaylistContext);

  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3005/api/profile", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      console.log("responseafdkj", response);
      setUserId(response.data.message._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    setPlayListName(event.target.value);
  };



  const handleAddPlaylist = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post(POST_API, {
        playlistname: playListName,
        user: userid,
      });

      console.log(response)
  
      console.log("successfully created");
      toast.success("Successfully created Playlist");
      console.log(playListName, "machaneys");
    } catch (error) {
      if (error.response && error.response.status === 303) {
        // Status code 409 indicates that the playlist already exists
        toast.error("Playlist with the same name already exists");
      } else {
        console.log(error);
        
        toast.error("Oops! Couldn't create a Playlist for You");
      }
    }
  };
  
console.log(playListName)
  return (
    <div id="playlistinputcontainer">
      {/* <div id="playlistinputdivision"> */}
        {!closeInputBox && (
          <form onSubmit={handleAddPlaylist} id="playlistform">
            {/* <p id="playlistinputheading">
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#0f0f0f" }}
                id="playlistinputclosebutton"
                onClick={ShowInput}
              />
              Create A New Playlist
            </p> */}
          

            <input
              type="text"
              name="playlistname"
              placeholder="Enter the Playlist Name"
              onChange={handleChange}
              id="playlistinputbox"
            />
              <br/>

            <button id="addtoplaylist" type="submit">
              Create Playlist
            </button>
          </form>
        )}

        <ToastContainer />
       
       
      </div>

      //  <Playlist closeInputBox={closeInputBox}/> 
    // </div>
  );
};

export default Playlistinput;
