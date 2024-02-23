import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Adidas
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/productos" className="navbar-link">
              Productos
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
