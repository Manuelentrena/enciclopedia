import React from "react";
import { Togle, Language } from "components";
const Menu = ({ isActiveMenu }) => {
  return (
    <div
      className={
        isActiveMenu ? "header__menu show__menuBurguer" : "header__menu"
      }
    >
      <nav className="header__nav">
        <Togle />
        <Language />
      </nav>
    </div>
  );
};

export default Menu;
