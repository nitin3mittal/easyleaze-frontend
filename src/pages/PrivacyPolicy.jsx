import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

const PrivacyPolicy = () => {
  return (
    <Container className="privacy-page py-5">
      <h2 className="text-center mb-4">Privacy Policy</h2>

      <p>
        At <strong>EasyLeaze</strong>, we value your privacy and are committed to protecting your personal information.
      </p>

      <div className="privacy-section">
        <h5>1. Information Collection</h5>
        <p>
          We collect personal details such as your name, mobile number, email, and property preferences when you register or post on our portal.
        </p>
      </div>

      <div className="privacy-section">
        <h5>2. Use of Information</h5>
        <p>
          Your information is used to provide relevant property matches, enable communication, and improve our services.
        </p>
      </div>

      <div className="privacy-section">
        <h5>3. Data Security</h5>
        <p>
          We implement strict security measures to protect your data from unauthorized access, misuse, or disclosure.
        </p>
      </div>

      <div className="privacy-section">
        <h5>4. Data Sharing</h5>
        <p>
          We do <strong>not sell</strong> your personal data to third parties. We may share limited data with partners only to fulfill your requirements.
        </p>
      </div>

      <div className="privacy-section">
        <h5>5. User Rights</h5>
        <p>
          You may request access, update, or deletion of your data by contacting our support team at <strong>support@easyleaze.com</strong>.
        </p>
      </div>

      <div className="privacy-section">
        <h5>6. Cookies</h5>
        <p>
          We may use cookies to personalize user experience and analyze traffic. You can control cookies via your browser settings.
        </p>
      </div>

      <div className="privacy-section">
        <h5>7. Policy Updates</h5>
        <p>
          This policy may be updated from time to time. We recommend reviewing this page periodically to stay informed.
        </p>
      </div>

      <p className="mt-4 text-muted">
        If you have any questions or concerns regarding our privacy practices, feel free to contact us.
      </p>
    </Container>
  );
};

export default PrivacyPolicy;