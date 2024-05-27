import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import jobRoutes from "./routes/jobs.js";
import Job from "./models/job.js";

dotenv.config();

console.log("MONGO_URI FROM .ENV", process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error ", err));

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));

console.log("Mongo URI:", process.env.MONGO_URI);
