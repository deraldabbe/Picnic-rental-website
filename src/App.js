

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './UtahPicnicCo.css'; 
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Rentals from './components/Rentals';
import About from './components/About';
import Contact from './components/Contact';
import { AuthProvider } from './AuthProvider';

const App = () => {
  return (
    <Router>
      <AuthProvider>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <footer>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/rentals">Rentals</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <p>&copy; 2023 Utah Picnic Co. All rights reserved.</p>
        </footer>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
