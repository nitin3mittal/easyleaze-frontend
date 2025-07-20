import React from 'react';
import { Container, Row, Col, Card, Badge, Button, Form } from 'react-bootstrap';
import '../App.css';
import placeholderImage from '../assets/no-image.jpg';

const PropertyDetails = () => {
  // Static mock data for now (to be fetched from backend in future)
  const property = {
    code: 'R00123',
    title: 'Spacious 2BHK Society Flat in Sector 12 Dwarka',
    purpose: 'Rent',
    postedDate: 'July 12, 2025',
    type: 'Residential',
    subType: 'Society Flat',
    superArea: '1250 Sq.Ft',
    carpetArea: '1050 Sq.Ft',
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: 'Semi-Furnished',
    floor: 3,
    totalFloors: 8,
    age: '5–10 years',
    ownership: 'Freehold',
    rera: 'Yes',
    reraNo: 'DLRERA123456',
    description: 'A well-maintained 2BHK flat with park-facing balcony, modular kitchen and 24x7 water supply.',
    amenities: [
      'Parking',
      'Visitor Parking',
      'Lift',
      'Power Backup',
      'Security',
      'Park/Garden',
    ],
    price: '₹22,000/month',
    negotiable: 'Yes',
    maintenance: '₹1,000/month',
    availableFrom: '2025-08-01',
    city: 'Delhi',
    area: 'Dwarka Sector 12',
    address: 'Flat No. XX, XYZ Apartments, Dwarka Sector 12',
    landmark: 'Near Metro Station',
    lat: '',
    lng: '',
    images: [],
    floorPlan: '',
    video: '',
  };

  return (
    <Container className="py-5">
      {/* 1. Header */}
      <h2 className="mb-2">{property.title}</h2>
      <p className="text-muted">
        <strong>Property Code:</strong> {property.code} | <strong>Purpose:</strong> {property.purpose} | <strong>Posted:</strong> {property.postedDate}
      </p>

      {/* 2. Image Gallery */}
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={property.images.length ? property.images[0] : placeholderImage}
          alt="Property Image"
        />
      </Card>

      {/* 3. Key Highlights */}
      <Row className="g-3 mb-4">
        <Col md={3}><Badge bg="info">Type: {property.type}</Badge></Col>
        <Col md={3}><Badge bg="secondary">Sub-Type: {property.subType}</Badge></Col>
        <Col md={3}><Badge bg="light" text="dark">Area: {property.superArea}</Badge></Col>
        <Col md={3}><Badge bg="light" text="dark">Carpet: {property.carpetArea}</Badge></Col>
        <Col md={3}><Badge bg="dark">Bedrooms: {property.bedrooms}</Badge></Col>
        <Col md={3}><Badge bg="dark">Bathrooms: {property.bathrooms}</Badge></Col>
        <Col md={3}><Badge bg="dark">Balconies: {property.balconies}</Badge></Col>
        <Col md={3}><Badge bg="dark">Furnishing: {property.furnishing}</Badge></Col>
        <Col md={3}><Badge bg="dark">Floor: {property.floor}/{property.totalFloors}</Badge></Col>
        <Col md={3}><Badge bg="dark">Age: {property.age}</Badge></Col>
        <Col md={3}><Badge bg="dark">Ownership: {property.ownership}</Badge></Col>
        <Col md={3}><Badge bg="dark">RERA: {property.rera} {property.reraNo}</Badge></Col>
      </Row>

      {/* 4. Description */}
      <Card className="p-4 mb-4">
        <h5>Description</h5>
        <p>{property.description}</p>
        <h6>Amenities:</h6>
        <ul>
          {property.amenities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Card>

      {/* 5. Price & Availability */}
      <Card className="p-4 mb-4">
        <h5>Price & Availability</h5>
        <p><strong>Price:</strong> {property.price} ({property.negotiable === 'Yes' ? 'Negotiable' : 'Fixed'})</p>
        <p><strong>Maintenance:</strong> {property.maintenance}</p>
        <p><strong>Available From:</strong> {property.availableFrom}</p>
      </Card>

      {/* 6. Location Info */}
      <Card className="p-4 mb-4">
        <h5>Location</h5>
        <p><strong>City:</strong> {property.city}</p>
        <p><strong>Area:</strong> {property.area}</p>
        <p><strong>Landmark:</strong> {property.landmark}</p>
        <p><strong>Exact Address:</strong> (Hidden for Privacy)</p>
      </Card>

      {/* 7. Contact Form */}
      <Card className="p-4 mb-4">
        <h5>Interested in this Property?</h5>
        <Form>
          <Row className="g-3">
            <Col md={6}><Form.Control placeholder="Your Name" required /></Col>
            <Col md={6}><Form.Control placeholder="Mobile Number" required /></Col>
            <Col md={12}><Form.Control placeholder="Email (Optional)" /></Col>
            <Col md={12}><Form.Control as="textarea" placeholder="Your Message" rows={3} /></Col>
            <Col md={12}><Button variant="primary">Submit Inquiry</Button></Col>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default PropertyDetails;