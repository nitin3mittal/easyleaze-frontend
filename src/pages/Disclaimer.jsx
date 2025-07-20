import React from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';

const Disclaimer = () => {
  return (
    <Container className="disclaimer-page py-5">
      <h2 className="text-center mb-4">Disclaimer</h2>

      <p>
        <strong>EasyLeaze</strong> provides real estate listings for informational purposes only.
      </p>

      <p>
        We do not guarantee the availability, legality, or accuracy of the properties listed.
      </p>

      <p>
        Users are advised to verify all property details before making any decision.
      </p>

      <p>
        EasyLeaze is not responsible for any financial loss or damage resulting from property transactions.
      </p>

      <p>
        By using our services, you agree to this disclaimer.
      </p>
    </Container>
  );
};

export default Disclaimer;
