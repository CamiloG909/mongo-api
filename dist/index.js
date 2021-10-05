"use strict";

require("dotenv").config();

var app = require("./server");

require("./database");

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), function () {
  console.log("Server on port 4000");
});