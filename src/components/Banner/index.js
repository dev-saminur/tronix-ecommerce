"use client";
import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SliderOne from "../../assets/ecommerceslider_1.jpg";
import BannerSlider from "./BannerSlider";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const Banner = () => {
  return (
    <>
      <div className="banner-section">
        <Container>
          <Row className="g-4 align-items-center">
            <Col xs={8}>
              <BannerSlider />
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
                <div className="collection-item">
                  <Link href="/" className="collection-name">
                    <Image
                      width={512}
                      height={306}
                      src={SliderOne}
                      alt="slider-one"
                    />
                    <div className="collection-header">
                      <h5 className={montserrat.className + " " + " "}>
                        PC Gaming Collection
                      </h5>
                    </div>
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
