import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyProperties = [
  {
    title: 'Spacious 2 BHK in Sector 10',
    image: '/images/sample1.jpg',
    status: 'For Sale',
    category: '2 BHK',
    type: 'Society Flat',
    price: '₹85 Lakhs',
    area: '1100 sq.ft. (Super)',
    availability: 'Immediate',
  },
  {
    title: 'Fully Furnished 3 BHK in Sector 12',
    image: '/images/sample2.jpg',
    status: 'For Rent',
    category: '3 BHK',
    type: 'Society Flat',
    price: '₹28,000/month',
    area: '1350 sq.ft. (Carpet)',
    availability: 'Within 1 Month',
  },
  {
    title: 'Affordable 1 BHK near Sector 6',
    image: '/images/sample3.jpg',
    status: 'For Sale',
    category: '1 BHK',
    type: 'Society Flat',
    price: '₹45 Lakhs',
    area: '600 sq.ft. (Carpet)',
    availability: 'Immediate',
  },
  {
    title: '3 BHK Luxury Flat in Sector 22',
    image: '/images/sample4.jpg',
    status: 'For Sale',
    category: '3 BHK',
    type: 'Society Flat',
    price: '₹1.1 Cr',
    area: '1550 sq.ft. (Super)',
    availability: 'Negotiable',
  },
  {
    title: '2 BHK Rent in Sector 9',
    image: '/images/sample5.jpg',
    status: 'For Rent',
    category: '2 BHK',
    type: 'Society Flat',
    price: '₹25,000/month',
    area: '1000 sq.ft. (Carpet)',
    availability: 'Immediate',
  },
];

const SocietyFlats = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyProperties].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Society Flats in Dwarka</h2>

      <section className="mb-5">
        <h5>What are Society Flats?</h5>
        <p>
          Society Flats are residential apartments developed within a gated community or cooperative society. These flats offer shared amenities like security, parks, parking, power backup, lifts, and community halls.
        </p>
        <p>
          In Dwarka, Society Flats are among the most popular residential options due to:
        </p>
        <ul>
          <li>✔️ Well-planned sectors & wide roads</li>
          <li>✔️ Gated security</li>
          <li>✔️ Better connectivity to metro & airport</li>
          <li>✔️ Affordable options for families & working professionals</li>
        </ul>
        <p>
          Many Dwarka sectors like Sector 6, Sector 10, Sector 12, Sector 22, etc., have well-established Society Flats offering 1 BHK to 4 BHK homes with a mix of resale and rental options.
        </p>
      </section>

      <section className="mb-5">
        <h5>Available Society Flats (Auto-Rotating)</h5>
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

      <section>
        <h5>Search Flats</h5>
        <Form className="filter-box mt-4">
          <Row className="g-3">
            <Col md={3}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select><option>Rent</option><option>Buy</option></Form.Select>
            </Col>
            <Col md={3}>
              <Form.Label>Category</Form.Label>
              <Form.Select><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK</option></Form.Select>
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

export default SocietyFlats;