import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/skills">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="Container row-md-4" style={{ paddingTop: "56px" }}>
        {/* Add your page content here */}
        <h1>Welcome to Vignesh"s Web Developemnt Portfolio</h1>
        <p>This is the content of the home page.</p>
      </div>
    </div>
  );
}

export default Home;
