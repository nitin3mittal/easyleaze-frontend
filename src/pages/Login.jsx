import { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    alert('Login successful!');
    navigate('/dashboard');
  };

  return (
    <Container fluid className="my-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;