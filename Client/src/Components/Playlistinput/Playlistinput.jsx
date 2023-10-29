import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Playlistinput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { PlaylistContext } from "../../Context/Playlistcontext";



const Playlistinput = () => {
  const [playListName, setPlayListName] = useState();
  const [userid, setUserId] = useState();
  const POST_API = "http://localhost:3005/api/playlistname";
  const {closeInputBox,ShowInput} = useContext(PlaylistContext)
 

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

  console.log(playListName, "podu mama");

  const handleAddPlaylist = async (event) => {
    event.preventDefault();

    try {
      const responses = await axios.post(POST_API, {
        playlistname: playListName,
        user: userid,
      });
      console.log("successfully created");
      toast.success("Successfully created Playlist")
      console.log(playListName, "machaneys");
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      toast.error("Oops!Couldnt Create a Playlist for You")
    }
  };



  return (
    <div id="playlistinputcontainer">
        <div id="playlistdivcontainer">
       
        <div id="playlistinputdivision">
          {!closeInputBox && 

          
          
           <form onSubmit={handleAddPlaylist}>
             <p id="playlistinputheading"><FontAwesomeIcon icon={faXmark} style={{color: "#0f0f0f",}} id="playlistinputclosebutton" onClick={ShowInput}/>Create A New Playlist</p>
           <input
             type="text"
             name="playlistname"
             placeholder="Enter the Playlist Name"
             onChange={handleChange}
             id="playlistinputbox"
           />
   
           <button id="addtoplaylist" type="submit">
             Create Playlist
           </button>
         </form>
          
          
          }
       
      <ToastContainer />

        </div>

        </div>
        {/* <Playlist closeInputBox={closeInputBox}/> */}


       
      
    </div>
  );
};

export default Playlistinput;
