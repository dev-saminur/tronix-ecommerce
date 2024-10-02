"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { BannerSliderData } from "../data/BannerSliderData";

const BannerSlider = () => {
  const settings = {
    arrows: false,
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
        <ul style={{ padding: "0 10px", margin: "0 10px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "8px",
          margin: "0 10px",
          background: i === 0 ? "#ff6347" : "#ccc", // Default dot color
        }}
      />
    ),
    beforeChange: (current, next) => {
      const dots = document.querySelectorAll(".slick-dots li div");
      dots.forEach((dot, index) => {
        if (index === next) {
          dot.style.background = "#ff6347"; // Active dot color (Orange)
          dot.style.width = "32px";
          dot.style.margin = "0 10px"; // Active dot width to make it rectangular
        } else {
          dot.style.background = "#ccc"; // Inactive dot color
          dot.style.width = "12px"; // Default dot size
          dot.style.margin = "0 10px";
        }
      });
    },
  };

  return (
    <>
      <div>
        <Slider {...settings}>
          {BannerSliderData.map((item, i) => (
            <div key={i} className="bannaer-slider">
              <Link href={item.link}>
                <Image
                  width={1058}
                  height={644}
                  src={item.sliderimg}
                  alt="slider-one"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BannerSlider;
