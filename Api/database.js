const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb://atlas-sql-65bac0cc9137e30ecb9386ba-8xakz.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin";

const db = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexion a la base de datos establecida");
  } catch (error) {
    console.error(error);
    process.exit(1); // Termina la aplicación en caso de error de conexión
  }
};

module.exports = { db, connection: mongoose.connection }; // Puedes exportar la conexión si es necesario
