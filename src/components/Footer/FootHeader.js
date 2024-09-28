import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const FootHeader = ({ title }) => {
  return (
    <>
      <h4 className={montserrat.className + " " + "footer-header"}>{title}</h4>
    </>
  );
};

export default FootHeader;
