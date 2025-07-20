import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyHouses = [
  {
    title: 'Elegant 4 BHK Villa in Sector 17',
    image: '/images/house1.jpg',
    status: 'For Sale',
    category: '4 BHK',
    type: 'Independent House',
    price: '₹3.25 Cr',
    area: '2800 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: '2 BHK Bungalow with Garden in Sector 21',
    image: '/images/house2.jpg',
    status: 'For Sale',
    category: '2 BHK',
    type: 'Independent House',
    price: '₹1.85 Cr',
    area: '1800 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Premium 3 BHK House in Sector 8',
    image: '/images/house3.jpg',
    status: 'For Rent',
    category: '3 BHK',
    type: 'Independent House',
    price: '₹45,000/month',
    area: '2200 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Affordable 1 BHK Independent Unit in Sector 8',
    image: '/images/house4.jpg',
    status: 'For Sale',
    category: '1 BHK',
    type: 'Independent House',
    price: '₹95 Lakhs',
    area: '900 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Spacious 5 BHK Mansion in Sector 17',
    image: '/images/house5.jpg',
    status: 'For Sale',
    category: '5 BHK',
    type: 'Independent House',
    price: '₹4.5 Cr',
    area: '3500 sq.ft.',
    availability: 'Immediate',
  },
];

const IndependentHouses = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyHouses].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Independent Houses in Dwarka</h2>

      {/* Section 1: Description */}
      <section className="mb-5">
        <h5>What are Independent Houses?</h5>
        <p>
          Independent Houses, also known as Villas or Bungalows, are standalone homes offering complete privacy with land ownership. These homes generally come with private parking, gardens, and no shared walls.
        </p>
        <p>In Dwarka, Independent Houses are located in prime sectors, suitable for:</p>
        <ul>
          <li>✔️ High-budget buyers</li>
          <li>✔️ Investors seeking land appreciation</li>
          <li>✔️ Those needing larger living spaces and independence</li>
        </ul>
        <p>
          Popular locations in Dwarka for Independent Houses include Sector 8, Sector 17, and Sector 21.
        </p>
      </section>

      {/* Section 2: Properties */}
      <section className="mb-5">
        <h5>Available Independent Houses</h5>
        <Row className="g-4">
          {properties.map((prop, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={prop.image} alt={prop.title} />
                <Card.Body>
                  <Card.Title className="property-title">{prop.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {prop.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {prop.type}</Card.Text>
                  <Card.Text><strong>Category:</strong> {prop.category}</Card.Text>
                  <Card.Text><strong>Price:</strong> {prop.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {prop.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {prop.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Filter */}
      <section>
        <h5>Search Independent Houses</h5>
        <Form className="filter-box mt-4">
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select><option>Rent</option><option>Buy</option></Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option><option>5 BHK</option>
              </Form.Select>
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
            <Button className="submit-btn">Search Properties</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default IndependentHouses;