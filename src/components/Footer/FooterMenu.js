import React from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { MenuData } from "../data/MenuData";
import FootHeader from "./FootHeader";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const FooterMenu = () => {
  return (
    <>
      <div className="footer-menu">
        <FootHeader title="Company" />
        <div className="menu-item">
          <ul>
            {MenuData.map((item, i) => (
              <li key={i} className={poppins.className + " " + "menu-link"}>
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterMenu;
