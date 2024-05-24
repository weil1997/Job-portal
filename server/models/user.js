import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ["jobseeker", "employer"], default: "jobseeker" },
});

export default mongoose.model("User", userSchema);
