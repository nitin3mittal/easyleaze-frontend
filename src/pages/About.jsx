import React from 'react';
import '../App.css'; // Already includes global styles like container
import { Container } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="about-page py-5">
      <h2 className="text-center mb-4">About EasyLeaze</h2>

      <p className="lead text-center">
        Welcome to <strong>EasyLeaze</strong> — Your Trusted Partner for Property Solutions in Dwarka and Beyond.
      </p>

      <p>
        We simplify your real estate journey by offering verified listings for Residential, Commercial, and Investment
        properties. Whether you wish to Buy, Sell, or Rent, we are here to provide transparent, hassle-free services.
      </p>

      <div className="about-section">
        <h4>✅ Our Mission</h4>
        <p>
          To empower property buyers, sellers, and renters with the most accurate information and a seamless property
          experience.
        </p>
      </div>

      <div className="about-section">
        <h4>✅ Our Vision</h4>
        <p>
          To be the most trusted real estate platform in Dwarka and nearby regions, connecting people with their dream
          properties.
        </p>
      </div>

      <div className="about-section">
        <h4>✅ Why Choose EasyLeaze?</h4>
        <ul>
          <li>✔️ Verified Property Listings</li>
          <li>✔️ Local Expertise in Dwarka & Delhi NCR</li>
          <li>✔️ No Hidden Charges</li>
          <li>✔️ Dedicated Customer Support</li>
          <li>✔️ Easy-to-Use Portal with Powerful Search Tools</li>
        </ul>
      </div>

      <div className="about-section">
        <h4>✅ Our Services</h4>
        <ul>
          <li>✔️ Residential & Commercial Property Listings</li>
          <li>✔️ Property Submission & Requirement Posting</li>
          <li>✔️ Legal & Documentation Assistance</li>
          <li>✔️ Advertising & Business Promotions</li>
          <li>✔️ Partner Programs for Agents & Brokers</li>
        </ul>
      </div>

      <p className="mt-4">
        Whether you are a first-time buyer, a property investor, or a business looking for office space, <strong>EasyLeaze</strong> is your go-to platform.
      </p>
    </Container>
  );
};

export default AboutUs;