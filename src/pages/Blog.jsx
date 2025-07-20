import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const blogData = [
  {
    title: 'Dwarka Property Market in 2025: What to Expect?',
    image: '/images/blog1.jpg',
    date: 'July 2025',
    excerpt: 'A look into price trends, rental demand, and infrastructure updates expected this year...',
    slug: '/blogs/dwarka-property-market-2025',
  },
  {
    title: 'New RERA Compliance Rules in Delhi',
    image: '/images/policy1.jpg',
    date: 'July 2, 2025',
    excerpt: 'Delhi RERA introduces stricter timelines for delayed project delivery and builder compliance...',
    slug: '/blogs-policies/rera-delhi-updates-2025',
  },
  {
    title: 'DDA Launches New Housing Scheme – July 2025',
    image: '/images/news2.jpg',
    date: 'July 8, 2025',
    excerpt: 'DDA announces new housing draw. Online applications open for middle-income groups...',
    slug: '/blogs-news/dda-housing-july-2025',
  },
  {
    title: 'Freehold vs Leasehold: Which One Should You Buy?',
    image: '/images/blog6.jpg',
    date: 'June 28, 2025',
    excerpt: 'Key differences between freehold and leasehold properties — resale, legal and taxation wise...',
    slug: '/blogs/freehold-vs-leasehold',
  },
];

const Blog = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">EasyLeaze Blog Center</h2>
      <p className="text-muted text-center mb-4">
        Explore all our blog articles, tips, city guides, policy updates, and property news — all in one place.
      </p>

      <Row className="g-4">
        {blogData.map((blog, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={blog.image} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{blog.date}</Card.Subtitle>
                <Card.Text>{blog.excerpt}</Card.Text>
                <Link to={blog.slug}>
                  <Button variant="primary">Read More</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;