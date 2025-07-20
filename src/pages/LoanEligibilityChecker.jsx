import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const LoanEligibilityChecker = () => {
  const [income, setIncome] = useState(60000);
  const [expenses, setExpenses] = useState(15000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenureYears, setTenureYears] = useState(20);

  const netAvailable = income - expenses;
  const maxEMI = netAvailable * 0.5;

  const r = interestRate / 12 / 100;
  const n = tenureYears * 12;

  const eligibleLoan = maxEMI
    ? (maxEMI * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n))
    : 0;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Loan Eligibility Checker</h2>
      <p className="text-center text-muted mb-4">
        Estimate how much home loan you can get based on your income and liabilities.
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
              <Form.Label>Monthly Expenses/EMI (₹)</Form.Label>
              <Form.Control
                type="number"
                value={expenses}
                onChange={(e) => setExpenses(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Loan Tenure (Years)</Form.Label>
              <Form.Control
                type="number"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
              />
            </Col>
            <Col md={3}>
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                value={interestRate}
                step={0.1}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light">
        <h5>Estimated Loan Eligibility</h5>
        <Row>
          <Col md={6}>
            <strong>Eligible Loan Amount:</strong> ₹{eligibleLoan.toFixed(0)}
          </Col>
          <Col md={6}>
            <small className="text-muted">
              (Based on approx 50% of your net monthly income)
            </small>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default LoanEligibilityChecker;