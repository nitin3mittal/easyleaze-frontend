import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyFactories = [
  {
    title: 'Textile Factory in Najafgarh Industrial Zone',
    image: '/images/factory1.jpg',
    status: 'For Sale',
    type: 'Factory',
    price: '₹3.8 Cr',
    area: '8500 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Small Manufacturing Unit - Dabri Road',
    image: '/images/factory2.jpg',
    status: 'For Rent',
    type: 'Factory',
    price: '₹1.2 Lakhs/month',
    area: '6000 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Factory Shed - Dwarka Border Area',
    image: '/images/factory3.jpg',
    status: 'For Sale',
    type: 'Factory',
    price: '₹2.9 Cr',
    area: '7000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Export Unit - Industrial Belt Sector 26',
    image: '/images/factory4.jpg',
    status: 'For Rent',
    type: 'Factory',
    price: '₹95,000/month',
    area: '5500 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Packaging Factory Near Expressway',
    image: '/images/factory5.jpg',
    status: 'For Rent',
    type: 'Factory',
    price: '₹1.5 Lakhs/month',
    area: '7500 sq.ft.',
    availability: 'Immediate',
  },
];

const Factories = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyFactories].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Factories in Dwarka & Nearby</h2>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h5>What Are Factories?</h5>
        <p>
          Factories are industrial units designed for production, packaging, assembly, or export-import purposes. These are perfect for:
        </p>
        <ul>
          <li>✔️ Manufacturing businesses</li>
          <li>✔️ Export-import setups</li>
          <li>✔️ Processing & industrial automation</li>
        </ul>
        <p>Key factory zones near Dwarka include:</p>
        <ul>
          <li>✔️ Dwarka Expressway Border Areas</li>
          <li>✔️ Najafgarh Industrial Belt</li>
          <li>✔️ Dabri, Nangli Sakrawati, and Sector 26 industrial clusters</li>
        </ul>
      </section>

      {/* Section 2: Factory Cards */}
      <section className="mb-5">
        <h5>Available Factory Listings</h5>
        <Row className="g-4">
          {properties.map((factory, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={factory.image} alt={factory.title} />
                <Card.Body>
                  <Card.Title className="property-title">{factory.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {factory.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {factory.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {factory.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {factory.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {factory.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Factory Properties</h5>
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
              <Form.Control value="Factory" readOnly />
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
            <Button className="submit-btn">Search Factories</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Factories;