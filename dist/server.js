"use strict";

var express = require("express");

var morgan = require("morgan");

var cors = require("cors");

var app = express(); // Settings || Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(morgan("dev"));
app.get("/", function (req, res) {
  res.json({
    message: "Welcome"
  });
}); // Routes

app.use("/api/tasks", require("./routes/tasks.routes"));
module.exports = app;