import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

const FAQs = () => {
  return (
    <Container className="faqs-page py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions (FAQs)</h2>

      <div className="faq-item">
        <h5>❓ How does EasyLeaze work?</h5>
        <p>We connect property owners with buyers and tenants through verified listings.</p>
      </div>

      <div className="faq-item">
        <h5>❓ Is property listing free?</h5>
        <p>Yes, property owners can post properties for free.</p>
      </div>

      <div className="faq-item">
        <h5>❓ How long does it take for my property to appear online?</h5>
        <p>After our backend verification, your property is usually published within 24–48 hours.</p>
      </div>

      <div className="faq-item">
        <h5>❓ Can I edit my property details later?</h5>
        <p>Yes, you can request edits via your account or by contacting our support team.</p>
      </div>

      <div className="faq-item">
        <h5>❓ Is my personal information safe?</h5>
        <p>Yes, we follow strict privacy guidelines and do not publicly display sensitive information.</p>
      </div>

      <div className="faq-item">
        <h5>❓ How can I contact customer support?</h5>
        <p>
          You can reach us via:<br />
          <strong>Email:</strong> support@easyleaze.com<br />
          <strong>Phone:</strong> +91-XXXXXXXXXX
        </p>
      </div>
    </Container>
  );
};

export default FAQs;