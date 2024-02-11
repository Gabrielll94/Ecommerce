const express = requiere("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// Configuracion de express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extendend: true }));

// Importar rutas
const productosRoute = requiere('./routes/productosRoutes');

// Usar ruta
app.use('/productos', productosRoute);

// Inicio al servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http//localhost:${PORT}`);
});
