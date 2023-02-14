import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sec3pic1 from "../img/001.png";
import Sec3pic2 from "../img/002.png";
import Sec3pic3 from "../img/003.png";

const Section3 = () => {
  return (
    <Container fluid className="bg-section3">
      <Container>
        <Row>
          <Col lg={5}>
            <div className="pic-sec3">
              <img src={Sec3pic1} alt="" />
            </div>
          </Col>
          <Col lg={7}>
            <div className="header-sec3">
              <h1>Courses</h1>
              <h6>หลักสูตรเนื้อหาวิชาที่เปิดสอน</h6>
              <p>
                เนื้อหาวิชา สื่อประกอบการสอน
                และชุดข้อสอบเพื่อวัดผลการเรียนรู้ในแต่ละระดับ
                ชั้นโดยใช้มาตรฐานกลางสำหรับสถาบันการศึกษา เพื่อยกระดับคุณภาพ
                บุคคลากรและเกิดประโยชน์สูงสุดของผู้เรียน
              </p>
            </div>
            <Row className="mb-5">
              <Col lg={5}>
                <div className="card1">
                  <div className="cards3">
                    <h6>Mathematics</h6>
                    <h4>วิชาคณิตศาสตร์</h4>
                  </div>
                  <img src={Sec3pic2} alt="" />
                </div>
              </Col>
              <Col lg={2}></Col>
              <Col lg={5}>
                <div className="card1">
                  <div className="cards3">
                    <h6>Science</h6>
                    <h4>วิชาวิทยาศาสตร์</h4>
                  </div>
                  <img src={Sec3pic3} alt="" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section3;
