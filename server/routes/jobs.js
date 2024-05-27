import express from "express";
import Job from "../models/job.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, company, location, description, postedBy } = req.body;
  try {
    const newJob = new Job({ title, company, location, description, postedBy });
    await newJob.save();
    res.json(newJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("Received GET request for /api/jobs");
    const jobs = await Job.find().populate("postedBy", "name");
    console.log("Jobs fetched successfully", jobs);
    res.json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err.message);
    res.status(500).json({ error: err.message });
  }
});

export default router;
