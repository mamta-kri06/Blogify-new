const { Router } = require("express");
const User = require("../models/user");
const router = Router();
const bcrypt = require("bcryptjs");
const { createTokenForUser, validateToken } = require("../services/auth");

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token").redirect("/");
});

router.post("/signup", async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists!");
    }

    await User.create({ fullName, email, password });

    return res.redirect("/user/signin");
  } catch (error) {
    console.error("Error signing up:", error);
    return res.status(500).send("Internal Server Error");
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      return res.render("signin", {
        error: "Incorrect email or password",
      });
    }
    const token = createTokenForUser(user);
    return res.cookie("token", token).redirect("/");
  } catch (error) {
    console.error("Error signing in:", error);
    return res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
