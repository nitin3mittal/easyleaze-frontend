import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyOffices = [
  {
    title: 'Fully Furnished Office in Sector 11',
    image: '/images/office1.jpg',
    status: 'For Rent',
    type: 'Office',
    price: '₹45,000/month',
    area: '1200 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Corporate Office Space in Sector 18',
    image: '/images/office2.jpg',
    status: 'For Sale',
    type: 'Office',
    price: '₹1.6 Cr',
    area: '2200 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Plug & Play Office in Sector 6',
    image: '/images/office3.jpg',
    status: 'For Rent',
    type: 'Office',
    price: '₹38,000/month',
    area: '1100 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Bare Shell Office - Sector 11 Market',
    image: '/images/office4.jpg',
    status: 'For Sale',
    type: 'Office',
    price: '₹90 Lakhs',
    area: '950 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Startup Hub Space - Sector 6',
    image: '/images/office5.jpg',
    status: 'For Rent',
    type: 'Office',
    price: '₹50,000/month',
    area: '1500 sq.ft.',
    availability: 'Immediate',
  },
];

const Offices = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyOffices].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Offices in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>What Are Offices?</h5>
        <p>
          Offices include spaces designed for corporates, consultants, agencies, and startups.
        </p>
        <p>In Dwarka, Office Spaces offer:</p>
        <ul>
          <li>✔️ Prime sectors with metro & road access</li>
          <li>✔️ Small to large office layout options</li>
          <li>✔️ Plug & Play or bare shell units</li>
        </ul>
        <p>Key Locations: Sector 6, Sector 11, Sector 18 and nearby business zones.</p>
      </section>

      {/* Section 2: Office Cards */}
      <section className="mb-5">
        <h5>Available Office Listings</h5>
        <Row className="g-4">
          {properties.map((office, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={office.image} alt={office.title} />
                <Card.Body>
                  <Card.Title className="property-title">{office.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {office.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {office.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {office.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {office.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {office.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Office Spaces</h5>
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
              <Form.Control value="Office" readOnly />
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
            <Button className="submit-btn">Search Offices</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Offices;