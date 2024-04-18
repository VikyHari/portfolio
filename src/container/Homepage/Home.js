import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../../assests/images/background.jpg"

function Home() {
  return (
    <div>
      <Container fluid>
      <Row>
        {/* First Container */}
        <Col>
          <Container style={{ paddingTop: '56px' }}>
            <Row className="justify-content-center">
              <Col>
                <h1>Crafting Experiences: A Frontend Developer's Portfolio Journey</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col>
                <p>
                  Title: Crafting Experiences: A Frontend Developer's Portfolio
                  Journey Welcome to my portfolio! I'm [Your Name], a frontend
                  developer with a year of hands-on experience in React and React
                  Native. Join me as I showcase my journey of growth, learning, and
                  passion for crafting captivating digital experiences.
                </p>
              </Col>
            </Row>
          </Container>
        </Col>
        
        {/* Second Container */}
        <Col>
          <Container>
            <Row className="justify-content-center">
              <Col md={6} style={{width:'50px', height:'50px'}}>
                {/* Place your image component here */}
                <img src={background} alt="Your Image" />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Home;
