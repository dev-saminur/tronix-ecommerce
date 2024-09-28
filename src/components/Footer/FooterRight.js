import React from "react";
import { Poppins } from "next/font/google";
import FooterLogo from "../../../public/images/tronoxlogo.png";
import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const FooterRight = () => {
  return (
    <>
      <div className="footer-right">
        <div className="image">
          <Image width={112} src={FooterLogo} alt="Footer-Logo" />
        </div>
        <div className="right-content">
          <p className={poppins.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <div className="contact d-flex  flex-column gap-3">
            <div className="d-flex align-items-center gap-3">
              <BsTelephone size={24} />
              <span className={poppins.className + " " + "phone"}>
                +12 345 6789 0
              </span>
            </div>
            <div className="d-flex align-items-center gap-3">
              <FaRegEnvelope size={24} />
              <span className={poppins.className + " " + "phone"}>
                lovia@support.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRight;
