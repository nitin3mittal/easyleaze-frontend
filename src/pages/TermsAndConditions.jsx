import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

const TermsAndConditions = () => {
  return (
    <Container className="terms-page py-5">
      <h2 className="text-center mb-4">Terms & Conditions</h2>

      <p>
        By using <strong>EasyLeaze</strong>, you agree to follow these terms and conditions:
      </p>

      <div className="terms-section">
        <h5>1. User Responsibility:</h5>
        <ul>
          <li>You are responsible for the accuracy of information you submit.</li>
          <li>Do not upload prohibited content or copyrighted material.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h5>2. Property Listings:</h5>
        <ul>
          <li>All listings are subject to verification before publishing.</li>
          <li>EasyLeaze reserves the right to reject or remove any listing without notice.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h5>3. Fees & Payments:</h5>
        <ul>
          <li>Most services are free; however, premium ads or promotions may incur charges.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h5>4. Privacy & Security:</h5>
        <ul>
          <li>Your information is protected under our <a href="/privacy">Privacy Policy</a>.</li>
          <li>EasyLeaze does not sell your personal data to third parties.</li>
        </ul>
      </div>

      <div className="terms-section">
        <h5>5. Dispute Resolution:</h5>
        <ul>
          <li>Any dispute shall be governed by Indian laws and under jurisdiction of Delhi courts.</li>
        </ul>
      </div>

      <p className="mt-4 text-muted">
        (Note: You can get this reviewed by your legal advisor later for finalization.)
      </p>
    </Container>
  );
};

export default TermsAndConditions;