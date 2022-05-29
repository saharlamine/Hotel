const mongoose = require("mongoose");
//const crypto = require("crypto");
//const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    UserName: {
      type: String,
      trim: true,
      required: true,
      min: 6,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    Phone: {
      type: Number,
      required: true,
    },
    //hashed_password: { type: String, required: true },
    address: { type: String, min: 6 },


    //ressetPasswordLink: { data: String, default: "" },
  },
);

  


const User = mongoose.model("User", userSchema);
module.exports = User;
