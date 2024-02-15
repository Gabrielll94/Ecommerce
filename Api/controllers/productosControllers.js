const Producto = require("../models/producto");

exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los productos");
  }
};

exports.crearProductos = async (req, res) => {
  try {
    const nuevoProducto = await Producto.create(req.body);
    res.status(201).json({
      mensaje: "Producto creado correctamente",
      data: nuevoProducto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el producto");
  }
};

exports.obtenerProductosPorMarca = async (req, res) => {
  try {
    const productos = await Producto.find({ marca: marca });
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los productos por marca");
  }
};
