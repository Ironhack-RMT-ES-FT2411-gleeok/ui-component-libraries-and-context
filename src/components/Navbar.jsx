import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">

      <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/contact">Contacts</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/book/list">Book List</Nav.Link>
          <Nav.Link as={Link} to="/book/add">Add a Book</Nav.Link>
          <Button variant="info">☀️/🌑</Button>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default MyNavbar

// cambios en el navbar