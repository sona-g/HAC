import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="info" variant="light" className="py-4" >
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/whatwedo">WHAT WE DO</Nav.Link>
            <Nav.Link href="/careers">CAREERS</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;