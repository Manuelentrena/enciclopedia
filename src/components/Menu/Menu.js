import React from "react";
import { MenuMobil, MenuDesktop } from "components";

const Menu = ({ isActiveMenu }) => {
  return (
    <>
      <MenuDesktop />
      <MenuMobil isActiveMenu={isActiveMenu} />
    </>
  );
};

export default Menu;
