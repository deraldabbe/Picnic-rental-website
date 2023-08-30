import React from "react";

const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="service">
        <img
          src="https://d31eqxppr3nlos.cloudfront.net/wp-content/uploads/2016/02/03182614/31.-Picnic-Table.jpg"
          alt="Picnic Table"
        />
        <h3>Tables</h3>
        <p>
          Rent our sturdy and spacious picnic tables for a comfortable outdoor
          dining experience!
        </p>
      </div>
      <div className="service">
        <img
          src="https://www.thespruce.com/thmb/rCRnRYE5xuxbD1uNkWQNzOdAr7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Web_1500-SPR_OverallGroup_1-257eabf1c56e4e2ea8a64b750d109beb.jpg"
          alt="Umbrellas"
        />
        <h3>Umbrellas</h3>
        <p>Pick from our beautiful umbrellas!</p>
      </div>
      <div className="service">
        <img
          src="https://www.rossiniweddings.com/wp-content/uploads/2019/01/type_of_wedding_chairs.jpg"
          alt="Chairs"
        />
        <h3>Chairs</h3>
        <p>
          Choose from our range of stylish and comfortable chairs to complete
          your picnic setup!
        </p>
      </div>
    </section>
  );
};

export default Services;
