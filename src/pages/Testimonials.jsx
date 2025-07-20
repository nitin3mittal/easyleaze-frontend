import React from 'react';
import '../App.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    rating: '⭐⭐⭐⭐⭐',
    text: 'EasyLeaze helped me find the perfect apartment in Dwarka. The entire process was smooth and transparent.',
    author: 'Rahul Sharma, Dwarka Resident',
  },
  {
    rating: '⭐⭐⭐⭐⭐',
    text: 'We listed our shop for rent, and within days we got serious inquiries. Highly recommended!',
    author: 'Meena Gupta, Shop Owner',
  },
  {
    rating: '⭐⭐⭐⭐⭐',
    text: 'The team at EasyLeaze provided excellent legal documentation support for my property sale.',
    author: 'Sunil Verma, Property Seller',
  },
];

const Testimonials = () => {
  return (
    <Container className="testimonials-page py-5">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <p className="lead text-center mb-5">
        Here are some words from our satisfied clients:
      </p>

      <Row className="g-4">
        {testimonials.map((item, idx) => (
          <Col md={4} sm={6} key={idx}>
            <Card className="testimonial-card h-100">
              <Card.Body>
                <div className="stars">{item.rating}</div>
                <Card.Text className="testimonial-text">"{item.text}"</Card.Text>
                <Card.Subtitle className="text-muted mt-3">— {item.author}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;