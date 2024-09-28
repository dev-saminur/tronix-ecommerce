import React from "react";
import FootHeader from "./FootHeader";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { PiTwitterLogo } from "react-icons/pi";
import Link from "next/link";

const Follow = () => {
  return (
    <>
      <div className="follow">
        <FootHeader title="Follow Us" />
        <div className="d-flex gap-4">
          <div className="follow-icon d-flex  justify-content-center align-items-center">
            <Link href="/">
              <FaInstagram />
            </Link>
          </div>
          <div className="follow-icon d-flex  justify-content-center align-items-center">
            <Link href="/">
              <PiTwitterLogo />
            </Link>
          </div>
          <div className="follow-icon d-flex  justify-content-center align-items-center">
            <Link href="/">
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Follow;
