const User=require("../Models/user.model")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
    console.log("inside register user");
    try {
      const { password, ...rest } = req.body;
      // to check whether email already Exists or not
      const exist = await User.findOne({ email: rest.email, isDeleted: false });
      if (exist) return res.status(400).send("user already exist");
  
      const user = new User({
        ...rest,
      });
      const salt = await bcrypt.genSalt(12);
      const hashPassword = await bcrypt.hash(password, salt);
      user.password = hashPassword;
      user.save();
      res.send({ message: "UserRegisterd Successfully" });
    } catch (err) {
      res.status(500).send({
        message: err.mesage,
      });
    }
  };
  const loginUser = async (req, res) => {
    console.log("inside Login User API");
    try {
      //pay load given by the user
      const { email, password } = req.body;
      // to check whether email already Exists or not
      const user = await User.findOne({ email});
      if (!user) return res.status(400).send({ message: "User Not Found" });
      try {
        //check whether the user given password and stored hash password matches
        const response = await bcrypt.compare(password, user.password);
        if (response) {
          const token = await jwt.sign(
            {
              id: user._id,
              email: user.email,
              name: user.name,
            },
            process.env.JWT_PRIVATE_KEY
          );
          res.send({
            user,
            token,
            message: "User Loged In Successfully",
          });
        }
      } catch (error) {
        return res.status(400).send({ message: "Invalid user or Password" });
      }
    } catch (err) {
      res.status(500).send({
        message: err.mesage,
      });
    }
  };
  module.exports = {
    registerUser,
    loginUser,
  };