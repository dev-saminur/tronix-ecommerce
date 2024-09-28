import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { TbShoppingBag } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

const ShopingCard = () => {
  return (
    <>
      <div className="shopping-cart d-flex align-items-center">
        <div className=" shop">
          <TbShoppingBag />
          <span className="shop-count d-flex align-items-center justify-content-center">
            99
          </span>
        </div>
        <FaRegEnvelope />
        <IoPersonOutline className="d-md-none d-block" />
      </div>
    </>
  );
};

export default ShopingCard;
