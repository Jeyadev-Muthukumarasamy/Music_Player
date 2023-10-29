const mongoose = require("mongoose");

const playlistSongSchema = new mongoose.Schema({
  playlistname: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminlogs",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "signuplogs",
  },
  songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "song",
    },
  ],
});

module.exports = {
  playlistSongDetails : mongoose.model("playlistsonglogs",playlistSongSchema)
}
