import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../img/Logo-Klassbits.png";
import Linelogo from "../img/line.png";
import Facebooklogo from "../img/facebook.png";
import { BsDot } from "react-icons/bs";

const Navbars = () => {
  return (
    <div className="main-navbar">
      <Navbar fixed="top" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
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
          </Navbar.Collapse>
          <div className="contact-nav mx-auto">
            <a href="">
              <img src={Linelogo} alt="" />
            </a>
            <a href="">
              <img src={Facebooklogo} alt="" />
            </a>
            <span>081-234-5678</span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
