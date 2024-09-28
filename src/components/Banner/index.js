import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <div className="banner-section">
        <Container>
          <Row>
            <Col xs={8}>
              <div className="bg-danger-subtle">Left</div>
            </Col>
            <Col xs={4}>
              <div className="bg-danger-subtle">Right</div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
