import React, { useState } from 'react';
import '../App.css';
import { Form, Row, Col, Button } from 'react-bootstrap';

const PostPropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', username: '', mobile: '', otp: '',
    purpose: '', propertyType: '', subType: '', title: '', description: '',
    city: 'Delhi', locality: '', address: '', landmark: '', latlong: '',
    superArea: '', superAreaUnit: 'Sq.Ft', carpetArea: '', carpetAreaUnit: 'Sq.Ft',
    bedrooms: '', bathrooms: '', balconies: '', furnishing: '',
    totalFloors: '', floorNo: '', propertyAge: '',
    price: '', priceUnit: '', negotiable: '', maintenance: '', maintenanceUnit: '', availableFrom: '',
    amenities: [], amenitiesOther: '', ownership: '', rera: '', reraNo: '',
    photos: [], video: '', floorPlan: '', coverImage: '',
    termsAgreed: false, allowContact: false
  });
const [isRegistered, setIsRegistered] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      if (name === 'termsAgreed' || name === 'allowContact') {
        setFormData({ ...formData, [name]: checked });
      } else {
        const updated = checked ? [...formData.amenities, value] : formData.amenities.filter(a => a !== value);
        setFormData({ ...formData, amenities: updated });
      }
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: name === 'photos' ? [...files] : files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleUsernameBlur = () => {
    if (formData.username.length > 4) {
      alert('Username is available!');
    } else {
      alert('Username too short. Try again.');
    }
  };

  const handleOTPVerify = () => {
    alert('OTP verified successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Property submitted successfully for review.');
  };

  const subTypeOptions = {
    Residential: ['Society Flat', 'Builder Floor', 'Plot'],
    Commercial: ['Shop', 'Showroom', 'Office', 'Warehouse', 'Factory', 'Industrial Building', 'Industrial Shed', 'Land']
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Post Property For Free</h2>
      <Form onSubmit={handleSubmit}>

        {/* === SECTION 1: New User Details === */}
        <div className="form-box">
          <h5>User Information</h5>
          <Row className="g-3">
            <Col md={6}><Form.Label>Full Name</Form.Label><Form.Control name="name" onChange={handleChange} required /></Col>
            <Col md={6}><Form.Label>Email</Form.Label><Form.Control type="email" name="email" onChange={handleChange} required /></Col>
            <Col md={6}><Form.Label>Username</Form.Label><Form.Control name="username" onBlur={handleUsernameBlur} onChange={handleChange} required /></Col>
            <Col md={6}>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control name="mobile" onChange={handleChange} required />
              <div className="d-flex gap-2 mt-1">
                <Button size="sm" variant="outline-primary">Send OTP</Button>
                <Button size="sm" variant="outline-success" onClick={handleOTPVerify}>Verify OTP</Button>
              </div>
            </Col>
          </Row>
        </div>

        {/* === SECTION 2: Basic Property Details === */}
        <div className="form-box">
          <h5>Basic Details</h5>
          <Row className="g-3">
            <Col md={4}><Form.Label>Purpose</Form.Label><Form.Select name="purpose" onChange={handleChange}><option>Rent</option><option>Sale</option></Form.Select></Col>
            <Col md={4}><Form.Label>Property Type</Form.Label><Form.Select name="propertyType" onChange={handleChange}><option>Residential</option><option>Commercial</option></Form.Select></Col>
            <Col md={4}><Form.Label>Sub-Type</Form.Label><Form.Select name="subType" onChange={handleChange}>{(subTypeOptions[formData.propertyType] || []).map((opt, i) => <option key={i}>{opt}</option>)}</Form.Select></Col>
            <Col md={6}><Form.Label>Title</Form.Label><Form.Control name="title" onChange={handleChange} /></Col>
            <Col md={6}><Form.Label>Description</Form.Label><Form.Control as="textarea" name="description" rows={2} onChange={handleChange} /></Col>
          </Row>
        </div>

        {/* === SECTION 3: Location & Specifications === */}
        <Row className="g-3">
          <Col md={6} className="form-box">
            <h5>Location Details</h5>
            <Form.Label>City</Form.Label><Form.Control readOnly value="Delhi" />
            <Form.Label>Locality</Form.Label><Form.Control name="locality" onChange={handleChange} />
            <Form.Label>Exact Address</Form.Label><Form.Control name="address" onChange={handleChange} />
            <Form.Label>Nearby Landmark</Form.Label><Form.Control name="landmark" onChange={handleChange} />
            <Form.Label>Google Map Pin</Form.Label><Form.Control name="latlong" onChange={handleChange} />
          </Col>
          <Col md={6} className="form-box">
            <h5>Property Specifications</h5>
            <Row className="g-3">
              <Col md={6}><Form.Label>Super Area</Form.Label><Form.Control name="superArea" onChange={handleChange} /></Col>
              <Col md={6}><Form.Label>Unit</Form.Label><Form.Select name="superAreaUnit" onChange={handleChange}><option>Sq.Ft</option><option>Sq.Mtr</option><option>Sq.Yds</option></Form.Select></Col>
              <Col md={6}><Form.Label>Carpet Area</Form.Label><Form.Control name="carpetArea" onChange={handleChange} /></Col>
              <Col md={6}><Form.Label>Unit</Form.Label><Form.Select name="carpetAreaUnit" onChange={handleChange}><option>Sq.Ft</option><option>Sq.Mtr</option><option>Sq.Yds</option></Form.Select></Col>
              <Col md={4}><Form.Label>Bedrooms</Form.Label><Form.Select name="bedrooms" onChange={handleChange}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></Form.Select></Col>
              <Col md={4}><Form.Label>Bathrooms</Form.Label><Form.Select name="bathrooms" onChange={handleChange}><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></Form.Select></Col>
              <Col md={4}><Form.Label>Balconies</Form.Label><Form.Select name="balconies" onChange={handleChange}><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></Form.Select></Col>
              <Col md={6}><Form.Label>Furnishing</Form.Label><Form.Select name="furnishing" onChange={handleChange}><option>Unfurnished</option><option>Semi-Furnished</option><option>Fully Furnished</option></Form.Select></Col>
              <Col md={6}><Form.Label>Total Floors</Form.Label><Form.Control name="totalFloors" onChange={handleChange} /></Col>
              <Col md={6}><Form.Label>Floor Number</Form.Label><Form.Control name="floorNo" onChange={handleChange} /></Col>
              <Col md={6}><Form.Label>Property Age</Form.Label><Form.Select name="propertyAge" onChange={handleChange}><option>Up to 5 years</option><option>5–10 years</option><option>10–15 years</option><option>15–20 years</option><option>20+ years</option></Form.Select></Col>
            </Row>
          </Col>
        </Row>

        {/* === CONTINUED IN PART 2 === */}
{/* === SECTION 4: Price & Availability === */}
        <div className="form-box">
          <h5>Price & Availability</h5>
          <Row className="g-3">
            <Col md={4}>
              <Form.Label>Expected Price</Form.Label>
              <Form.Control name="price" type="number" onChange={handleChange} />
            </Col>
            <Col md={4}>
              <Form.Label>Unit</Form.Label>
              <Form.Select name="priceUnit" onChange={handleChange}>
                <option value="">Select</option>
                <option>Per Sq.Ft</option>
                <option>Per Month (Rent)</option>
                <option>Total Price (Sale)</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Label>Price Negotiable</Form.Label>
              <Form.Select name="negotiable" onChange={handleChange}>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Maintenance Charges (Optional)</Form.Label>
              <Form.Control name="maintenance" type="number" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Maintenance Unit</Form.Label>
              <Form.Select name="maintenanceUnit" onChange={handleChange}>
                <option value="">Select</option>
                <option>Per Sq.Ft</option>
                <option>Per Month</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Available From</Form.Label>
              <Form.Control name="availableFrom" type="date" onChange={handleChange} />
            </Col>
          </Row>
        </div>

        {/* === SECTION 5: Amenities === */}
        <div className="form-box">
          <h5>Amenities</h5>
          <div className="checkbox-grid">
            {[
              'Parking', 'Visitor Parking', 'Power Backup', 'Lift', 'Security',
              'Park/Garden', 'Swimming Pool', 'Gym', 'Water Supply', 'Club House'
            ].map((amenity, index) => (
              <Form.Check
                key={index}
                type="checkbox"
                name="amenities"
                value={amenity}
                checked={formData.amenities.includes(amenity)}
                onChange={handleChange}
                label={amenity}
              />
            ))}
          </div>
          <Form.Label className="mt-3">Others (comma-separated)</Form.Label>
          <Form.Control name="amenitiesOther" onChange={handleChange} />
        </div>

        {/* === SECTION 6: Ownership & Legal === */}
        <div className="form-box">
          <h5>Ownership & Legal</h5>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Ownership Type</Form.Label>
              <Form.Select name="ownership" onChange={handleChange}>
                <option value="">Select</option>
                <option>Freehold</option>
                <option>Leasehold</option>
                <option>Power of Attorney</option>
                <option>Co-operative Society</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>RERA Registered?</Form.Label>
              <Form.Select name="rera" onChange={handleChange}>
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Col>
            {formData.rera === 'Yes' && (
              <Col md={12}>
                <Form.Label>RERA Number</Form.Label>
                <Form.Control name="reraNo" onChange={handleChange} />
              </Col>
            )}
          </Row>
        </div>

        {/* === SECTION 7: Upload Media === */}
        <div className="form-box">
          <h5>Upload Photos / Media</h5>
          <Row className="g-3">
            <Col md={6}>
              <Form.Label>Upload Photos (Max 10)</Form.Label>
              <Form.Control name="photos" type="file" accept="image/*" multiple onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Upload Property Video (Optional)</Form.Label>
              <Form.Control name="video" type="file" accept="video/*" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Upload Floor Plan (Optional)</Form.Label>
              <Form.Control name="floorPlan" type="file" accept="image/*,application/pdf" onChange={handleChange} />
            </Col>
            <Col md={6}>
              <Form.Label>Cover Image Name</Form.Label>
              <Form.Control name="coverImage" onChange={handleChange} />
            </Col>
          </Row>
          <p className="text-muted mt-2">
            ⚠️ All uploaded media is only visible to backend initially. Frontend will only show approved images.
          </p>
        </div>

        {/* === SECTION 8: Terms & Submit === */}
        <div className="form-box mt-4">
          <Form.Check
            type="checkbox"
            name="termsAgreed"
            onChange={handleChange}
            label={
              <span>
                I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
              </span>
            }
            required
          />
          <Form.Check
            type="checkbox"
            name="allowContact"
            onChange={handleChange}
            label="I allow EasyLeaze to contact me."
          />
          <div className="text-center mt-4">
            <Button type="submit" variant="primary" className="submit-btn">
              Submit Property for Free
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default PostPropertyForm;