import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyWarehouses = [
  {
    title: 'Warehouse near Dwarka Expressway',
    image: '/images/warehouse1.jpg',
    status: 'For Rent',
    type: 'Warehouse',
    price: '₹75,000/month',
    area: '5000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Logistics Hub in Najafgarh Road',
    image: '/images/warehouse2.jpg',
    status: 'For Sale',
    type: 'Warehouse',
    price: '₹3.5 Cr',
    area: '12000 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Storage Unit - Sector 28 Warehouse Zone',
    image: '/images/warehouse3.jpg',
    status: 'For Rent',
    type: 'Warehouse',
    price: '₹1.2 Lakhs/month',
    area: '8000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Affordable Warehouse near Najafgarh',
    image: '/images/warehouse4.jpg',
    status: 'For Sale',
    type: 'Warehouse',
    price: '₹2.8 Cr',
    area: '10000 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Industrial Shed for Lease - Sector 26',
    image: '/images/warehouse5.jpg',
    status: 'For Rent',
    type: 'Warehouse',
    price: '₹85,000/month',
    area: '6000 sq.ft.',
    availability: 'Immediate',
  },
];

const Warehouses = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyWarehouses].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Warehouses in Dwarka</h2>

      {/* Section 1: Introduction */}
      <section className="mb-5">
        <h5>What Are Warehouses?</h5>
        <p>
          Warehouses are industrial or commercial spaces designed for storage and logistics operations. These are used by:
        </p>
        <ul>
          <li>✔️ E-commerce companies</li>
          <li>✔️ Manufacturing units</li>
          <li>✔️ Wholesale & distribution businesses</li>
        </ul>
        <p>Why Dwarka is ideal for Warehousing:</p>
        <ul>
          <li>✔️ Close proximity to Dwarka Expressway & Najafgarh Road</li>
          <li>✔️ Industrial clusters nearby</li>
          <li>✔️ Well-connected transport routes for logistics</li>
        </ul>
        <p>Common locations: Bordering Industrial Areas, Sector 28, Najafgarh Road</p>
      </section>

      {/* Section 2: Warehouse Cards */}
      <section className="mb-5">
        <h5>Available Warehouses</h5>
        <Row className="g-4">
          {properties.map((warehouse, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={warehouse.image} alt={warehouse.title} />
                <Card.Body>
                  <Card.Title className="property-title">{warehouse.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {warehouse.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {warehouse.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {warehouse.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {warehouse.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {warehouse.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Warehouses</h5>
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
              <Form.Control value="Warehouse" readOnly />
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
            <Button className="submit-btn">Search Warehouses</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Warehouses;