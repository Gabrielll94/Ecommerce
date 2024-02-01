const express = requiere("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Configuracion de express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendend: true }));

// Rutas y controladores
app.get("/", (req, res) => {
  res.send("Hola, Bienvenido");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http//localhost:${PORT}`);
});
