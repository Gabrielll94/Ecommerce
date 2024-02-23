import React, { useState } from "react";

const CreateProductForm = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();

    // Limpiar el formulario después de la creación exitosa del producto
    try {
      // Realizar la solicitud POST para crear el producto
      await axios.post("/api/products", {
        nombre,
        precio,
        descripcion,
      });

      setNombre("");
      setPrecio("");
      setDescripcion("");
      // Puedes mostrar un mensaje de éxito o redirigir al usuario a otra página si lo deseas
    } catch (error) {
      console.error("Error al crear el producto", error);
      // Manejar el error de creación del producto, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre:</label>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
      />
      <label>Precio:</label>
      <input
        type="text"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
        required
      />
      <label>Descripcion:</label>
      <textarea
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        required
      />
      <button type="submit">Crear Producto</button>
    </form>
  );
};

export default CreateProductForm;
