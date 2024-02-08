const express = require("express");
const router = express.Router();
const productosControllers = require("../controllers/productosControllers");

router.get("/", productosControllers.obtenerProductos);
router.post("/", productosControllers.crearProductos);

module.exports = router;
