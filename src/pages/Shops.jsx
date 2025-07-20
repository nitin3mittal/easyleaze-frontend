import React, { useState, useEffect } from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const dummyShops = [
  {
    title: 'Corner Grocery Shop in Sector 10 Market',
    image: '/images/shop1.jpg',
    status: 'For Rent',
    type: 'Shop',
    price: '₹18,000/month',
    area: '200 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Retail Space for Boutique in Sector 12',
    image: '/images/shop2.jpg',
    status: 'For Sale',
    type: 'Shop',
    price: '₹90 Lakhs',
    area: '350 sq.ft.',
    availability: 'Within 1 Month',
  },
  {
    title: 'Road-Facing Shop in Sector 4',
    image: '/images/shop3.jpg',
    status: 'For Sale',
    type: 'Shop',
    price: '₹1.2 Cr',
    area: '500 sq.ft.',
    availability: 'Negotiable',
  },
  {
    title: 'Compact Salon Space in Sector 6',
    image: '/images/shop4.jpg',
    status: 'For Rent',
    type: 'Shop',
    price: '₹25,000/month',
    area: '300 sq.ft.',
    availability: 'Immediate',
  },
  {
    title: 'Franchise Outlet Space in Sector 10',
    image: '/images/shop5.jpg',
    status: 'For Rent',
    type: 'Shop',
    price: '₹40,000/month',
    area: '800 sq.ft.',
    availability: 'Immediate',
  },
];

const Shops = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const shuffled = [...dummyShops].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 5));
  }, []);

  return (
    <Container className="society-flats-page py-5">
      <h2 className="text-center mb-4">Shops in Dwarka</h2>

      {/* Section 1: Explanation */}
      <section className="mb-5">
        <h5>What Are Shops?</h5>
        <p>
          Shops refer to small retail spaces ideal for businesses like grocery stores, salons, garment shops, etc.
        </p>
        <p>In Dwarka, Shops are highly in demand due to:</p>
        <ul>
          <li>✔️ High footfall in residential sectors</li>
          <li>✔️ Located within shopping complexes or ground floors of residential buildings</li>
          <li>✔️ Suitable for local businesses, franchises, or startups</li>
        </ul>
        <p>Typical Sizes: 100 to 1000 sq. ft.</p>
        <p>Preferred Locations: Sector Markets like Sector 4, Sector 10, Sector 12, etc.</p>
      </section>

      {/* Section 2: Shop Listings */}
      <section className="mb-5">
        <h5>Available Shops</h5>
        <Row className="g-4">
          {properties.map((shop, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="property-card h-100">
                <Card.Img variant="top" src={shop.image} alt={shop.title} />
                <Card.Body>
                  <Card.Title className="property-title">{shop.title}</Card.Title>
                  <Card.Text><strong>Status:</strong> {shop.status}</Card.Text>
                  <Card.Text><strong>Type:</strong> {shop.type}</Card.Text>
                  <Card.Text><strong>Price:</strong> {shop.price}</Card.Text>
                  <Card.Text><strong>Area:</strong> {shop.area}</Card.Text>
                  <Card.Text><strong>Availability:</strong> {shop.availability}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Section 3: Filter */}
      <section>
        <h5>Search Commercial Shops</h5>
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
              <Form.Control value="Shop" readOnly />
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
            <Button className="submit-btn">Search Shops</Button>
          </div>
        </Form>
      </section>
    </Container>
  );
};

export default Shops;