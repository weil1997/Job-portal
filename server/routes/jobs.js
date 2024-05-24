import express from "express";
import Job from "../models/job.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { title, company, location, description, postedBy } = req.body;
  const newJob = new Job({ title, company, location, description, postedBy });
  await newJob.save();
  res.json(newJob);
});

router.get("/", async (req, res) => {
  const jobs = await Job.find().populate("postedBy", "name");
  res.json(jobs);
});

export default router;
