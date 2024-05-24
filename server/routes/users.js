import express from "express";
import User from "../models/user.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = new User({ name, email, password, role });
  await newUser.save();
  res.json(newUser);
});

export default router;
