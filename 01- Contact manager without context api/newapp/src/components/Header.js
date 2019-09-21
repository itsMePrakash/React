import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

var Header = (props) => {
  var {branding} = props;
  return (
    <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">{branding}</Navbar.Brand>
          <Nav className="mr-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
    </div>
  )
}

Header.defaultProps = {
  branding: 'Software engineer'
}

export default Header;