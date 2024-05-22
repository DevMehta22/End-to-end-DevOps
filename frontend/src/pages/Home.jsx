import React from 'react';
import "./Styles/Home.css";

const Home = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Flavour Fusion</h1>
          <p>Experience the finest dining with us</p>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>Discover our story, our philosophy, and what makes us unique.</p>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>
      <section className="contact">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p>Get in touch with us for reservations or inquiries.</p>
          <button className="btn btn-secondary">Contact</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
