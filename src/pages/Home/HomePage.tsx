import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to CV Builder</h1>
      <button onClick={() => navigate("/cv-builder")}>
        Start
      </button>
    </div>
  );
};

export default HomePage;
