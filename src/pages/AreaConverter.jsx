import React, { useState } from 'react';
import '../App.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';

const units = {
  sqft: { label: 'Square Feet', factor: 1 },
  sqyd: { label: 'Square Yards', factor: 9 },
  sqm: { label: 'Square Meters', factor: 10.764 },
  acre: { label: 'Acre', factor: 43560 },
  bigha: { label: 'Bigha (Delhi)', factor: 27225 },
  kanal: { label: 'Kanal', factor: 5445 },
  hectare: { label: 'Hectare', factor: 107639 },
};

const AreaConverter = () => {
  const [inputValue, setInputValue] = useState(1000);
  const [fromUnit, setFromUnit] = useState('sqft');
  const [toUnit, setToUnit] = useState('sqyd');

  const convert = (value, from, to) => {
    const valueInSqft = value * units[from].factor;
    return valueInSqft / units[to].factor;
  };

  const result = convert(inputValue, fromUnit, toUnit).toFixed(4);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Area Converter</h2>
      <p className="text-center text-muted mb-4">
        Convert land and property areas between commonly used units like Sq.Ft., Acre, Bigha, etc.
      </p>

      {/* ✅ Input Form */}
      <Card className="p-4 shadow-sm mb-4">
        <Form>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>Area Value</Form.Label>
              <Form.Control
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
              />
            </Col>
            <Col md={4}>
              <Form.Label>From Unit</Form.Label>
              <Form.Select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                {Object.entries(units).map(([key, u]) => (
                  <option key={key} value={key}>{u.label}</option>
                ))}
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>To Unit</Form.Label>
              <Form.Select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                {Object.entries(units).map(([key, u]) => (
                  <option key={key} value={key}>{u.label}</option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </Form>
      </Card>

      {/* ✅ Output */}
      <Card className="p-4 bg-light">
        <h5>Conversion Result</h5>
        <p>
          <strong>{inputValue}</strong> {units[fromUnit].label} ={' '}
          <strong>{result}</strong> {units[toUnit].label}
        </p>
        <p className="text-muted">
          *Conversion uses standard metric equivalence. Regional variations like Bigha size may differ.
        </p>
      </Card>
    </Container>
  );
};

export default AreaConverter;