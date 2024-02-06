import React from "react";

const producto = ({ productos }) => {
  <div className="producto">
    <h2>{productos.nombre}</h2>
    <p>Precio: {productos.precio}</p>
  </div>;
};

const Home = () => {
  const products = [
    { nombre: "Pelota de futbol", precio: $100 },
    { nombre: "Zapatilla Nike", precio: $350 },
  ];
  return (
    <div>
      <h1>Bienvenido a nuestra tienda deportiva!</h1>
      <div id="products">
        {products.map((products, index) => (
          <producto key={index} productos={products} />
        ))}
      </div>
    </div>
  );
};

export default Home;
