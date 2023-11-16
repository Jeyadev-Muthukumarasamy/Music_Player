const express = require("express");
const router = express.Router();
const { adminDetails } = require("../model/adminmodel");
const { queueDetails } = require("../model/queuemodel");

const adminPost = async (req, res) => {
  try {
    const { songId, userId } = req.params;

    // Find the song by ID
    const songToAdd = await adminDetails.findOne(songId);
    console.log(songToAdd)

    if (!songToAdd) {
      return res.status(404).json({ message: "Song not found" });
    }

    // Find or create the user's queue
    let userQueue = await queueDetails.findOne({ userId });
    console.log(userQueue)

    if (!userQueue) {
      userQueue = new queueDetails({
        userId,
        Songs: [songToAdd], // Add the entire song details to the Songs array
      });
      console.log(userQueue)
      await userQueue.save();
    } else {
      // Check if the song is already in the queue
      const isSongInQueue = userQueue.Songs.some((song) => song._id.equals(songToAdd._id));
      if (!isSongInQueue) {
        userQueue.Songs.push(songToAdd);
        await userQueue.save();
      }
    }

    res.status(200).json({ message: "Song added to the queue successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { adminPost };
