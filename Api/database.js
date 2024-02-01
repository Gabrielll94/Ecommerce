const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb://atlas-sql-65bac0cc9137e30ecb9386ba-8xakz.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin";

const db = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB conectada");
  } catch (error) {
    console.error(error);
  }
};

module.exports = db;
