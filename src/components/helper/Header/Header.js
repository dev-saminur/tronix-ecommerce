import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});
const Header = ({ title }) => {
  return (
    <>
      <h3 className={montserrat.className + " " + "header"}>{title}</h3>
    </>
  );
};

export default Header;
