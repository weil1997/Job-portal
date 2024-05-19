const mongoose = require("mongooser");

const jobSchema = new mongoose.schema({
  title: String,
  company: String,
  location: String,
  description: String,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
});

module.exports = mongoose.model("job", jobSchema);
