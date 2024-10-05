import React from "react";
import Header from "../helper/Header/Header";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Smartphone from "../../assets/arrival/smartphone.jpg";
import Image from "next/image";
import Badge from "../helper/Badge/Badge";
import { Poppins } from "next/font/google";
import { MdStarRate } from "react-icons/md";
import { NewArrivalData } from "../data/NewArrivalData";
import Link from "next/link";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const NewArrival = () => {
  return (
    <>
      <div className="arrival-section">
        <Container>
          <div className="arrival-header d-flex justify-content-between align-items-center">
            <Header title="new arrival" />
            <Link href="/" className={poppins.className + " " + " "}>
              view all
            </Link>
          </div>
          <Row>
            {NewArrivalData.map((item, i) => (
              <Col key={i} md={4}>
                <div className="arrival-box d-flex ">
                  <div className="image">
                    <Image
                      src={item.image}
                      width={235}
                      height={290}
                      alt="smartphone"
                    />
                    <div className="new-badge">
                      <Badge badge={true} title="new" alone={true} />
                    </div>
                  </div>
                  <div className="content">
                    <h4 className={poppins.className + " " + " "}>
                      {item.pname}
                    </h4>
                    <h3>{item.pprice}</h3>
                    <div className="review d-flex align-items-center">
                      <div className="rating d-flex align-items-center">
                        {item.ratingicon}
                        <span className={poppins.className + " " + " "}>
                          {item.review}
                        </span>
                      </div>
                      <div className="sold-out">
                        <span className={poppins.className + " " + " "}>
                          {item.sold}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
            {/* <Col md={4}>Two</Col>
            <Col md={4}>Three</Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;
