  const { playlistSongDetails } = require("../model/playlistmodel");

  const playlistData = async (req, res) => {
    try {

      const { userId, playListId } = req.body;
      console.log(req.body)

      // Check if the song already exists in the playlist for the specific user
      const playlist = await playlistSongDetails.findOne({
        playListId:playListId,

        
        "Songs.songName": songName,
      });
      console.log(playlist)
     
  
      if (playlist) {
        // Song already exists in the playlist for the user
        console.log("yess")
         res.json({
          message: "Song already exists in the playlist for the user",
        })}
        else{
          res.json({
            message:"Data can be posted"
          })
        }
    //   }else{

    //     const newPlaylist = new playlistSongDetails({
    //       playListId:playListId,
    //       userId:userId,
    //       // Songs: songName // Use the entire Songs object from the request
    //     });
  
    //     console.log(newPlaylist.playListId, "received");
  
    //     // Check if the Songs array is undefined or empty before saving the playlist
    //     if (newPlaylist.Songs !== undefined && newPlaylist.Songs.length > 0) {
    //       await newPlaylist.save();
    //       console.log("received");
    //     } else {
    //       // Reject the request because the Songs array is empty
    //     }
  
    //     res.json({ message: "Song added to the playlist successfully" });

    //   }

    //   // console.log(req.body);

      
    } catch (error) {
     
      res.status(500).json({ message: "Internal server error" });
    }
  };

  const getSongs = async (req, res) => {
    try {
      console.log("mafaprihfaefd");
      const { playListId } = req.params;
      console.log(req.params)
  
      const songs = await playlistSongDetails.find({ playListId });
  
      if (!songs) {
        return res.status(404).json({ message: "Songs not found" });
      }
  
      res.json(songs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  

  

  module.exports = { playlistData,getSongs };
