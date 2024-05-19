const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["jobseeker", "employer"], default: "jobseeker" },
});

module.exports = mongoose.model("user", userSchema);
