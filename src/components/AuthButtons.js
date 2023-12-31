import React from "react";
import { useAuth } from "../AuthProvider";
import { Link } from "react-router-dom";
import "./AuthButtons.css";

const AuthButtons = () => {
  const { user, logout } = useAuth();

  return (
    <div className="auth-buttons">
      {user ? (
        <button className="auth-button" onClick={logout}>
          Logout
        </button>
      ) : (
        <>
          <Link to="/login" className="auth-button">
            Login
          </Link>
          <Link to="/register" className="auth-button">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
