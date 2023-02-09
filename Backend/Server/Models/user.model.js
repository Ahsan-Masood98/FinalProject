const mongoose = require("mongoose");
// Schema or Table to be shown in MongoDB documnet
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
