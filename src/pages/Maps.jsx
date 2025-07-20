import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const Maps = () => {
  const [view, setView] = useState('markers');

  const handleToggle = () => {
    setView((prev) => (prev === 'markers' ? 'heatmap' : 'markers'));
  };

  return (
    <Container fluid className="my-5">
      <h2>Property Locations Map</h2>
      <Button onClick={handleToggle} variant="primary" className="mb-3">
        Toggle View ({view === 'markers' ? 'Switch to Heatmap' : 'Switch to Markers'})
      </Button>

      {view === 'markers' ? (
        <>
          <h5>Markers View (Dummy)</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1JD1zyClxHxXf7jv2oXJv0xJhJdI3J7Y&ehbc=2E312F"
              allowFullScreen=""
              loading="lazy"
              title="Property Map Markers"
            ></iframe>
          </div>
        </>
      ) : (
        <>
          <h5>Heatmap View (Dummy Simulation)</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=1JD1zyClxHxXf7jv2oXJv0xJhJdI3J7Y&ehbc=2E312F"
              allowFullScreen=""
              loading="lazy"
              title="Property Heatmap"
            ></iframe>
          </div>
          <p className="mt-3 text-muted">
            This is a dummy heatmap. Actual heatmap functionality will be added later.
          </p>
        </>
      )}
    </Container>
  );
};

export default Maps;