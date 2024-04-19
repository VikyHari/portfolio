import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import background from "../../assests/images/background.jpg";
import javaScript from "../../assests/images/javascript.png";
import html from "../../assests/images/html.png";
import css from "../../assests/images/css.png";
import react from "../../assests/images/react.png";

import { motion } from "framer-motion";

// background-color: #f1f1f1;
// background-image: linear-gradient(180deg, #f1f1f1 0%, #2156ff 100%);

function Home() {
  return (
    // <div style={{backgroundColor:'rgb(51,28,82)', backgroundImage:'linear-gradient(90deg, rgba(51,28,82,1) 48%, rgba(41,28,58,1) 100%)', flex:1,height:'650px' }}>
    //   <Container fluid >
    //     <Row>
    //       {/* First Container */}
    //       <Col>
    //         <Container >
    //           <Row className="justify-content-center">
    //             <Col>
    //               <motion.h1
    //                 initial={{ opacity: 0, x: -100 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ ease: "easeInOut", duration: 1.5 }}
    //               >
    //                 Crafting Experiences: A Frontend Developer's Portfolio
    //                 Journey
    //               </motion.h1>
    //             </Col>
    //           </Row>
    //           <Row className="justify-content-center">
    //             <Col>
    //               <motion.p
    //                 initial={{ opacity: 0, y: 100 }}
    //                 animate={{ opacity: 1, y: 0 }}
    //                 transition={{ ease: "easeInOut", duration: 1.5 }}
    //               >
    //                 Title: Crafting Experiences: A Frontend Developer's
    //                 Portfolio Journey Welcome to my portfolio! I'm [Your Name],
    //                 a frontend developer with a year of hands-on experience in
    //                 React and React Native. Join me as I showcase my journey of
    //                 growth, learning, and passion for crafting captivating
    //                 digital experiences.
    //               </motion.p>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </Col>

    //       {/* Second Container */}
    //       <Col>
    //         <Container style={{ paddingTop:'10px'}}>
    //           <Row className="justify-content-center">
    //             <Col md={6}>
    //               {/* Place your image component here */}
    //               <motion.div
    //                 initial={{ opacity: 0, x: 100 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ ease: "easeInOut", duration: 1.5 }}
    //               >
    //                 <img
    //                   src={background}
    //                   alt="Your Image"
    //                   style={{ maxWidth: "100%" }}
    //                 />
    //               </motion.div>
    //             </Col>
    //           </Row>
    //         </Container>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    <div
      style={{
        backgroundColor: "rgb(51,28,82)",
        backgroundImage:
          "linear-gradient(90deg, rgba(51,28,82,1) 48%, rgba(41,28,58,1) 100%)",
        flex: 1,
        height: "650px",
        padding: "16px",
      }}
    >
      <div
        className="Introduction"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          // border: "1px solid white",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <motion.h5
            style={{ fontSize: "40px" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            Hello ,
          </motion.h5>
          <motion.h1
            style={{ fontSize: "60px", color: "#DCCFED" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            I'm a Web Developer
          </motion.h1>
          <motion.h4
            style={{ fontSize: "45px" }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            I build things for Web
          </motion.h4>
        </div>
        <motion.div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ease: "easeInOut", duration: 1.5 }}
        >
          <img src={background} alt="Your Image" style={{ maxWidth: "80%" }} />
        </motion.div>
      </div>
      <div className="experience">
        <div
          style={{
            display: "flex",
            backgroundColor: "#291c3a",
            padding: "8px",
            marginTop:'10px'
          }}
        >
          <div
            style={{ width: "20%", display: "flex", justifyContent: "center" }}
          >
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              style={{ fontSize: "20px" }}
            >
              <span style={{ fontSize: "50px" }}>3</span> years of Experience{" "}
            </motion.p>
          </div>
          <div
            style={{ width: "30%", display: "flex", justifyContent: "center" }}
          >
            <motion.p
              style={{ fontSize: "20px" }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
            >
              <span style={{ fontSize: "50px" }}>12</span> Projects Completed
              Around the World
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <motion.img
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              src={javaScript}
              alt="Your Image"
              style={{ Width: "90px", height: "90px" }}
            />
            <motion.img
              initial={{opacity: 0, y:100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              src={html}
              alt="Your Image"
              style={{ Width: "90px", height: "90px" }}
            />
            <motion.img
              initial={{opacity: 0, y:-100}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              src={css}
              alt="Your Image"
              style={{ Width: "90px", height: "90px" }}
            />
            <motion.img
              initial={{opacity: 0, x:100}}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 1.5 }}
              src={react}
              alt="Your Image"
              style={{ Width: "90px", height: "90px" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
