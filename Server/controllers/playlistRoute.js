const { playlistSongDetails } = require("../model/playlistmodel");
const { playlistnameDetails } = require("../model/playlistnamemodel");



const playlistData = async(req,res)=>{
    try {
        const {playListId,songId,userId} = req.body;
    const playlist = await playlistnameDetails.find({_id: playListId})

    if(!playlist){
        return res.status(404).json({
            message:"playlist not found"
        })
    }

    const newPlaylist = new playlistSongDetails({
        playlistname: playListId,
        user: userId,
        songs:songId
      
      });
      
      console.log(newPlaylist)
      // Save the new playlist entry
      newPlaylist.save()
        .then(() => {
          console.log("Playlist created and saved.");
        })
        .catch((error) => {
          console.error("Error creating playlist:", error);
        });
      

    // Save the updated playlist
  

    res.json({ message: 'Song added to playlist successfully' });
        
    } catch (error) {

        console.error(error);
        res.status(500).json({ message: 'Internal server error' });

        
    }
}

module.exports ={playlistData}

