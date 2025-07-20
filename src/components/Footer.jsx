import React from 'react';
import '../App.css'; // or your footer-specific CSS

const Footer = () => {
  return (
    <footer className="easyleaze-footer">
      <div className="footer-container">
        {/* Section 1: About */}
        <div className="footer-column">
          <h4>About EasyLeaze</h4>
          <p>
            EasyLeaze is a hassle-free platform offering verified property listings for rent and sale across major Delhi NCR locations.
            From flats in Dwarka to commercial plots on Dwarka Expressway, we simplify your real estate journey.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/submit-property">List Your Property</a></li>
          </ul>
        </div>

        {/* Section 3: Popular Searches */}
        <div className="footer-column">
          <h4>Popular Searches</h4>
          <ul>
            <li><a href="/search/flats-rent-dwarka">Flats for Rent in Dwarka</a></li>
            <li><a href="/search/shops-sale-dwarka">Shops for Sale in Dwarka</a></li>
            <li><a href="/search/plots-dwarka-expressway">Plots on Dwarka Expressway</a></li>
            <li><a href="/search/commercial-delhi-ncr">Commercial Spaces in Delhi NCR</a></li>
          </ul>
        </div>

        {/* Section 4: Contact Info */}
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>📞 <a href="tel:+919560786369">+91 9560786369</a></p>
          <p>✉️ <a href="mailto:support@easyleaze.com">support@easyleaze.com</a></p>
          <p>📍 EasyLeaze, Dwarka, Delhi NCR</p>
        </div>
      </div>

      {/* Section 5: Legal Bar */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a> |
          <a href="/terms">Terms of Use</a> |
          <a href="/disclaimer">Disclaimer</a>
        </div>
        <p className="copyright">© 2025 EasyLeaze. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;