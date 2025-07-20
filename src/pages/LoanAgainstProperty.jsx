import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const LoanAgainstProperty = () => {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [ltv, setLtv] = useState(60); // Loan-to-Value %
  const [income, setIncome] = useState(70000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [interest, setInterest] = useState(9);
  const [tenure, setTenure] = useState(15);

  const maxLoanByLTV = (propertyValue * ltv) / 100;

  const r = interest / 12 / 100;
  const n = tenure * 12;
  const netEMI = (income - existingEmi) * 0.5;

  const eligibleLoanByIncome =
    netEMI > 0
      ? (netEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
      : 0;

  const finalEligibleLoan = Math.min(maxLoanByLTV, eligibleLoanByIncome);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Loan Against Property (LAP)</h2>
      <p className="text-muted text-center mb-4">
        Secure a loan using your property — ideal for business, education, or personal use.
      </p>

      <Card className="p-4 shadow-sm mb-4">
        <h5 className="mb-3">Check Your LAP Eligibility</h5>
        <Form>
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Property Market Value (₹)</Form.Label>
              <Form.Control
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Loan-to-Value (%)</Form.Label>
              <Form.Control
                type="number"
                value={ltv}
                onChange={(e) => setLtv(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Existing EMI (₹)</Form.Label>
              <Form.Control
                type="number"
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                value={interest}
                step={0.1}
                onChange={(e) => setInterest(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Tenure (Years)</Form.Label>
              <Form.Control
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light">
        <h5 className="mb-3">Eligibility Result</h5>
        <Row>
          <Col md={4}><strong>Max Loan by Property:</strong> ₹{maxLoanByLTV.toFixed(0)}</Col>
          <Col md={4}><strong>Loan by Income:</strong> ₹{eligibleLoanByIncome.toFixed(0)}</Col>
          <Col md={4}><strong>Final Eligible LAP:</strong> ₹{finalEligibleLoan.toFixed(0)}</Col>
        </Row>
        <p className="mt-3 text-muted">
          Final eligibility is calculated as per income capacity & property value.
        </p>
      </Card>
    </Container>
  );
};

export default LoanAgainstProperty;