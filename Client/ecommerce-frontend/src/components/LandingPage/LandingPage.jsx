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
      <header>
        <h1>Tu tienda Deportiva!</h1>
        <img src={image} alt="example"></img>
        <p>Encuentra tus mejores productos deportivos para tu entrenamiento</p>
        <button onClick={handleHomeButtonClick}>Home</button>
      </header>
      <section className="featured-products"></section>
      <section className="newletter">
        <h2>Subscribete a nuestro boletin</h2>
        <p>
          Recibe las ultimas ofertas y novedades directamente desde tu bandeja
          de entrada
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
