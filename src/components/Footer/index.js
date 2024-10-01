import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import { Poppins } from "next/font/google";
import FooterLogo from "../../../public/images/tronoxlogo.png";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import FooterRight from "./FooterRight";
import FooterMenu from "./FooterMenu";
import Information from "./Information";
import Follow from "./Follow";
import CopyRight from "./CopyRight";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <>
      <div className="footer-section">
        <Container>
          <Row>
            <Col xs={12} md={3} className="me-auto">
              <FooterRight />
            </Col>
            <Col xs={12} md={2}>
              <FooterMenu />
            </Col>
            <Col xs={12} md={2}>
              <Information />
            </Col>
            <Col xs={12} md={2}>
              <Follow />
            </Col>
          </Row>

          <CopyRight />
        </Container>
      </div>
    </>
  );
};

export default Footer;
