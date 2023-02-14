import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "./Carousel"

const Section4 = () => {
  return (
    <Container fluid className="bg-section4">
      <Container>
        <Row className="padrow">
          <Col>
            <div className="header-sec4">
              <h1>Klass Bits Application</h1>
              <h4>แอพพลิเคชั่นจัดการเรียนการสอนสำหรับนักเรียน</h4>
            </div>
            <Slider/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section4;
