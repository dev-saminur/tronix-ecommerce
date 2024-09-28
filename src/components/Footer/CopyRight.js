import { Poppins } from "next/font/google";
import React from "react";
import Mastercard from "../../../public/svg/MasterCard";
import Visa from "../../../public/svg/Visa";
import Paypal from "../../../public/svg/Paypal";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const CopyRight = () => {
  return (
    <>
      <div className="copyright">
        <div className="shape"></div>
        <div className="d-flex justify-content-between">
          <div className="copy-left">
            <span className={poppins.className}>
              Copyright © 2021 Tronix. All Right Reseved
            </span>
          </div>
          <div className="copy-right d-flex align-items-center gap-3">
            <div className="copy-right-icon">
              <Mastercard />
            </div>
            <div className="copy-right-icon">
              <Visa />
            </div>
            <div className="copy-right-icon">
              <Paypal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;
