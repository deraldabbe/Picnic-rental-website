import React, { useState } from "react";
import Modal from "react-modal";
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic here to send the email/message
    // For the sake of this example, we'll just show the confirmation modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact-section">
      <div className="contact-title">
      <h2>Contact Us</h2>
      </div>
      <div className="contact-form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email" className="contact-label">Email:</label>
            <input
              type="email"
              id="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="contact-label">Message:</label>
            <textarea
              id="message"
              className="contact-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="contact-button">Submit</button>
        </form>
      </div>
      <div className="contact-info-container">
      <ul className="contact-info">
        <li>Phone: 1-734-309-2854</li>
        <li>Email: utahpicnicco@gmail.com</li>
        <li>Address: 2739 South Highland Drive, Salt Lake City, UT 84106</li>
      </ul>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation"
        className="modal"
        overlayClassName="overlay"
      >
        <p>Thank you for your inquiry! You will be contacted shortly.</p>
        <button onClick={closeModal}>OK</button>
      </Modal>
    </section>
  );
}

export default Contact;
