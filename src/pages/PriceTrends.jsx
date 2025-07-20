import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card, Table } from 'react-bootstrap';

// ✅ Dummy price data based on purpose and sector
const dummyData = {
  Rent: {
    'Dwarka Sector 12': [
      { month: 'Jan', price: 22000 },
      { month: 'Feb', price: 22500 },
      { month: 'Mar', price: 23000 },
      { month: 'Apr', price: 23500 },
      { month: 'May', price: 24000 },
      { month: 'Jun', price: 24500 },
    ],
    'Dwarka Sector 9': [
      { month: 'Jan', price: 18000 },
      { month: 'Feb', price: 18500 },
      { month: 'Mar', price: 19000 },
      { month: 'Apr', price: 19500 },
      { month: 'May', price: 20000 },
      { month: 'Jun', price: 20500 },
    ],
  },
  Sale: {
    'Dwarka Sector 12': [
      { month: 'Jan', price: 8500 },
      { month: 'Feb', price: 8700 },
      { month: 'Mar', price: 8600 },
      { month: 'Apr', price: 8900 },
      { month: 'May', price: 9000 },
      { month: 'Jun', price: 9200 },
    ],
    'Dwarka Sector 9': [
      { month: 'Jan', price: 8000 },
      { month: 'Feb', price: 8100 },
      { month: 'Mar', price: 8300 },
      { month: 'Apr', price: 8400 },
      { month: 'May', price: 8500 },
      { month: 'Jun', price: 8600 },
    ],
  },
};

const PriceTrends = () => {
  const [sector, setSector] = useState('Dwarka Sector 12');
  const [propertyType, setPropertyType] = useState('Residential');
  const [purpose, setPurpose] = useState('Sale');
  const [duration, setDuration] = useState('1 Year');

  const chartData = dummyData[purpose]?.[sector] || [];

  const avgPrice = chartData.length
    ? chartData.reduce((sum, item) => sum + item.price, 0) / chartData.length
    : 0;

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Price Trend Tracker</h2>
      <p className="text-center text-muted mb-4">
        Analyze property price trends in different Dwarka sectors and nearby areas.
      </p>

      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                <option>Sale</option>
                <option>Rent</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Property Type</Form.Label>
              <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option>Residential</option>
                <option>Commercial</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Area / Sector</Form.Label>
              <Form.Select value={sector} onChange={(e) => setSector(e.target.value)}>
                <option>Dwarka Sector 12</option>
                <option>Dwarka Sector 9</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Time Frame</Form.Label>
              <Form.Select value={duration} onChange={(e) => setDuration(e.target.value)}>
                <option>Last 6 Months</option>
                <option>1 Year</option>
                <option>2 Years</option>
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Card>

      <Card className="p-4 bg-light mb-4">
        <h5>
          Average {purpose === 'Sale' ? 'Sale Price' : 'Rent'}: ₹{avgPrice.toFixed(0)}{' '}
          {purpose === 'Sale' ? 'per Sq.Ft.' : 'per Month'}
        </h5>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>Month</th>
              <th>{purpose === 'Sale' ? 'Sale Price (₹/Sq.Ft.)' : 'Rent Price (₹/Month)'}</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.month}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default PriceTrends;