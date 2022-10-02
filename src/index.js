require("dotenv").config();
const app = require("./server");
require("./database");

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), "0.0.0.0", () => {
  console.log("Server on port 4000");
});
