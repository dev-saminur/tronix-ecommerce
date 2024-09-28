import Link from "next/link";
import React from "react";
import { InformationData } from "../data/InforamtionData";
import { Poppins } from "next/font/google";
import FootHeader from "./FootHeader";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Information = () => {
  return (
    <>
      <div className="information">
        <FootHeader title="Information" />{" "}
        <div className="information-item">
          <ul>
            {InformationData.map((item, i) => (
              <li
                key={i}
                className={poppins.className + " " + "information-link"}
              >
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Information;
