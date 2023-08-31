import React from "react";
import './About.css'

function About() {
  return (
    <section id="about" className="about-section">
        <h2>About Us</h2>
      <div className="about-image-container">
        <img src="https://scontent.fslc3-1.fna.fbcdn.net/v/t39.30808-6/338295676_763084388490469_682865694943948704_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=2y67sGnGaAoAX-boAET&_nc_ht=scontent.fslc3-1.fna&oh=00_AfBMkREo5CNB7sX1C1YPXwuWWv5s4vn6NeA0n2neSsrliA&oe=64F5E0E4" 
        alt=""
        className="about-image" 
        />
      </div>
      <div className="about-text">
      <p>
        Utah Picnic Co. is a leading picnic rental company that aims to provide
        top-notch equipment and services for your outdoor gatherings. With years
        of experience and a passion for creating memorable experiences, we
        strive to make your picnics enjoyable and hassle-free.
      </p>
      <p>
        Our dedicated team of professionals ensures that you have access to the
        best picnic rental items and exceptional customer service. We take pride
        in our commitment to quality, reliability, and customer satisfaction.
      </p>
      </div>
    </section>
  );
}

export default About;
