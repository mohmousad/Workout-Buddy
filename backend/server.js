require("dotenv").config();
const express = require("express");
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// listen for reqs
app.listen(process.env.PORT);

// routes
const workoutRoutes = require("./routes/workouts");
app.use("/api/workouts", workoutRoutes);
