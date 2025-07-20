// src/components/PropertyTypeBlock.jsx
import { Container, Button } from 'react-bootstrap';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const propertyTypes = [
  { name: 'Society Flats', image: '/images/society-flat.jpg', count: 12, path: '/residential/society-flats' },
  { name: 'Builder Floor', image: '/images/builder-floor.jpg', count: 8, path: '/residential/builder-floors' },
  { name: 'Independent House', image: '/images/independent-house.jpg', count: 5, path: '/residential/independent-houses' },
  { name: 'Plot', image: '/images/plot.jpg', count: 10, path: '/residential/plots' },
  { name: 'Shop', image: '/images/shop.jpg', count: 7, path: '/commercial/shops' },
  { name: 'Showroom', image: '/images/showroom.jpg', count: 4, path: '/commercial/showrooms' },
  { name: 'Office', image: '/images/office.jpg', count: 9, path: '/commercial/offices' },
  { name: 'Warehouse', image: '/images/warehouse.jpg', count: 6, path: '/commercial/warehouses' },
  { name: 'Factory', image: '/images/factory.jpg', count: 2, path: '/commercial/factories' },
  { name: 'Industrial Building', image: '/images/industrial-building.jpg', count: 3, path: '/commercial/industrial-buildings' },
  { name: 'Industrial Shed', image: '/images/industrial-shed.jpg', count: 4, path: '/commercial/industrial-sheds' },
  { name: 'Land', image: '/images/land.jpg', count: 15, path: '/commercial/land' }
];

const PropertyTypeBlock = () => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    const scrollAmount = 300;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  const handleClick = (type) => {
    if (type.path) {
      navigate(type.path);
    }
  };

  return (
    <section className="property-type-section my-5">
      <Container>
        <h2 className="text-center mb-4">Explore Property Types</h2>
        <div className="d-flex align-items-center">
          <Button variant="light" onClick={() => handleScroll('left')}>
            <i className="bi bi-chevron-left"></i>
          </Button>
          <div className="scroll-container mx-2" ref={scrollRef}>
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                className="property-card"
                onClick={() => handleClick(type)}
                role="button"
              >
                <h5 className="property-title">{type.name}</h5>
                <div className="property-image">
                  <img src={type.image} alt={type.name} />
                </div>
                <p className="property-count">
                  {type.count} Properties Available
                </p>
              </div>
            ))}
          </div>
          <Button variant="light" onClick={() => handleScroll('right')}>
            <i className="bi bi-chevron-right"></i>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PropertyTypeBlock;