import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PhoneSec6 from "../img/PhoneSec6.png";
import QRcode from "../img/QRcode.png";
import AppStore from "../img/download-ios-app.png";
import PlayStore from "../img/android-download.png";

const Section5 = () => {
  return (
    <Container fluid className="bg-section5">
      <Row>
        <Col lg={6}>
          <div className="dowloader">
            <h3 className="text-white mt-3 mb-3">
              ดาวน์โหลดแอพพลิเคชั่น <br />
              Klass Bits ได้ที่
            </h3>
            <div className="qr">
              <img src={QRcode} alt="" />
            </div>
            <div className="store-link mt-2">
              <a href="">
                <img src={AppStore} alt="" />
              </a>
              <a href="">
                <img src={PlayStore} alt="" />
              </a>
            </div>
          </div>
        </Col>
        <Col lg={6} className="p-0">
          <div className="phonesec6">
            <img src={PhoneSec6} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Section5;
