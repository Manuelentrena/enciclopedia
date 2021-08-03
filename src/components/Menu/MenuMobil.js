import React, { useEffect } from "react";
import { MenuMobilLanguage, MenuMobilTheme } from "components";
import { useGlobal } from "hooks";

const MenuMobil = ({ isActiveMenu }) => {
  const { noScroll } = useGlobal();

  useEffect(() => {
    noScroll(isActiveMenu);
  }, [isActiveMenu, noScroll]);

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
