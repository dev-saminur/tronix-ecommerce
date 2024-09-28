import React from "react";
import Container from "../helper/Container/Container";
import MenuTop from "./MenuTop";
import MainMenu from "./MainMenu";

const Menubar = () => {
  return (
    <div className="menu">
      <Container>
        <MenuTop />
        <MainMenu />
      </Container>
    </div>
  );
};

export default Menubar;
