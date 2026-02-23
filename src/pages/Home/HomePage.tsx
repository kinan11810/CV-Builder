import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const HomePage = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  return (
    <div className="home-container" style={{ padding: "20px" }}>
      
      {/* Top Right Login / Logout */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        {user ? (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span>Welcome, {user.email}</span>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>

      <h1>Welcome to CV Builder</h1>

      <button onClick={() => navigate("/cv-builder")}>
        Start
      </button>

    </div>
  );
};

export default HomePage;
