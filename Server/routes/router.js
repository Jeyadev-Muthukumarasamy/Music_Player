const express = require("express");
const { signup, login, profile } = require("../controllers/userRoute");
const { checkAuth } = require("../middleware/checkAuth");
const { adminRoute, adminData } = require("../controllers/adminRoute");
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.get("/profile",checkAuth,profile)
const multer = require("multer");
// const { adminDetails } = require("../model/adminModel");

const storage = multer.memoryStorage();
const upload = multer({ storage });


router.post("/upload", upload.fields([{ name: "songImage" }, { name: "songFile" }]), adminRoute);
router.get("/musicdata",adminData)

module.exports = router;

