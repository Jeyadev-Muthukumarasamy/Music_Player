  const { playlistSongDetails } = require("../model/playlistmodel");

  const playlistData = async (req, res) => {
    try {
      const { playListId, Songs, userId } = req.body;

      const playlist = await playlistSongDetails.find({ _id: playListId });

      if (!playlist) {
        return res.status(404).json({
          message: "playlist not found",
        });
      }

      console.log(req.body);

      const newPlaylist = new playlistSongDetails({
        playListId:playListId,
        userId:userId,
        Songs: Songs // Use the entire Songs object from the request
      });

      console.log(newPlaylist.playListId, "received");

      // Check if the Songs array is undefined or empty before saving the playlist
      if (newPlaylist.Songs !== undefined && newPlaylist.Songs.length > 0) {
        await newPlaylist.save();
        console.log("received");
      } else {
        // Reject the request because the Songs array is empty
      }

      res.json({ message: "Song added to the playlist successfully" });
    } catch (error) {
      console.error(error);
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
