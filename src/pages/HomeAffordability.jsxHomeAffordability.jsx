import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const HomeAffordability = () => {
  const [income, setIncome] = useState(70000);
  const [savings, setSavings] = useState(800000);
  const [interest, setInterest] = useState(7.5);
  const [tenure, setTenure] = useState(20);

  const maxEMI = income * 0.5;
  const r = interest / 12 / 100;
  const n = tenure * 12;

  const eligibleLoan = maxEMI
    ? (maxEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
    : 0;

  const homeBudget = eligibleLoan + savings;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Home Affordability Checker</h2>
      <p className="text-center text-muted mb-4">
        Know how much home you can afford based on your monthly income and down payment.
      </p>

      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Down Payment / Savings (₹)</Form.Label>
              <Form.Control
                type="number"
                value={savings}
                onChange={(e) => setSavings(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Loan Term (Years)</Form.Label>
              <Form.Control
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
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
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light">
        <h5 className="mb-3">Home Affordability Result</h5>
        <Row className="mb-2">
          <Col md={4}><strong>Eligible Loan Amount:</strong> ₹{eligibleLoan.toFixed(0)}</Col>
          <Col md={4}><strong>Down Payment:</strong> ₹{savings.toFixed(0)}</Col>
          <Col md={4}><strong>Total Home Budget:</strong> ₹{homeBudget.toFixed(0)}</Col>
        </Row>
        <p className="mt-3">
          <strong>Formula Used:</strong><br />
          Home Affordability = Eligible Loan + Down Payment
        </p>
        <p className="text-muted mb-0">
          Loan eligibility assumes max 50% of income used for EMI. This is an approximate estimate for planning only.
        </p>
      </Card>
    </Container>
  );
};

export default HomeAffordability;