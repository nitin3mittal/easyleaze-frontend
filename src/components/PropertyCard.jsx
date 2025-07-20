import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { memo } from 'react';  // ✅ Import memo from React

const PropertyCard = memo(({ property }) => {
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img
        variant="top"
        src={property.image}
        alt={property.title}
        className="img-fluid"
      />
      <Card.Body>
        <Card.Title>{property.title}</Card.Title>
        <Card.Text>
          <strong>Price:</strong> ₹{property.price} Lakhs <br />
          <strong>Location:</strong> {property.location}
        </Card.Text>
        <div className="mb-2">
          {property.tags.map((tag, idx) => (
            <span key={idx} className="badge bg-success me-1">
              {tag}
            </span>
          ))}
        </div>
        <Button as={Link} to={`/property/${property.id}`} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
});

export default PropertyCard;  // ✅ Export the memo-wrapped component