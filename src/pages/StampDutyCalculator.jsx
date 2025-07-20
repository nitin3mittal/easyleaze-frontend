import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const StampDutyCalculator = () => {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [propertyType, setPropertyType] = useState('Residential');
  const [buyerType, setBuyerType] = useState('Male');

  const getRates = () => {
    if (propertyType === 'Residential') {
      if (buyerType === 'Male') return 6;
      if (buyerType === 'Female') return 4;
      return 5;
    } else {
      if (buyerType === 'Male') return 8;
      if (buyerType === 'Female') return 6;
      return 7;
    }
  };

  const stampDutyRate = getRates();
  const stampDuty = (propertyValue * stampDutyRate) / 100;
  const registration = 1000;
  const totalCost = stampDuty + registration;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Delhi Stamp Duty Calculator</h2>
      <p className="text-center text-muted mb-4">
        Calculate your approximate stamp duty and registration charges for Delhi property registration.
      </p>

      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>Property Value (₹)</Form.Label>
              <Form.Control
                type="number"
                value={propertyValue}
                onChange={(e) => setPropertyValue(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Property Type</Form.Label>
              <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option>Residential</option>
                <option>Commercial</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Buyer Type</Form.Label>
              <Form.Select value={buyerType} onChange={(e) => setBuyerType(e.target.value)}>
                <option>Male</option>
                <option>Female</option>
                <option>Joint</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light">
        <h5>Stamp Duty Summary</h5>
        <Row className="mb-2">
          <Col md={4}><strong>Stamp Duty:</strong> ₹{stampDuty.toFixed(0)}</Col>
          <Col md={4}><strong>Registration Fee:</strong> ₹{registration}</Col>
          <Col md={4}><strong>Total Cost:</strong> ₹{totalCost.toFixed(0)}</Col>
        </Row>
        <p className="text-muted mb-0">*Based on current Delhi government rates (2024)</p>
      </Card>
    </Container>
  );
};

export default StampDutyCalculator;