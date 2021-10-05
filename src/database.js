const mongoose = require("mongoose");

(async () => {
  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/apimongo"
    );
    console.log("Database connected:", db.connection.name);
  } catch (e) {
    console.error(e);
  }
})();
