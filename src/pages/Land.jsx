import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyLand = [
  {
    title: 'Commercial Land for Retail Development – Sector 21',
    image: '/images/land1.jpg',
    status: 'For Sale',
    type: 'Land',
    price: '₹5.5 Cr',
    area: '1000 sq. yards',
    availability: 'Immediate',
  },
  {
    title: 'Plot for Lease – Near Dwarka Expressway',
    image: '/images/land2.jpg',
    status: 'For Rent',
    type: 'Land',
    price: '₹1.1 Lakhs/month',
    area: '1500 sq. yards',
    availability: 'Within 1 Month',
  },
  {
    title: 'Corner Commercial Plot – Najafgarh Road',
    image: '/images/land3.jpg',
    status: 'For Sale',
    type: 'Land',
    price: '₹3.9 Cr',
    area: '800 sq. yards',
    availability: 'Negotiable',
  },
  {
    title: 'Open Plot for Showroom Development – Sector 23',
    image: '/images/land4.jpg',
    status: 'For Sale',
    type: 'Land',
    price: '₹6 Cr',
    area: '1200 sq. yards',
    availability: 'Immediate',
  },
  {
    title: 'Commercial Land for Lease – Sector 20 Market Zone',
    image: '/images/land5.jpg',
    status: 'For Rent',
    type: 'Land',
    price: '₹95,000/month',
    area: '900 sq. yards',
    availability: 'Immediate',
  },
];

const Land = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyLand].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Commercial Land in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>Why Choose Commercial Land?</h5>
        <p>
          Commercial Land is ideal for buyers or investors looking to build:
        </p>
        <ul>
          <li>✔️ Retail Outlets</li>
          <li>✔️ Warehouses or Industrial Units</li>
          <li>✔️ Office Complexes or Showrooms</li>
        </ul>
        <p>
          In Dwarka, key zones for commercial land include:
        </p>
        <ul>
          <li>✔️ Sector 21, 23, and 26</li>
          <li>✔️ Najafgarh Road & Dabri</li>
          <li>✔️ Expressway-access plots</li>
        </ul>
        <p>
          Land transactions can be for outright **sale** or **long-term lease**, depending on project requirements.
        </p>
      </section>

      {/* Section 2: Property Cards */}
      <section className="mb-5">
        <h5>Available Commercial Plots</h5>
        <Row className="g-4">
          {properties.map((land, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={land.image} alt={land.title} />
                <Card.Body>
                  <Card.Title className="property-title">{land.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {land.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {land.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {land.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {land.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {land.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Commercial Land</h5>
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
              <Form.Control value="Land" readOnly />
            </Col>
            <Col md={3}>
              <Form.Label>Area From (sq. yards)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Area To (sq. yards)</Form.Label>
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
            <Button className="submit-btn">Search Land</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Land;