import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyBuilderFloors = [
  {
    title: 'Spacious 3 BHK in Sector 7',
    image: '/images/builder1.jpg',
    status: 'For Sale',
    category: '3 BHK',
    type: 'Builder Floor',
    price: '₹1.25 Cr',
    area: '1650 sq.ft. (Super)',
    availability: 'Immediate',
  },
  {
    title: '2 BHK Independent Floor in Sector 19',
    image: '/images/builder2.jpg',
    status: 'For Rent',
    category: '2 BHK',
    type: 'Builder Floor',
    price: '₹22,000/month',
    area: '1100 sq.ft. (Carpet)',
    availability: 'Within 1 Month',
  },
  {
    title: 'Luxury 4 BHK in Sector 23',
    image: '/images/builder3.jpg',
    status: 'For Sale',
    category: '4 BHK',
    type: 'Builder Floor',
    price: '₹1.85 Cr',
    area: '2000 sq.ft. (Super)',
    availability: 'Negotiable',
  },
  {
    title: 'Affordable 1 BHK Floor in Sector 19B',
    image: '/images/builder4.jpg',
    status: 'For Sale',
    category: '1 BHK',
    type: 'Builder Floor',
    price: '₹48 Lakhs',
    area: '700 sq.ft. (Carpet)',
    availability: 'Immediate',
  },
  {
    title: '3 BHK Builder Floor in Sector 7',
    image: '/images/builder5.jpg',
    status: 'For Rent',
    category: '3 BHK',
    type: 'Builder Floor',
    price: '₹30,000/month',
    area: '1450 sq.ft. (Super)',
    availability: 'Immediate',
  },
];

const BuilderFloors = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyBuilderFloors].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Builder Floors in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>What are Builder Floors?</h5>
        <p>
          Builder Floors are independent residential floors built on individual plots, often offering more privacy and customization than apartments. They generally have 1 to 4 floors with 1 or 2 apartments per floor.
        </p>
        <p>In Dwarka, Builder Floors are ideal for:</p>
        <ul>
          <li>✔️ Families preferring independent living</li>
          <li>✔️ Buyers seeking affordable alternatives to villas</li>
          <li>✔️ People looking for more carpet area and fewer maintenance costs</li>
        </ul>
        <p>
          Dwarka sectors like Sector 7, Sector 19, Sector 23, etc., offer excellent options for Builder Floors in different budgets.
        </p>
      </section>

      {/* Section 2: Property Cards */}
      <section className="mb-5">
        <h5>Available Builder Floors</h5>
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

      {/* Section 3: Search Filter */}
      <section>
        <h5>Search Builder Floors</h5>
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

export default BuilderFloors;