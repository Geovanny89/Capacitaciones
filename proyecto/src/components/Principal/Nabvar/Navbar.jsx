import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css';

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">¿Quiénes Somos?</Nav.Link>
            <Nav.Link href="/servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
      <Button variant="outline-success" className="btn-ingresar ml-auto">
            Ingresar
          </Button>
      </Container>
    </Navbar>
  );
}
