import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const subTypeMap = {
  Residential: ['Society Flat', 'Builder Floor', 'Independent House', 'Plot'],
  Commercial: ['Shop', 'Showroom', 'Office', 'Warehouse', 'Factory', 'Land'],
};

const PropertyValuation = () => {
  const [city, setCity] = useState('Delhi');
  const [area, setArea] = useState('');
  const [type, setType] = useState('Residential');
  const [subType, setSubType] = useState('');
  const [areaSize, setAreaSize] = useState(1000);
  const [rate, setRate] = useState(8000);

  const estimatedValue = areaSize * rate;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Property Valuation Estimator</h2>
      <p className="text-muted text-center mb-4">
        Estimate your property's value based on area, type, and market rate.
      </p>

      {/* Explanation Section */}
      <Card className="p-4 mb-4">
        <h5>What is Property Valuation?</h5>
        <p>
          Property valuation is the process of estimating the market value of a property based on location, property type, area, and current price trends. This helps in:
        </p>
        <ul>
          <li>✅ Setting the right selling price</li>
          <li>✅ Property tax calculation</li>
          <li>✅ Home loan processing</li>
          <li>✅ Investment decisions</li>
        </ul>
      </Card>

      {/* Form Section */}
      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>City</Form.Label>
              <Form.Control
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Locality / Area</Form.Label>
              <Form.Control
                value={area}
                placeholder="e.g. Dwarka Sector 12"
                onChange={(e) => setArea(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Property Type</Form.Label>
              <Form.Select value={type} onChange={(e) => setType(e.target.value)}>
                <option>Residential</option>
                <option>Commercial</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Sub-Type</Form.Label>
              <Form.Select value={subType} onChange={(e) => setSubType(e.target.value)}>
                {subTypeMap[type].map((item, i) => (
                  <option key={i}>{item}</option>
                ))}
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Super Area (Sq.Ft.)</Form.Label>
              <Form.Control
                type="number"
                value={areaSize}
                onChange={(e) => setAreaSize(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>Rate per Sq.Ft. (₹)</Form.Label>
              <Form.Control
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
              <small className="text-muted">Use average from similar listings</small>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* Result Section */}
      <Card className="p-4 bg-light">
        <h5>Estimated Property Value</h5>
        <Row>
          <Col md={6}>
            <strong>Estimated Value:</strong> ₹{estimatedValue.toLocaleString('en-IN')}
          </Col>
        </Row>
        <p className="text-muted mt-3">
          * This is an approximate market value. Actual price may vary based on property condition, legal documents, and market demand.
        </p>
      </Card>
    </Container>
  );
};

export default PropertyValuation;