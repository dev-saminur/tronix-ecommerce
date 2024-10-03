"use client";
import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import SliderOne from "../../assets/ecommerceslider_1.jpg";
import CameraImg from "../../assets/sameraone.jpg";
import PcImage from "../../assets/pcollectionone.jpg";
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
                <div className="collection-item mb-4">
                  <Link href="/" className="collection-name">
                    <span className={montserrat.className + " " + " "}>
                      PC Gaming Collection
                    </span>

                    <Image
                      width={512}
                      height={306}
                      src={PcImage}
                      alt="slider-one"
                    />
                  </Link>
                </div>
                <div className="collection-item">
                  <Link href="/" className="collection-name">
                    <span className={montserrat.className + " " + " "}>
                      PC Gaming Collection
                    </span>

                    <Image
                      width={512}
                      height={306}
                      src={CameraImg}
                      alt="Camera"
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
