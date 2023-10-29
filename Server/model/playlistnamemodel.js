const mongoose = require("mongoose");
const playlistnameSchema = new mongoose.Schema({

    playlistname:{
        type:String,
        ref:"adminlogs"
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"signuplogs"
    }


})

module.exports ={
    playlistnameDetails:mongoose.model("playlistnamelogs",playlistnameSchema)

} 