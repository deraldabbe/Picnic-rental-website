import React, { useState } from "react";
import axios from "axios";

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
    <div>
      <h2>Register</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {registrationSuccess && (
        <p>Registration successful! You can now log in.</p>
      )}
      {registrationError && <p>Error: {registrationError}</p>}
    </div>
  );
};

export default Register;
