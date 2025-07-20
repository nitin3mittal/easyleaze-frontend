import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Dwarka Property Market in 2025: What to Expect?',
    image: '/images/blog1.jpg',
    date: 'July 2025',
    excerpt:
      'A quick look into price trends, rental demand, and infrastructure updates expected in Dwarka this year...',
    slug: '/blogs/dwarka-property-market-2025',
  },
  {
    title: 'Step-by-Step Guide to Buying Your First Home',
    image: '/images/blog2.jpg',
    date: 'June 2025',
    excerpt:
      'If you’re a first-time buyer in Delhi NCR, this beginner-friendly guide explains every step clearly...',
    slug: '/blogs/buying-first-home-dwarka',
  },
  {
    title: 'Top 5 Residential Sectors to Invest in Dwarka',
    image: '/images/blog3.jpg',
    date: 'May 2025',
    excerpt:
      'Explore the most promising residential sectors in Dwarka for 1BHK, 2BHK, and investment opportunities...',
    slug: '/blogs/top-sectors-to-invest',
  },
];

const BlogCity = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">EasyLeaze Blogs & City Updates</h2>
      <p className="text-muted text-center mb-4">
        Latest insights, guides, and updates about property trends in Dwarka & Delhi NCR.
      </p>

      <Row className="g-4">
        {blogPosts.map((post, index) => (
          <Col md={4} key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
                <Card.Text>{post.excerpt}</Card.Text>
                <Link to={post.slug}>
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

export default BlogCity;