import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sec2pic1 from "../img/004.png";
import Sec2pic2 from "../img/005.png";
import Sec2pic3 from "../img/006.png";
import Sec2pic4 from "../img/007.png";
import Sec2pic5 from "../img/008.png";
import Sec2pic6 from "../img/009.png";
import Sec2pic7 from "../img/010.png";

const Section2 = () => {
  return (
    <Container fluid className="bg-section2">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="card-sec2">
              <Row className="mb-4">
                <Col lg={6}>
                  <div className="head-pic">
                    <img src={Sec2pic7} alt="" className="Sec2pic7" />
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="head-detail">
                    <h1>Klass Bits</h1>
                    <h5>แพลตฟอร์มจัดการเรียนรู้ (LMS)</h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                      Veniam numquam debitis explicabo exercitationem porro<br/>
                      maxime esse aspernatur? Nostrum aperiam quas, in est
                      quibusdam<br/> accusantium blanditiis earum laudantium
                      veritatis illo atque!
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic1} alt="" />
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic2} alt="" />
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic6} alt="" />
                  </div>
                </Col>
              </Row>
              <Row className="mt-5 mb-4">
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic4} alt="" />
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic3} alt="" />
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={3}>
                  <div className="card1-sec2">
                    <div className="cards3-sec2">
                      <h6>Science</h6>
                      <h4>วิชาวิทยาศาสตร์</h4>
                    </div>
                    <img src={Sec2pic5} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section2;
