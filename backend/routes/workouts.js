const express = require("express");
const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: `GET workout ${req.params.id}` });
});

// POST a new workout
router.post("/", (req, res) => {
  res.json({ msg: `POST a new workout` });
});

// DELTE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: `DELTE a new workout` });
});

// UPDATE a workout
router.patch("/:id", (req, res) => {
  res.json({ msg: `UPDATE a new workout` });
});

module.exports = router;
