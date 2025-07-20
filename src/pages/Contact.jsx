import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container fluid className="my-5">
      <h1>Contact Us</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Type your message" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;