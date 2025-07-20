import React from 'react';
import '../App.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const tools = [
  {
    title: 'EMI Calculator',
    path: '/tools/emi-calculator',
    desc: 'Calculate monthly EMI for your home loan or property purchase.',
    icon: '📊',
  },
  {
    title: 'Area Converter',
    path: '/tools/area-converter',
    desc: 'Convert area units like Sq.Ft., Acres, Bigha, etc.',
    icon: '📐',
  },
  {
    title: 'Price Trend Tracker',
    path: '/tools/price-trends',
    desc: 'Check sector-wise price trends in Dwarka and nearby.',
    icon: '📈',
  },
  {
    title: 'Stamp Duty Calculator',
    path: '/tools/stamp-duty-calculator',
    desc: 'Estimate Delhi stamp duty & registration charges.',
    icon: '🧾',
  },
  {
    title: 'Rental Yield Calculator',
    path: '/tools/rental-yield-calculator',
    desc: 'Know your property’s annual rental return.',
    icon: '🏠',
  },
  {
    title: 'Loan Eligibility Checker',
    path: '/tools/loan-eligibility-checker',
    desc: 'Estimate how much home loan you are eligible for.',
    icon: '💰',
  },
  {
    title: 'Home Affordability Checker',
    path: '/tools/home-affordability-checker',
    desc: 'Check what home value you can afford based on income & savings.',
    icon: '📌',
  },
];

const ToolsLanding = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">EasyLeaze Property Tools</h2>
      <p className="text-center text-muted mb-4">
        Use these free, simple tools to calculate loans, convert areas, and make smart property decisions.
        No login needed.
      </p>

      <Row className="g-4">
        {tools.map((tool, idx) => (
          <Col md={4} sm={6} key={idx}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h3 className="tool-icon text-center">{tool.icon}</h3>
                <Card.Title>{tool.title}</Card.Title>
                <Card.Text>{tool.desc}</Card.Text>
                <div className="text-center mt-3">
                  <Link to={tool.path}>
                    <Button variant="primary">Use Tool</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ToolsLanding;