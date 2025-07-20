import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card, Badge } from 'react-bootstrap';

const RentalYieldCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState(15000);
  const [propertyPrice, setPropertyPrice] = useState(5000000);

  const annualRent = monthlyRent * 12;
  const yieldPercent = propertyPrice
    ? (annualRent / propertyPrice) * 100
    : 0;

  const getYieldType = () => {
    if (yieldPercent > 5) return { label: 'Good', variant: 'success' };
    if (yieldPercent >= 3) return { label: 'Average', variant: 'warning' };
    return { label: 'Poor', variant: 'danger' };
  };

  const result = getYieldType();

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Rental Yield Calculator</h2>
      <p className="text-center text-muted mb-4">
        Quickly check your rental return on property investment.
      </p>

      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Monthly Rent (₹)</Form.Label>
              <Form.Control
                type="number"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Property Purchase Price (₹)</Form.Label>
              <Form.Control
                type="number"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
              />
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light">
        <h5>Rental Yield Result</h5>
        <Row>
          <Col md={6}>
            <strong>Annual Yield:</strong> {yieldPercent.toFixed(2)}%
          </Col>
          <Col md={6}>
            <strong>Status:</strong>{' '}
            <Badge bg={result.variant}>{result.label} Return</Badge>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default RentalYieldCalculator;