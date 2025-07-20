import { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <Container fluid className="my-5">
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email}</p>

      <h5 className="mt-4">Saved Properties (Dummy Data)</h5>
      <ul>
        <li>2 BHK Apartment in Gurugram</li>
        <li>3 BHK Villa in Noida</li>
      </ul>

      <Button variant="danger" className="mt-3" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
};

export default Dashboard;