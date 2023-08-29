
import React from 'react';
import { Link } from 'react-router-dom';
import './AuthButtons.css'; 

const AuthButtons = () => {
  return (
    <div className="auth-buttons">
      <Link to="/login" className="auth-button">
        Login
      </Link>
      <Link to="/register" className="auth-button">
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
