import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

const Producto = ({ producto }) => {
  <div className="producto">
    <h2>{producto.nombre}</h2>
    <p>Precio: {producto.precio}</p>
  </div>;
};

const Home = () => {
  const products = [
    { nombre: "Pelota de futbol", precio: "$100" },
    { nombre: "Zapatilla Nike", precio: "$350" },
  ];
  return (
    <div>
      <NavBar />
      <h1>Bienvenido a nuestra tienda deportiva!</h1>
      <SearchBar />
      <div id="products">
        {products.map((producto, index) => (
          <Producto key={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;
