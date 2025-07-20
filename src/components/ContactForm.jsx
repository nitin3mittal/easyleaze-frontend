import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead Submitted:', formData);
    alert('Thank you! We have received your inquiry.');
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-4">
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Submit Inquiry
      </Button>
    </Form>
  );
};

export default ContactForm;