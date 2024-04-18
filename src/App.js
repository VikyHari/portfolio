import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./container/Homepage/Home";
import About from "./container/About";
import Navbar from "./component/Navbar";
import { Nav, Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Router>
      {" "}
      {/* Move Router to wrap the entire App */}
      <>
        {/* <Navbar
         bg="dark"
          fixed="top"
        >
          <Container className="justify-content-md">
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
        </Navbar> */}

       
<Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}


export default App;
