import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyPlots = [
  {
    title: '100 sq.yards Plot in Sector 19',
    image: '/images/plot1.jpg',
    status: 'For Sale',
    category: 'Plot',
    type: 'Residential Plot',
    price: '₹75 Lakhs',
    area: '900 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Corner Plot near Metro in Sector 23',
    image: '/images/plot2.jpg',
    status: 'For Sale',
    category: 'Plot',
    type: 'Residential Plot',
    price: '₹1.2 Cr',
    area: '1500 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Affordable Plot in Sector 21B',
    image: '/images/plot3.jpg',
    status: 'For Sale',
    category: 'Plot',
    type: 'Residential Plot',
    price: '₹52 Lakhs',
    area: '800 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Park Facing Plot in Sector 8',
    image: '/images/plot4.jpg',
    status: 'For Sale',
    category: 'Plot',
    type: 'Residential Plot',
    price: '₹95 Lakhs',
    area: '1200 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Plot with Dual Road Access in Sector 17',
    image: '/images/plot5.jpg',
    status: 'For Sale',
    category: 'Plot',
    type: 'Residential Plot',
    price: '₹1.6 Cr',
    area: '1800 sq.ft.',
    availability: 'Within 1 Month',
  },
];

const Plots = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyPlots].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Residential Plots in Dwarka</h2>

      {/* Section 1: About Plots */}
      <section className="mb-5">
        <h5>Why Invest in Plots?</h5>
        <p>
          Plots provide flexibility to build your dream home the way you want. They also offer long-term land appreciation and fewer restrictions compared to ready apartments or floors.
        </p>
        <p>In Dwarka, plots are ideal for:</p>
        <ul>
          <li>✔️ Builders & developers</li>
          <li>✔️ Long-term investment seekers</li>
          <li>✔️ Individuals planning to build custom homes</li>
        </ul>
        <p>
          Top plot locations in Dwarka include Sector 8, 19, 21B, and 23 where you’ll find multiple size options with road access and legal clearance.
        </p>
      </section>

      {/* Section 2: Plot Listings */}
      <section className="mb-5">
        <h5>Available Residential Plots</h5>
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
        <h5>Search Plots</h5>
        <Form className="filter-box mt-4">
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select><option>Buy</option><option>Rent</option></Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Plot Size From (sq.ft.)</Form.Label>
              <Form.Control type="number" />
            </Col>
            <Col md={3}>
              <Form.Label>Plot Size To (sq.ft.)</Form.Label>
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
            <Button className="submit-btn">Search Plots</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Plots;