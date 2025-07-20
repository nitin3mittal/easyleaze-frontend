import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    title: 'Stamp Duty Rules in Delhi (2025 Update)',
    image: '/images/blog4.jpg',
    date: 'July 10, 2025',
    excerpt: 'Latest stamp duty charges in Delhi for male/female buyers for residential and commercial properties...',
    slug: '/blogs/stamp-duty-2025-delhi',
  },
  {
    title: 'Why Builder Floors Are a Smart Buy in Sector 7 Dwarka',
    image: '/images/blog5.jpg',
    date: 'July 5, 2025',
    excerpt: 'Builder floors offer privacy, affordability, and high rental yield in prime Dwarka sectors...',
    slug: '/blogs/builder-floor-investment-dwarka',
  },
  {
    title: 'Freehold vs Leasehold: Which One Should You Buy?',
    image: '/images/blog6.jpg',
    date: 'June 28, 2025',
    excerpt: 'Understand the key legal and resale differences between freehold and leasehold property titles...',
    slug: '/blogs/freehold-vs-leasehold',
  },
];

const BlogsLatest = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Latest Blog Posts</h2>
      <p className="text-muted text-center mb-4">
        Stay informed with our most recent posts on property rules, legal tips, and Dwarka market trends.
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

export default BlogsLatest;