const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  songName: {
    type: String,
  },
  singerName: {
    type: String,
  },
  songCategory: {
    type: String,
  },
  songLanguage:{
    type:String
  },
  songImage: {
    type: String, // Change the type to String to store a URL
  },
  songs:{
    type:String
  }

  

});

module.exports = {
  adminDetails: mongoose.model("adminlogs", adminSchema),
};
