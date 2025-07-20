import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const policyPosts = [
  {
    title: 'New RERA Compliance Rules in Delhi (2025)',
    image: '/images/policy1.jpg',
    date: 'July 2, 2025',
    excerpt:
      'Delhi RERA body introduces stricter timelines and penalties for delayed project delivery and builder compliance...',
    slug: '/blogs-policies/rera-delhi-updates-2025',
  },
  {
    title: 'Stamp Duty Concession for Women Buyers Extended',
    image: '/images/policy2.jpg',
    date: 'June 25, 2025',
    excerpt:
      'Women buyers in Delhi continue to get 1-2% rebate in stamp duty. Details of eligibility and documentation...',
    slug: '/blogs-policies/stamp-duty-concession-women',
  },
  {
    title: 'DDA Master Plan 2041 – Impact on Dwarka Sectors',
    image: '/images/policy3.jpg',
    date: 'June 10, 2025',
    excerpt:
      'How the new DDA Master Plan 2041 will change residential development, metro access, and green area norms...',
    slug: '/blogs-policies/dda-masterplan-2041-dwarka',
  },
];

const BlogsPolicies = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Policy Updates & Legal Changes</h2>
      <p className="text-muted text-center mb-4">
        Stay updated on RERA rules, stamp duty laws, housing policy changes and legal updates that affect property buyers and sellers.
      </p>

      <Row className="g-4">
        {policyPosts.map((post, index) => (
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

export default BlogsPolicies;