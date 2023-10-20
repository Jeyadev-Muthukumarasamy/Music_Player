const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  phonenumber: {
    type: String,
    required: true,
    trim: true,
  },
  name:{
    type:String,
    required:true,
    trim:true
  }
});

module.exports = {
    signupDetails : mongoose.model("signuplogs",signupSchema)
}
