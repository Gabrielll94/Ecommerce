const express = require("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

// Obtener todos los productos
router.get("/", productosControllers.obtenerProductos);
//Crear productos
router.post("/", productosControllers.crearProductos);
//Obtener productos por marca
router.get("/marca/:nombreMarca", productosControllers.obtenerPorMarca);

module.exports = router;
