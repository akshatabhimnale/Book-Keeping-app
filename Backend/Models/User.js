const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//----------------------------------------------------User Schema------------------------------------------------------------
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  console.log(this);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
const User = mongoose.model("User", UserSchema);
module.exports = User;
