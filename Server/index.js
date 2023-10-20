    const express = require("express");
    const app = express();
    const cors = require("cors");
    const signuprouter = require("./routes/router");
    const connectDB = require("./db/db");
    require('dotenv').config();
    app.use(cors());
    app.use(express.json());
    const PORT = 3005;
    // const multer = require("multer");
    connectDB();





    app.use("/api",signuprouter)



    app.listen(PORT,()=>{
        console.log("server started runnning in 3005")
    })