import React, { useState } from 'react';
import '../App.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

const PostRequirementForm = () => {
  const [formData, setFormData] = useState({
    purpose: '',
    propertyType: '',
    subType: '',
    locality: '',
    minBudget: '',
    maxBudget: '',
    minArea: '',
    maxArea: '',
    otherRequirements: '',

    name: '',
    mobile: '',
    altMobile: '',
    email: '',
    contactTime: '',
    otp: '',
    otpVerified: false,

    termsAgreed: false,
    allowContact: false,
  });

  const subTypeOptions = {
    Residential: ['Society Flat', 'Builder Floor', 'Plot'],
    Commercial: ['Shop', 'Showroom', 'Office', 'Warehouse', 'Factory', 'Industrial Building', 'Industrial Shed', 'Land'],
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleOTPVerify = () => {
    if (formData.otp === '1234') {
      setFormData({ ...formData, otpVerified: true });
      alert('✅ OTP Verified!');
    } else {
      alert('❌ Invalid OTP');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.otpVerified) {
      alert('❗ Please verify OTP before submitting');
      return;
    }
    alert('✅ Requirement Submitted Successfully!');
    console.log('Requirement Data:', formData);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Post Your Property Requirement</h2>
      <Form onSubmit={handleSubmit}>
        <div className="form-box">
          <h5>1. Requirement Details</h5>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Purpose</Form.Label>
              <Form.Select name="purpose" onChange={handleChange}>
                <option value="">Select</option>
                <option>Rent</option>
                <option>Buy</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Property Type</Form.Label>
              <Form.Select name="propertyType" onChange={handleChange}>
                <option value="">Select</option>
                <option>Residential</option>
                <option>Commercial</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Sub-Type</Form.Label>
              <Form.Select name="subType" onChange={handleChange}>
                <option value="">Select</option>
                {(subTypeOptions[formData.propertyType] || []).map((sub, idx) => (
                  <option key={idx}>{sub}</option>
                ))}
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Preferred Locality / Area</Form.Label>
              <Form.Control name="locality" placeholder="e.g., Dwarka Sector 12, Sector 9" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Minimum Budget ₹</Form.Label>
              <Form.Control name="minBudget" type="number" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Maximum Budget ₹</Form.Label>
              <Form.Control name="maxBudget" type="number" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Minimum Area (sq.ft.)</Form.Label>
              <Form.Control name="minArea" type="number" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Maximum Area (sq.ft.)</Form.Label>
              <Form.Control name="maxArea" type="number" onChange={handleChange} />
            </Col>
            <Col md={12}>
              <Form.Label>Other Specific Requirements</Form.Label>
              <Form.Control as="textarea" name="otherRequirements" rows={2} onChange={handleChange} />
            </Col>
          </Row>
        </div>

        <div className="form-box">
          <h5>2. Contact Details</h5>
          <Row className="g-3">
            <Col md={6}><Form.Label>Full Name</Form.Label><Form.Control name="name" required onChange={handleChange} /></Col>
            <Col md={6}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control name="mobile" required onChange={handleChange} />
              <div className="d-flex gap-2 mt-1">
                <Button size="sm" variant="outline-primary">Send OTP</Button>
                <Button size="sm" variant="outline-success" onClick={handleOTPVerify}>Verify OTP</Button>
              </div>
            </Col>
            <Col md={6}><Form.Label>Alternate Mobile (optional)</Form.Label><Form.Control name="altMobile" onChange={handleChange} /></Col>
            <Col md={6}><Form.Label>Email (optional)</Form.Label><Form.Control name="email" onChange={handleChange} /></Col>
            <Col md={6}><Form.Label>Preferred Contact Time (optional)</Form.Label><Form.Control name="contactTime" onChange={handleChange} /></Col>
            <Col md={6}><Form.Label>Enter OTP</Form.Label><Form.Control name="otp" onChange={handleChange} /></Col>
          </Row>
        </div>

        <div className="form-box">
          <h5>3. Terms & Agreement</h5>
          <Form.Check type="checkbox" name="termsAgreed" label={<span>I agree to the <a href="/terms" target="_blank">Terms & Conditions</a></span>} onChange={handleChange} required />
          <Form.Check type="checkbox" name="allowContact" label="I agree to allow EasyLeaze to contact me regarding this requirement." onChange={handleChange} />
        </div>

        <div className="text-center mt-4">
          <Button type="submit" className="submit-btn">Submit My Requirement</Button>
        </div>
      </Form>
    </div>
  );
};

export default PostRequirementForm;