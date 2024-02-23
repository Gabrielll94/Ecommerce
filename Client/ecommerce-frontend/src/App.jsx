import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  return (
    <Router>
      <Routes className="app">
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
