const { signupDetails } = require("../model/signupModel");
const { generatehashpassword } = require("../util/bcrypt"); // Removed the custom compareHash import
const { generateAccessToken } = require("../util/jwt");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    const user = await signupDetails.findOne({ username });
    if (!user) {
      return res.json({
        message: "username/password not found",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password); // Using bcrypt.compare directly
    console.log(user.password, "user.password");
    console.log(validPassword, "valid password");

    if (!validPassword) {
      return res.json({
        message: "username/password not found",
      });
    }

    const accessToken = generateAccessToken(user._id);
    const responseObject = {
      user_id: user._id,
      password: user.password, // Only include this for debugging, don't expose passwords in a production response
      accessToken: accessToken,
    };

    // Send the response with the responseObject
    res.json(responseObject);
  } catch (error) {
    console.log(error);
  }
};

// Rest of your code remains the same...


const signup = async (req, res) => {
    const { username, password, phonenumber, name } = req.body;

    const isExist = await signupDetails.find({ username })

    if (isExist.length > 0) {
        return res.json({
            message: "User already exists"
        });
    }

    try {
        const hashedpassword = await generatehashpassword(password);
        await signupDetails.create({
            username: username,
            password: hashedpassword, 
            phonenumber: phonenumber,
            name: name
        });
        console.log(username);

        res.json({
            message: "Account has been created"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error creating the account"
        });
    }
}

const profile=async(req,res)=>{
    const user = await signupDetails.findById(req.userId)
    res.json({
        message:"accessed profile"
    });
}

module.exports = { signup,login,profile }
