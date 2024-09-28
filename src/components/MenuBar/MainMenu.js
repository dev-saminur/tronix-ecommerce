"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from "../../../public/images/tronoxlogo.png";
import ShopingCard from "./ShopingCard";
import Image from "next/image";
import { MenuData } from "../data/MenuData";
import { Poppins } from "next/font/google";
import SearchBox from "./SearchBox";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const MainMenu = () => {
  return (
    <>
      <div className="main-menu">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="navbarScroll " />
          <Navbar.Brand href="/" className="logo d-none d-md-block">
            <Image width={112} src={LogoImg} alt="logo" />
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="navbarScroll d-none" /> */}
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto navbar my-lg-0" navbarScroll>
              {MenuData.map((item, i) => (
                <Nav.Link
                  key={i}
                  href={item.link}
                  className={poppins.className}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            <SearchBox />
            <ShopingCard />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default MainMenu;
