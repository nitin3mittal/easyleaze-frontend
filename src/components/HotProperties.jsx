import { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../App.css';

const HotProperties = () => {
  const properties = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Rent',
      category: '2BHK',
      type: 'Society Flat',
      price: '₹ 32K',
      area: '850 sq. ft.',
      location: 'Sector-10 Dwarka',
      availability: 'Ready to Move'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Buy',
      category: '3BHK',
      type: 'Builder Floor',
      price: '₹ 1.2 Cr',
      area: '1250 sq. ft.',
      location: 'Sector-12 Dwarka',
      availability: 'Next Month'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Rent',
      category: '1BHK',
      type: 'Independent House',
      price: '₹ 20K',
      area: '600 sq. ft.',
      location: 'Sector-7 Dwarka',
      availability: '15 Days'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Buy',
      category: '4BHK',
      type: 'Builder Floor',
      price: '₹ 2 Cr',
      area: '2000 sq. ft.',
      location: 'Sector-5 Dwarka',
      availability: 'Ready to Move'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Rent',
      category: '2BHK',
      type: 'Society Flat',
      price: '₹ 28K',
      area: '900 sq. ft.',
      location: 'Sector-11 Dwarka',
      availability: 'Ready to Move'
    },
    {
      id: 6,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Buy',
      category: '',
      type: 'Shop',
      price: '₹ 80L',
      area: '1500 sq. ft.',
      location: 'Sector-14 Dwarka',
      availability: 'Immediate'
    },
    {
      id: 7,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Rent',
      category: '',
      type: 'Office',
      price: '₹ 40K',
      area: '1100 sq. ft.',
      location: 'Sector-8 Dwarka',
      availability: 'Next Month'
    },
    {
      id: 8,
      image: 'https://via.placeholder.com/300x200',
      status: 'For Buy',
      category: '',
      type: 'Industrial Shed',
      price: '₹ 2.5 Cr',
      area: '2400 sq. ft.',
      location: 'Sector-9 Dwarka',
      availability: 'Ready to Move'
    }
  ];

  const residentialTypes = ['Society Flat', 'Builder Floor', 'Independent House'];

  return (
    <section className="hot-properties-section py-5">
      <Container>
        <h2 className="text-center mb-5">Hot Properties in Dwarka</h2>
        <Row>
          {properties.map((property) => (
            <Col md={3} sm={6} xs={12} key={property.id} className="mb-4">
              <Card className="property-card position-relative">
                <div className="property-image-wrapper">
                  <Card.Img variant="top" src={property.image} />
                  <span className="property-status badge bg-warning text-dark">
                    {property.status}
                  </span>
                </div>
                <Card.Body>
                  <Card.Text className="property-category text-primary fw-bold mb-1">
                    {residentialTypes.includes(property.type)
                      ? `${property.category} | ${property.type}`
                      : property.type}
                  </Card.Text>
                  <Card.Text className="property-price-area mb-1">
                    {property.price} | {property.area}
                  </Card.Text>
                  <Card.Text className="property-location mb-1">
                    {property.location}
                  </Card.Text>
                  <Card.Text className="property-availability text-muted mb-1">
                    {property.availability}
                  </Card.Text>
                  <div className="view-details-overlay">View Details</div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-end">
          <Button variant="link" className="text-primary fw-bold">
            More Options ►
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default HotProperties;