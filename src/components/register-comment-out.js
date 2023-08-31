/*
import React, { useState } from "react";
import axios from "axios";
import './Register.css'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState("");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:3002/register", {
        name,
        email,
        password,
      });
      setRegistrationSuccess(true);
      setRegistrationError("");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
      if (error.response) {
        setRegistrationError(
          error.response.data.error || "Registration failed due to an error."
        );
      } else {
        setRegistrationError("Registration failed. Please try again later.");
      }
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="register-input"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="register-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="register-input"
        />
        <button type="button" onClick={handleRegister} className="register-button">
          Register
        </button>
      </form>
      {registrationSuccess && (
        <p className="registration-success">Registration successful! You can now log in.</p>
      )}
      {registrationError && <p className="registration-error">Error: {registrationError}</p>}
    </div>
  );
};

export default Register;
*/