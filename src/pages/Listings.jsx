import { Container, Row, Col } from 'react-bootstrap';
import PropertyCard from '../components/PropertyCard';
import FiltersBar from '../components/FiltersBar';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';
import image1 from '../assets/images/property1.jpg';
import image2 from '../assets/images/property2.jpg';
import image3 from '../assets/images/property3.jpg';

// Dummy Properties (Example Data)
const dummyProperties = [
  {
    id: 1,
    title: '2 BHK Apartment in Gurugram',
    price: 45,
    location: 'Sector 56, Gurugram',
    image: image1,
    bhk: '2 BHK',
    furnishing: 'Furnished',
    tags: ['Verified', 'Negotiable']
  },
  {
    id: 2,
    title: '3 BHK Villa in Noida',
    price: 75,
    location: 'Sector 62, Noida',
    image: image2,
    bhk: '3 BHK',
    furnishing: 'Semi-Furnished',
    tags: ['Verified']
  },
  {
    id: 3,
    title: '1 BHK Apartment in Hyderabad',
    price: 30,
    location: 'Madhapur, Hyderabad',
    image: image3,
    bhk: '1 BHK',
    furnishing: 'Unfurnished',
    tags: []
  }
];

const Listings = () => {
  const [filteredProperties, setFilteredProperties] = useState(dummyProperties);

  const handleFilter = ({ bhk, furnishing, price, sort }) => {
    let filtered = [...dummyProperties];

    if (bhk) filtered = filtered.filter(item => item.bhk === bhk);
    if (furnishing) filtered = filtered.filter(item => item.furnishing === furnishing);
    if (price) filtered = filtered.filter(item => item.price <= parseInt(price));

    if (sort) {
      if (sort === 'newest') {
        filtered = filtered.reverse();
      } else if (sort === 'low-high') {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sort === 'high-low') {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProperties(filtered);
  };

  return (
    <Container fluid className="my-5">
      <Row>
        <Col md={3}>
          <h4>Filters</h4>
          <FiltersBar onFilter={handleFilter} />
        </Col>
        <Col md={9}>
          <h4>Listings</h4>
          <Row>
            {filteredProperties.map(property => (
              <Col md={6} lg={4} key={property.id}>
                <LazyLoad height={200} offset={100} once>
                  <PropertyCard property={property} />
                </LazyLoad>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Listings;