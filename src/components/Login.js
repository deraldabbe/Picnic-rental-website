import React, { useState } from "react";
// import axios from "axios";
import { useAuth } from "../AuthProvider";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false); // New state for login success
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //try {
    //  const response = await axios.post("http://localhost:3001/login", {
    //    email,
     //   password,
    //  });

    //login(response.data.token);
    login("mockAuthToken")
    //console.log(response.data);
    setEmail("");
    setPassword("");
    setLoginSuccess(true); // Set login success to true
   // } catch (error) {
    //  console.error(error.response.data);
   // }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
      {loginSuccess && (
        <p className="login-success">Login successful! Welcome back.</p>
      )}
    </div>
  );
};

export default Login;
