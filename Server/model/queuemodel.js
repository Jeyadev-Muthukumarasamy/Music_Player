
const mongoose = require("mongoose");


const queueSchema = new mongoose.Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId
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
    queueDetails: mongoose.model("queuelogs", queueSchema),
};
  