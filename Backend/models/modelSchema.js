const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, requird: true },
    password: {
      type: String,
      required: true,
      minlength: [8, "minimun 8 characters required"],
    },
    role: {
      type: String,
      required: true,
      enum: ["customer", "admin"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
