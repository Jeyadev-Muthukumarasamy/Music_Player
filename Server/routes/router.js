const express = require("express");
const multer = require("multer");

// Import controllers
const { signup, login, profile } = require("../controllers/userRoute");
const { checkAuth } = require("../middleware/checkAuth");
const { adminRoute, adminData, adminQuery } = require("../controllers/adminRoute");
const { playlistName, getplayListData } = require("../controllers/playlistnameRoute");
const { playlistData, getSongs } = require("../controllers/playlistRoute");
const { adminPost, getAdminPost } = require("../controllers/queueRoute");
// const queuePost = require("../controllers/queueRoute");




// Import model if needed (uncomment if required)
// const { adminDetails } = require("../model/adminModel");

const router = express.Router();

// Define routes
router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", checkAuth, profile);
router.get("/playlistname/:userId", getplayListData);

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.fields([{ name: "songImage" }, { name: "songFile" }]), adminRoute);
router.post("/jib/:songId/:userId",adminPost)
router.get("/musicdata", adminData);
router.post("/playlistname", playlistName);
router.post("/playlistsongs/:playlistId", playlistData);
router.get("/playlistsongs/:playListId", getSongs);
router.get("/musicdatasearch", adminQuery);
router.get("/getqueue/:userId",getAdminPost);


// router.post("/queue/:songId",queuePost)



module.exports = router;
