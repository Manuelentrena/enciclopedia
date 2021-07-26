import React, { useState } from "react";
import { Logo, Menu, MenuBurguer } from "components";
const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div className="header">
      <picture className="header__picture">
        <Logo />
      </picture>
      {/* Crear componenete HeaderMenu y paasarle la prop isActiveMenu */}
      <Menu isActiveMenu={isActiveMenu} />
      <MenuBurguer
        isActiveMenu={isActiveMenu}
        setIsActiveMenu={setIsActiveMenu}
      />
    </div>
  );
};

export default Header;
