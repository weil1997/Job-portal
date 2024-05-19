const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

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
