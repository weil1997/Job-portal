import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  description: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

export default mongoose.model("Job", jobSchema);
