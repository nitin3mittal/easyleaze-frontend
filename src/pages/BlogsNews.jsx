import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';

const newsPosts = [
  {
    title: 'Dwarka Expressway Completion Announced – October 2025',
    image: '/images/news1.jpg',
    date: 'July 12, 2025',
    excerpt: 'Govt confirms Dwarka Expressway to be fully operational by Oct 2025. Impact expected on property prices...',
    slug: '/blogs-news/dwarka-expressway-update',
  },
  {
    title: 'DDA Launches New Housing Scheme – July 2025',
    image: '/images/news2.jpg',
    date: 'July 8, 2025',
    excerpt: 'Delhi Development Authority (DDA) announces new housing draw for middle-income buyers. Online application started...',
    slug: '/blogs-news/dda-housing-july-2025',
  },
  {
    title: 'Delhi Metro Magenta Line Extended to Dwarka Sector 25',
    image: '/images/news3.jpg',
    date: 'July 1, 2025',
    excerpt: 'Magenta Line metro connectivity boosts value of sectors 21, 23, and nearby areas...',
    slug: '/blogs-news/magenta-line-dwarka-extension',
  },
];

const BlogNews = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Real Estate News & Updates</h2>
      <p className="text-muted text-center mb-4">
        Stay up to date with official notifications, property news, and infrastructure updates in Dwarka & Delhi NCR.
      </p>

      <Row className="g-4">
        {newsPosts.map((post, index) => (
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

export default BlogNews;