import React from "react";
import Container from "../helper/Container/Container";
import Header from "../helper/Header/Header";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { CategoryData } from "../data/CategoryData";
import Badge from "../helper/Badge/Badge";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Category = () => {
  return (
    <>
      <div className="category-section">
        <Container>
          <div className="category-item">
            <Header title="Category" />

            <div className="d-flex justify-content-between ">
              {CategoryData.map((item, i) => (
                <div key={i} className="category-box">
                  <div className="image  ">
                    <Image
                      src={item.image}
                      width={56}
                      height={56}
                      alt="laptop"
                    />
                  </div>
                  <h2 className={poppins.className + " " + "title"}>
                    {item.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Category;
