
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Rentals from './components/Rentals';
import About from './components/About';
import Contact from './components/Contact';

const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/rentals" component={Rentals} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};

export default Routes;
