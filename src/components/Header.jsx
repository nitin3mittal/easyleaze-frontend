import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../assets/logo.png';

const Header = () => {
  const isLoggedIn = true; // TODO: Replace with real auth logic
  const userName = 'John Doe';

  return (
    <header>
      {/* ✅ Top Ribbon */}
      <div className="top-ribbon d-flex justify-content-between align-items-center px-3 py-2">
        <div className="d-flex align-items-center gap-3">
          <Link to="/">
            <Image src={logo} alt="EasyLeaze Logo" height="40" />
          </Link>
          <span className="tagline text-blue">Rent/Buy in Dwarka</span>
        </div>

        <div className="d-flex align-items-center gap-3">
          <Link to="/submit-property" className="btn btn-sm btn-outline-primary">
            Post Property – <strong>Free</strong>
          </Link>
          <Link to="/post-requirement" className="btn btn-sm btn-warning text-white">
            Post Requirement
          </Link>

          {isLoggedIn && <span className="user-name">{userName}</span>}

          <NavDropdown
            title={<i className="bi bi-person-circle fs-5"></i>}
            id="profile-dropdown"
            align="end"
          >
            {!isLoggedIn ? (
              <>
                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">Register</NavDropdown.Item>
              </>
            ) : (
              <>
                <NavDropdown.Item as={Link} to="/dashboard">My Profile</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/my-activities">My Activities</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">Logout</NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </div>
      </div>

      {/* ✅ Bottom Navbar */}
      <Navbar expand="lg" className="bottom-navbar" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="main-navbar" aria-label="Toggle navigation" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto gap-3">

              <NavDropdown title="Home" id="nav-home">
                <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contact">Contact Us</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/privacy-policy">Privacy Policy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/disclaimer">Disclaimer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/testimonials">Testimonials</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Residential" id="nav-residential">
                <NavDropdown.Item as={Link} to="/residential/society-flats">Society Flats</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/residential/builder-floors">Builder Floors</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/residential/independent-houses">Independent Houses</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/residential/plots">Plot</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Commercial" id="nav-commercial">
                <NavDropdown.Item as={Link} to="/commercial/shops">Shops</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/showrooms">Showrooms</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/offices">Offices</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/warehouses">Warehouses</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/factories">Factories</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/industrial-buildings">Industrial Buildings</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/industrial-sheds">Industrial Sheds</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/commercial/land">Land</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Tools" id="nav-tools">
                <NavDropdown.Item as={Link} to="/loan-calculator">Loan Calculator</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/area-convertor">Area Converter</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/price-trends">Rates & Trends</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Other Services" id="nav-other">
                <NavDropdown.Item as={Link} to="/home-loan">Home Loan</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/property-valuation">Property Valuation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lap">Loan Against Property</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="News Blogs" id="nav-blogs">
                <NavDropdown.Item as={Link} to="/blogs/latest">Latest Blogs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs/policies">Policies</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs/city">City Blogs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/blogs/news">Property News</NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;