import React, { useEffect } from "react";
import { MenuMobilLanguage, MenuMobilTheme } from "components";

const MenuMobil = ({ isActiveMenu }) => {
  useEffect(() => {
    console.log(isActiveMenu);
  }, [isActiveMenu]);

  return isActiveMenu ? (
    <div className="menuMobil">
      <nav className="menuMobil__nav">
        <MenuMobilTheme />
        <MenuMobilLanguage />
      </nav>
    </div>
  ) : null;
};

export default MenuMobil;
