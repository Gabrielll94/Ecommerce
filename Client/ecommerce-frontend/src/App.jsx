import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes className="app">
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
