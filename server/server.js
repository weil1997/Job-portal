const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    UseUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const user = require("./models/user");
const job = require("./models/Job");

app.use("/api/users", require("./routes/users"));
app.use("/api/jobs", require("./routes/jobs"));

const PORT = process.env.port || 5000;
app.listen(PORT, () => console.log(`server runnig on port ${PORT}`));
