import React from "react";

const navBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/Productos">Productos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;
