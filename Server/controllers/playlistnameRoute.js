const mongoose = require("mongoose");
const { playlistnameDetails } = require("../model/playlistnamemodel");
const { playlistSongDetails } = require("../model/playlistmodel");

const playlistName = async (req, res) => {
  try {
    const { playListId, user } = req.body;
    console.log(playListId);

    // Check if the playlistname already exists
    const playlists = await playlistSongDetails.find({
      playListId: playListId,
    });
   res.json({
    playlists
   })

    

    if (playlist.Songs.some((song) => song.songName === songName)) {
      console.log("Song is available in playlist");
    } else {
      // Create a new playlist document
      const playlist = new playlistnameDetails({
        playlistname,
        user,
      });
      console.log(playlist);

      // Save the playlist document to the database
      await playlist.save();
      return res.status(200).json({
        message: "Playlist created successfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error creating playlist",
    });
  }
};

const getplayListData = async (req, res) => {
  try {
    const { userId } = req.params;
    const playListnames = await playlistnameDetails.find({ user: userId });
    return res.status(200).json({
      message: "Playlist names retrieved successfully",
      playListnames,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error fetching playlist names",
      error,
    });
  }
};

module.exports = { playlistName, getplayListData };
