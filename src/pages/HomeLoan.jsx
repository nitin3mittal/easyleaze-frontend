import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card, Alert } from 'react-bootstrap';

const HomeLoan = () => {
  const [income, setIncome] = useState(80000);
  const [existingEmi, setExistingEmi] = useState(0);
  const [loanAmount, setLoanAmount] = useState(4000000);
  const [interest, setInterest] = useState(7.5);
  const [tenure, setTenure] = useState(20);

  const netIncome = income - existingEmi;
  const maxEMI = netIncome * 0.5;

  const r = interest / 12 / 100;
  const n = tenure * 12;

  const requiredEMI =
    loanAmount > 0
      ? (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : 0;

  const eligibleLoan =
    maxEMI > 0
      ? (maxEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
      : 0;

  const isEligible = requiredEMI <= maxEMI;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Home Loan Eligibility & EMI Calculator</h2>
      <p className="text-muted text-center mb-4">
        Estimate how much home loan you can apply for and what your EMI will look like.
      </p>

      {/* Section 1: Explanation */}
      <Card className="p-4 mb-4">
        <h5>What is a Home Loan?</h5>
        <p>
          A Home Loan is a secured loan provided by banks or housing finance companies to help you buy or build your dream home.
        </p>
        <ul>
          <li>✅ Interest rates typically range from 7%–10%</li>
          <li>✅ Tenure can be up to 30 years</li>
          <li>✅ EMI depends on loan amount, rate, and term</li>
          <li>✅ Eligibility depends on your income and liabilities</li>
        </ul>
      </Card>

      {/* Section 2: Calculator */}
      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>Monthly Income (₹)</Form.Label>
              <Form.Control
                type="number"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Existing EMI (₹)</Form.Label>
              <Form.Control
                type="number"
                value={existingEmi}
                onChange={(e) => setExistingEmi(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Loan Amount Required (₹)</Form.Label>
              <Form.Control
                type="number"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                value={interest}
                step={0.1}
                onChange={(e) => setInterest(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Loan Term (Years)</Form.Label>
              <Form.Control
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Form>
      </Card>

      {/* Section 3: Results */}
      <Card className="p-4 bg-light">
        <h5>Home Loan Results</h5>
        <Row className="mb-3">
          <Col md={4}><strong>Required EMI:</strong> ₹{requiredEMI.toFixed(0)}</Col>
          <Col md={4}><strong>Max Allowed EMI:</strong> ₹{maxEMI.toFixed(0)}</Col>
          <Col md={4}><strong>Eligible Loan:</strong> ₹{eligibleLoan.toFixed(0)}</Col>
        </Row>

        {isEligible ? (
          <Alert variant="success">
            ✅ You are eligible for this loan based on your income.
          </Alert>
        ) : (
          <Alert variant="danger">
            ❌ You are not eligible for the requested loan. Try reducing loan amount or increasing tenure.
          </Alert>
        )}

        <p className="text-muted">
          Note: These results are approximate and for guidance only.
        </p>
      </Card>
    </Container>
  );
};

export default HomeLoan;