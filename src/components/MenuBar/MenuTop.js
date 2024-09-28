import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import Facebook from "../../../public/svg/Facebook";
import Instagram from "../../../public/svg/Instagram";
import Twiteer from "../../../public/svg/Twiteer";
import Linkedin from "../../../public/svg/Linkedin";
import { FaRegEnvelope } from "react-icons/fa";

import LogoImg from "../../../public/images/tronoxlogo.png";
import Image from "next/image";
import Link from "next/link";
import ShopingCard from "./ShopingCard";

// import Linkedin from "../../../public/svg/";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const MenuTop = () => {
  return (
    <>
      <div className="menu-top">
        <div className="d-flex justify-content-between align-items-center">
          <div className="social-media  d-none d-md-flex  align-items-center">
            <div className="media-icon">
              <Instagram />
            </div>
            <div className="media-icon">
              <Facebook />
            </div>
            <div className="media-icon">
              <Twiteer />
            </div>
            <div className="media-icon">
              <Linkedin />
            </div>
          </div>
          <div className="contact-media  d-none d-md-flex align-items-center">
            <div className="d-flex align-items-center gap-2">
              <BsTelephone />
              <span className={poppins.className + " " + "phone"}>
                +12 345 6789 0
              </span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaRegEnvelope />
              <span className={poppins.className + " " + "phone"}>
                support@tronix.com
              </span>
            </div>
            <div className="d-flex align-items-center gap-2 cursor-pointer">
              <IoPersonOutline />
              <span className={poppins.className + " " + "phone"}>Account</span>
            </div>
          </div>
          {/*================= SM device ======================  */}
          <div className="logo d-block d-md-none">
            <Link href="/">
              <Image width={112} src={LogoImg} alt="Logo" />
            </Link>
          </div>
          <div className="account d-block d-md-none">
            <div className="d-flex align-items-center  cursor-pointer">
              <ShopingCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuTop;
