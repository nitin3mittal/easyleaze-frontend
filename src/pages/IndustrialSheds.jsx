import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummySheds = [
  {
    title: 'Light Manufacturing Shed in Najafgarh Industrial Area',
    image: '/images/shed1.jpg',
    status: 'For Rent',
    type: 'Industrial Shed',
    price: '₹65,000/month',
    area: '4500 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Assembly Unit Shed – Sector 26',
    image: '/images/shed2.jpg',
    status: 'For Sale',
    type: 'Industrial Shed',
    price: '₹2.2 Cr',
    area: '7000 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Corner Industrial Shed with Office Cabin',
    image: '/images/shed3.jpg',
    status: 'For Rent',
    type: 'Industrial Shed',
    price: '₹80,000/month',
    area: '5000 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Pre-Fab Shed near Dwarka Expressway',
    image: '/images/shed4.jpg',
    status: 'For Sale',
    type: 'Industrial Shed',
    price: '₹3 Cr',
    area: '9000 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Budget-Friendly Shed for Storage & Assembly',
    image: '/images/shed5.jpg',
    status: 'For Rent',
    type: 'Industrial Shed',
    price: '₹55,000/month',
    area: '4000 sq.ft.',
    availability: 'Immediate',
  },
];

const IndustrialSheds = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummySheds].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Industrial Sheds in Dwarka & Nearby</h2>

      {/* Section 1: Description */}
      <section className="mb-5">
        <h5>What Are Industrial Sheds?</h5>
        <p>
          Industrial Sheds are pre-built, open-space structures ideal for:
        </p>
        <ul>
          <li>✔️ Light manufacturing</li>
          <li>✔️ Assembling units</li>
          <li>✔️ Storage and logistics operations</li>
        </ul>
        <p>
          These sheds often include high ceilings, wide gates, loading areas, and minimal interior partitions —
          perfect for businesses needing space flexibility.
        </p>
        <p>
          Common areas include Dwarka’s adjoining industrial clusters: Sector 26, Najafgarh Industrial Belt, Dabri Road, and Expressway access zones.
        </p>
      </section>

      {/* Section 2: Property Listings */}
      <section className="mb-5">
        <h5>Available Industrial Sheds</h5>
        <Row className="g-4">
          {properties.map((shed, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={shed.image} alt={shed.title} />
                <Card.Body>
                  <Card.Title className="property-title">{shed.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {shed.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {shed.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {shed.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {shed.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {shed.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Industrial Sheds</h5>
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
              <Form.Control value="Industrial Shed" readOnly />
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
            <Button className="submit-btn">Search Industrial Sheds</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default IndustrialSheds;