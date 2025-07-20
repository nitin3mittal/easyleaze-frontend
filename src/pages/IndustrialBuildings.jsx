import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyIndustrialBuildings = [
  {
    title: 'Multi-Storey Industrial Building in Sector 26',
    image: '/images/industrial1.jpg',
    status: 'For Sale',
    type: 'Industrial Building',
    price: '₹5.8 Cr',
    area: '15000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Warehouse + Office Combo near Dwarka Expressway',
    image: '/images/industrial2.jpg',
    status: 'For Rent',
    type: 'Industrial Building',
    price: '₹2.5 Lakhs/month',
    area: '12000 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Heavy-Duty Industrial Space with Docking Area',
    image: '/images/industrial3.jpg',
    status: 'For Sale',
    type: 'Industrial Building',
    price: '₹6.3 Cr',
    area: '18000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Corner Industrial Plot + Building Combo in Najafgarh',
    image: '/images/industrial4.jpg',
    status: 'For Rent',
    type: 'Industrial Building',
    price: '₹1.9 Lakhs/month',
    area: '10000 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Large Facility with Power Backup - Sector 28',
    image: '/images/industrial5.jpg',
    status: 'For Rent',
    type: 'Industrial Building',
    price: '₹2.2 Lakhs/month',
    area: '13000 sq.ft.',
    availability: 'Immediate',
  },
];

const IndustrialBuildings = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyIndustrialBuildings].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Industrial Buildings in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>What Are Industrial Buildings?</h5>
        <p>
          Industrial Buildings are large-scale premises designed for operations that need both storage and administrative setups.
          These are typically used for:
        </p>
        <ul>
          <li>✔️ Warehousing + Office Mix</li>
          <li>✔️ Heavy-Duty Equipment Setup</li>
          <li>✔️ Production with utility support (electricity, water, loading bays)</li>
        </ul>
        <p>Ideal for businesses needing more floor space and infrastructure support compared to regular factories.</p>
      </section>

      {/* Section 2: Listings */}
      <section className="mb-5">
        <h5>Available Industrial Buildings</h5>
        <Row className="g-4">
          {properties.map((building, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={building.image} alt={building.title} />
                <Card.Body>
                  <Card.Title className="property-title">{building.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {building.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {building.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {building.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {building.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {building.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Industrial Buildings</h5>
        <Form className="filter-box mt-4">
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select>
                <option>Rent</option>
                <option>Buy</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Property Type</Form.Label>
              <Form.Control value="Industrial Building" readOnly />
            </Col>
            <Col md={3}>
              <Form.Label>Area From (sq.ft.)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Area To (sq.ft.)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Budget Min (₹)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Budget Max (₹)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control type="text" placeholder="Enter Mobile" />
              <Button variant="outline-primary" size="sm" className="mt-1">Send OTP</Button>
            </Col>
            <Col md={3}>
              <Form.Label>Enter OTP</Form.Label>
              <Form.Control type="text" placeholder="1234" />
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button className="submit-btn">Search Industrial Buildings</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default IndustrialBuildings;