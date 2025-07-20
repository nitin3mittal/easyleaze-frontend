import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyShowrooms = [
  {
    title: 'Luxury Car Showroom in Sector 21',
    image: '/images/showroom1.jpg',
    status: 'For Rent',
    type: 'Showroom',
    price: '₹2.5 Lakhs/month',
    area: '3500 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Electronics Display Hall in Sector 9',
    image: '/images/showroom2.jpg',
    status: 'For Sale',
    type: 'Showroom',
    price: '₹3.2 Cr',
    area: '4000 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Branded Furniture Showroom in Sector 23',
    image: '/images/showroom3.jpg',
    status: 'For Sale',
    type: 'Showroom',
    price: '₹4 Cr',
    area: '4500 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Road Facing Fashion Retail Space in Sector 9',
    image: '/images/showroom4.jpg',
    status: 'For Rent',
    type: 'Showroom',
    price: '₹1.8 Lakhs/month',
    area: '3000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Ground Floor Branded Outlet - Sector 23',
    image: '/images/showroom5.jpg',
    status: 'For Sale',
    type: 'Showroom',
    price: '₹3.6 Cr',
    area: '3800 sq.ft.',
    availability: 'Within 1 Month',
  },
];

const Showrooms = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyShowrooms].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Showrooms in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>What Are Showrooms?</h5>
        <p>
          Showrooms are larger commercial spaces mainly used by:
        </p>
        <ul>
          <li>✔️ Automobile dealerships</li>
          <li>✔️ Furniture & electronics brands</li>
          <li>✔️ Display-driven retail outlets</li>
        </ul>
        <p>
          In Dwarka, Showrooms attract large brands because of:
        </p>
        <ul>
          <li>✔️ Proximity to highways and metro</li>
          <li>✔️ Large and open floor plans</li>
          <li>✔️ Prestigious commercial sectors like Sector 9, Sector 21, Sector 23</li>
        </ul>
      </section>

      {/* Section 2: Showroom Listings */}
      <section className="mb-5">
        <h5>Available Showroom Listings</h5>
        <Row className="g-4">
          {properties.map((prop, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={prop.image} alt={prop.title} />
                <Card.Body>
                  <Card.Title className="property-title">{prop.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {prop.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {prop.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {prop.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {prop.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {prop.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Showrooms</h5>
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
              <Form.Control value="Showroom" readOnly />
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
            <Button className="submit-btn">Search Showrooms</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Showrooms;