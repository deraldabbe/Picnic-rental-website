
import React from 'react';
import { Link } from 'react-router-dom';

const Rentals = () => {
  return (
    <section id="rentals">
      <h2>Rentals</h2>
      <div className="rental-item">
        <img src="https://images.unsplash.com/photo-1520869309377-88c9274a27c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="PicnicTable1" />
        <h3>Picnic Tables</h3>
        <p>Rent our picnic tables for $50 per day!</p>
        <Link to="#" className="btn">Book Now</Link>
      </div>
      
    </section>
  );
}

export default Rentals;
