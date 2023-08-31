import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home">
      <h1>Welcome to Utah Picnic Co.</h1>
      <img
        src="https://r2.starryai.com/results/1007194427/946afa0d-1e4c-48ec-bcf4-c00705b3c608.webp"
        alt="Picnic Logo"
      />
      <p>Your One-Stop Shop for Picnic Rentals</p>
      <Link to="./rentals" className="btn">
        Explore Rentals
      </Link>
    </section>
  );
};

export default Home;
