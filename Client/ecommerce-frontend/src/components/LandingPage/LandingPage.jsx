import React from "react";
import "../LandingPage/LandingPage.css";
import image from "../../assets/sports.jpg";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="landing-page">
      <nav>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#products">Productos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <header>
        <h1>Tu tienda Deportiva!</h1>
        <img src={image} alt="example"></img>
        <p>Encuentra tus mejores productos deportivos para tu entrenamiento</p>
        <button onClick={handleHomeButtonClick}>Home</button>
      </header>
      <section className="featured-products"></section>
      <section className="newsletter">
        <h2>Subscríbete a nuestro boletín</h2>
        <p>
          Recibe las últimas ofertas y novedades directamente desde tu bandeja
          de entrada
        </p>
      </section>
      <footer>
        <p>© 2024 Tu tienda Deportiva. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
