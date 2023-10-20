const { adminDetails } = require("../model/adminModel");
const multer = require("multer");
const { s3uploadv2 } = require("../util/s3service");


const adminData = async(req,res)=>{
  try {
    const musicdata = await adminDetails.find(req.body);
    res.json(musicdata);
    
  } catch (error) {
    console.log("failed to get the data",error);
    
  }
}

const adminRoute = async (req, res) => {
  try {
    console.log("data entered");  
    const songName = req.body.songName;
    const singerName = req.body.singerName;
    const songCategory = req.body.songCategory;
    const songLanguage = req.body.songLanguage;

    const songImage = req.files.songImage;
    const songs = req.files.songFile
    

    if (!songImage) {
      return res.status(400).json("Song image field is missing");
    }
    if(!songs){
      return res.status(400).json(("song not found"));
    }

    const songImageurl = await s3uploadv2(songImage);
    const songurl = await s3uploadv2(songs);
    const location = songImageurl[0].Location;
    const songlocation = songurl[0].Location;

    // Create a new Song object with songImage as a URL string
    const song = new adminDetails({
      songName,
      singerName,
      songCategory,
      songLanguage,
      songImage: location, // Set songImage to the location (URL)
      songs:songlocation
    });

    // Save the song object to MongoDB
    await song.save();

    res.status(200).json("Song uploaded successfully");
  } catch (error) {
    // Return an error response
    res.status(400).json("Failed to upload song: " + error.message);
    console.log(error);
  }
};

module.exports = { adminRoute,adminData };
