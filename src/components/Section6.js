import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillCaretRightFill } from "react-icons/bs";
import Logo from "../img/Logo-Klassbits.png";

const Section6 = () => {
  return (
    <Container fluid className="bg-section6">
      <Container>
        <Row>
          <Col xl={1}></Col>
          <Col xl={3}>
            <div className="logo-section6">
              <img src={Logo} alt="" />
            </div>
          </Col>
          <Col xl={5}>
            <div className="contact-input">
              <h5 className="text-white">Contact us</h5>
              <input type="email" placeholder="Enter your E-mail / Tel."/>
            </div>
          </Col>
          <Col xl={2}>
            <button className="send-btn">
              <a href="">
                SEND <BsFillCaretRightFill />
              </a>
            </button>
          </Col>
          <Col xl={1}></Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section6;
