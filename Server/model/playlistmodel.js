const mongoose = require("mongoose");

const playlistSongSchema = new mongoose.Schema({
  playListId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminlogs",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "signuplogs",
  },
  Songs: [
    {
      songName: String,
      singerName: String,
      songCategory: String,
      songLanguage: String,
      songImage: String,
      songs: String,
    },
  ],
});

module.exports = {
  playlistSongDetails: mongoose.model("playlistsonglogs", playlistSongSchema),
};
