import { useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const NavigationBar = () => {
  const { user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('easyleaze_user');
    window.location.reload();
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">EasyLeaze</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/listings">Listings</Nav.Link>
            <Nav.Link as={Link} to="/submit-property">Post Property</Nav.Link>
            <Nav.Link as={Link} to="/post-requirement">Post Requirement</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/loan-calculator">Loan Calculator</Nav.Link>
            <Nav.Link as={Link} to="/price-trends">Price Trends</Nav.Link>

            <NavDropdown title="Blogs" id="blog-dropdown">
              <NavDropdown.Item as={Link} to="/blogs/latest">Latest Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs/policies">Policies</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs/city">City Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogs/news">Property News</NavDropdown.Item>
            </NavDropdown>

            {user ? (
              <>
                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;