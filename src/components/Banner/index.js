"use client";
import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SliderOne from "../../assets/ecommerceslider_1.jpg";
import Slider from "react-slick";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: i === 0 ? "#ff6347" : "#ccc", // Set the active dot to the orange color (#ff6347)
          opacity: 1,
        }}
      />
    ),
  };

  return (
    <>
      <div className="banner-section">
        <Container>
          <Row className="g-5 align-items-center">
            <Col xs={8}>
              {/* <div className="bannaer-slider">
                <Link href="/">
                  <Image
                    width={1058}
                    height={644}
                    src={SliderOne}
                    alt="slider-one"
                  />
                </Link>
              </div> */}
              <Slider {...settings}>
                <div className="slider-item">
                  <h2>Better Devices for Better Life</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
                <div className="slider-item">
                  <h2>Slide 2 Title</h2>
                  <p>Description for Slide 2</p>
                </div>
                <div className="slider-item">
                  <h2>Slide 3 Title</h2>
                  <p>Description for Slide 3</p>
                </div>
              </Slider>
            </Col>
            <Col xs={4}>
              <div className="banner-collection">
                <div className="mb-4">
                  <Link href="/">
                    <Image
                      width={512}
                      height={306}
                      src={SliderOne}
                      alt="slider-one"
                    />
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <Image
                      width={512}
                      height={306}
                      src={SliderOne}
                      alt="slider-one"
                    />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
