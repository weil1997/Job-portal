const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/registrer", async (req, res) => {
  const { name, email, password, role } = req.body;
  const newUser = new User({ name, email, password, role });
  await newUser.save();
  res.json(newUser);
});

module.exports = router;
