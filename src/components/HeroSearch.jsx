import { useState } from 'react';
import { Container, Row, Col, Form, Button, Tab, Nav } from 'react-bootstrap';
import '../App.css';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
const { Range } = Slider;

const HeroSearch = () => {
  const [purpose, setPurpose] = useState('Rent');
  const [propertyTypeGroup, setPropertyTypeGroup] = useState('Residential');
  const [propertyType, setPropertyType] = useState('');
  const [category, setCategory] = useState('');
  const [locations, setLocations] = useState('');
  const [areaRange, setAreaRange] = useState([0, 1000]);
  const [budgetRange, setBudgetRange] = useState([0, 50000]);

  const propertyOptions = {
    Rent: {
      Residential: ['Society Flat', 'Builder Floor', 'Independent House'],
      Commercial: ['Shop', 'Office', 'Warehouse', 'Factory', 'Industrial Building', 'Industrial Shed', 'Land'],
    },
    Buy: {
      Residential: ['Society Flat', 'Builder Floor', 'Independent House', 'Plot'],
      Commercial: ['Shop', 'Showroom', 'Office', 'Warehouse', 'Factory', 'Industrial Building', 'Industrial Shed', 'Land'],
    },
  };

  const categoryOptions = ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK', '5 BHK+'];

  const handleSearch = () => {
    alert('Search initiated with selected filters.');
  };

  return (
    <div className="hero-section py-5 text-center bg-light">
      <h1 className="mb-4">Find Your Perfect Property in Dwarka</h1>
      <Container>
        <Tab.Container activeKey={purpose} onSelect={(k) => setPurpose(k)}>
          <Nav variant="tabs" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="Rent">Rent</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Buy">Buy</Nav.Link>
            </Nav.Item>
          </Nav>

          <Row className="gx-3 gy-3 align-items-center justify-content-center">
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="Enter locations (comma separated)"
                value={locations}
                onChange={(e) => setLocations(e.target.value)}
              />
            </Col>
            <Col md={3}>
              <Form.Select value={propertyTypeGroup} onChange={(e) => setPropertyTypeGroup(e.target.value)}>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                <option value="">Select Property Type</option>
                {propertyOptions[purpose][propertyTypeGroup].map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={!['Society Flat', 'Builder Floor', 'Independent House'].includes(propertyType)}
              >
                <option value="">Category</option>
                {categoryOptions.map((cat, index) => (
                  <option key={index} value={cat}>{cat}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          {/* ✅ Area & Budget Sliders (rc-slider) */}
          <Row className="gx-3 gy-3 mt-4 align-items-center justify-content-center">
            <Col md={6}>
              <Form.Label>Area (sq. ft.)</Form.Label>
              <div className="d-flex flex-column">
                <Range
                  min={0}
                  max={propertyTypeGroup === 'Residential' ? 10000 : 100000}
                  value={areaRange}
                  onChange={(value) => setAreaRange(value)}
                  allowCross={false}
                />
                <div className="d-flex justify-content-between align-items-center mt-2 gap-2">
                  <span>0</span>
                  <Form.Control
                    type="number"
                    value={Math.max(0, areaRange[0])}
                    min={0}
                    max={propertyTypeGroup === 'Residential' ? 10000 : 100000}
                    onChange={(e) =>
                      setAreaRange([
                        Math.max(0, +e.target.value),
                        areaRange[1]
                      ])
                    }
                  />
                  <span>to</span>
                  <Form.Control
                    type="number"
                    value={Math.max(0, areaRange[1])}
                    min={0}
                    max={propertyTypeGroup === 'Residential' ? 10000 : 100000}
                    onChange={(e) =>
                      setAreaRange([
                        areaRange[0],
                        Math.max(0, +e.target.value)
                      ])
                    }
                  />
                  <span>{propertyTypeGroup === 'Residential' ? '10,000' : '100,000'}</span>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <Form.Label>Budget (In Rupees)</Form.Label>
              <div className="d-flex flex-column">
                <Range
                  min={purpose === 'Buy' ? 100000 : 10000}
                  max={purpose === 'Buy' ? 1000000000 : 1000000}
                  value={budgetRange}
                  onChange={(value) => setBudgetRange(value)}
                  allowCross={false}
                />
                <div className="d-flex justify-content-between align-items-center mt-2 gap-2">
                  <span>Min ₹</span>
                  <Form.Control
                    type="number"
                    value={Math.max(0, budgetRange[0])}
                    min={purpose === 'Buy' ? 100000 : 10000}
                    max={purpose === 'Buy' ? 1000000000 : 1000000}
                    onChange={(e) =>
                      setBudgetRange([
                        Math.max(0, +e.target.value),
                        budgetRange[1]
                      ])
                    }
                  />
                  <span>to</span>
                  <Form.Control
                    type="number"
                    value={Math.max(0, budgetRange[1])}
                    min={purpose === 'Buy' ? 100000 : 10000}
                    max={purpose === 'Buy' ? 1000000000 : 1000000}
                    onChange={(e) =>
                      setBudgetRange([
                        budgetRange[0],
                        Math.max(0, +e.target.value)
                      ])
                    }
                  />
                  <span>Max ₹</span>
                </div>
              </div>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <Button onClick={handleSearch} className="search-btn px-5">
              Search Properties
            </Button>
          </div>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default HeroSearch;