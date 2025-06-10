const express = require("express");
const router = express.Router();
const db = require("../db"); // Adjust based on your DB connection file

router.get("/", async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM applications");
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;