import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Linelogo from "../img/line.png";
import Facebooklogo from "../img/facebook.png";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <Container fluid className="bg-footer">
        <Container>
          <Row>
            <Col xl={4} className="d-flex align-items-center">
              <span className="text-white">
                Copyright © 2022 Klass Bits All rights reserved.
              </span>
            </Col>
            <Col xl={6}>
              <Nav className="ms-auto">
                <Nav.Link href="#home">
                  <BsDot />
                  Home
                </Nav.Link>
                <Nav.Link href="#home">
                  <BsDot />
                  About Us
                </Nav.Link>
                <Nav.Link href="#home">
                  <BsDot />
                  Courses
                </Nav.Link>
                <Nav.Link href="#home">
                  <BsDot />
                  Testimonial
                </Nav.Link>
                <Nav.Link href="#home">
                  <BsDot />
                  Contact Us
                </Nav.Link>
              </Nav>
            </Col>
            <Col xl={2}>
              <div className="contact-nav mx-auto">
                <a href="">
                  <img src={Linelogo} alt="" />
                </a>
                <a href="">
                  <img src={Facebooklogo} alt="" />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
