import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import picSection1 from "../img/PicS1.png";
import { BsFillCaretRightFill } from "react-icons/bs";

const Section1 = () => {
  return (
    <div>
      <Container fluid className="bg-section1">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="head-sec1">
                <h1>Klass</h1>
                <h1>Bits</h1>
                <h4 className="text-white">แพลตฟอร์มจัดการเรียนรู้</h4>
                <h4 className="text-white d-flex">
                  Learning <h4 className="management mx-1">Management</h4> System
                </h4>
                <span className="text-white">
                  ยกระดับคุณภาพโรงเรียนและบุคคลากรด้านการศึกษา
                  <br />
                  เพื่อการจัดการเรียนการสอนได้อย่างเต็มรูปแบบและมีประสิทธิภาพ
                </span>
              </div>
              <Row className="mt-3">
                <Col lg={4} md={4} sm={12}>
                  <div className="head-sec1-link">
                    <a href="">develop learners</a>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="head-sec1-link">
                    <a href="">help teacher</a>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <div className="head-sec1-link">
                    <a href="">school upgrade</a>
                  </div>
                </Col>
              </Row>
              <button className="getstart-btn"><a href="">GET STARTED <BsFillCaretRightFill/></a></button>
            </Col>
            <Col lg={7}>
              <div className="img-sec1">
                <img src={picSection1} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Section1;
