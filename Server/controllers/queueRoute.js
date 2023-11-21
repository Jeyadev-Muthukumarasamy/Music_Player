const express = require("express");
const router = express.Router();
const { adminDetails } = require("../model/adminmodel");
const { queueDetails } = require("../model/queuemodel");

const adminPost = async (req, res) => {
  try {
    const { songId, userId } = req.query;
    

    // Find the song by ID
    const songToAdd = await adminDetails.findOne({ _id: songId });

    console.log(songToAdd)

    if (!songToAdd) {
      return res.status(404).json({ message: "Song not found" });
    }

    // Find or create the user's queue
    let userQueue = await queueDetails.findOne({ userId });
    console.log(userQueue)

    if (!userQueue) {
      userQueue = new queueDetails({
        userId:userId,
        Songs: [songToAdd], // Add the entire song details to the Songs array
      });
      
      await userQueue.save();
      console.log(userQueue.userId)
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

const getAdminPost = async(req,res)=>{
  console.log("entered")
  
  try {
    const userId  = req.query;
    console.log(req.query)
    // Find the user's queue
    const userQueue = await queueDetails.findOne({ _id:userId });
    if(!userQueue){
      console.log("found")
    }
    console.log(userQueue)

    // if (!userQueue) {
    //   return res.status(404).json({ message: 'User queue not found' });
    // }

    // // Retrieve all songs in the user's queue
    // const songsInQueue = userQueue.Songs;

    // res.status(200).json({ message: 'Songs in the user\'s queue', songs: songsInQueue });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }

}
module.exports = { adminPost,getAdminPost };
