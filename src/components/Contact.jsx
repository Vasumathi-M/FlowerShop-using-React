import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_card">
        <h2>Contact <span>Us</span></h2>
        <p>We'd love to hear from you! Drop us a message below.</p>
        <form className="contact_form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
