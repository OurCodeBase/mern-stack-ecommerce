const crypto = require('crypto');
const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const app = express.Router();

function createHash(string) {
  return crypto.createHash('sha256')
    .update(string)
    .digest('hex');
}

app.get("/current", async (req, res) => {
  return res.send("User1")
})

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = createHash(password);
    const user = new User({
      name: name,
      email: email,
      key: hash
    })
    await user.save(user);
    return res.json({ status: "success", message: "Account creation success." })
  } catch (e) {
    console.error(e.message);
    res.statusCode = 500;
    return res.json({ status: "error", message: "Account creation failed." })
  }
})

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const key = createHash(password);
    const user = await User.findOne({ email: email, key: key });
    if (!user) throw new Error();
    const id = user._id;
    const token = jwt.sign({ id }, process.env.JWT_KEY, {
      expiresIn: '7d'
    });
    res.cookie("token", token, {
      httpOnly: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.json({ status: "success", message: "Login success." });
  } catch (e) {
    console.log(e.message);
    return res.json({ status: "error", message: "Login failed." });
  }
})

module.exports = app;
