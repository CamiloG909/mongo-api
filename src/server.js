const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

// Settings || Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

// Routes
app.use("/api/tasks", require("./routes/tasks.routes"));

module.exports = app;
