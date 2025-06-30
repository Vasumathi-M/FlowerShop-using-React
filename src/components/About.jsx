import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about_container">
      <div className="about_overlay">
        <div className="about_content">
          <h1>About <span>Flower Shop</span></h1>
          <p>
            Welcome to <strong>Flower Shop</strong>, your go-to destination for fresh blooms and elegant floral arrangements.
            We specialize in hand-crafted bouquets for every occasion — be it birthdays, weddings, anniversaries, or just because.
          </p>
          <p>
            With a wide selection of seasonal and exotic flowers, we pride ourselves on quality, creativity, and timely delivery.
            Whether you're looking for a simple bouquet or a luxurious floral gift, our team is dedicated to adding color and joy to your life.
          </p>
          <p>We deliver love, one petal at a time 🌸</p>
        </div>
      </div>
    </div>
  );
};

export default About;
