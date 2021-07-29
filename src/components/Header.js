import React, { useState } from "react";
import { Logo, MiniLogo, Menu, IconBurguer } from "components";
const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <div className="header">
      <picture className="header__picture">
        <Logo />
        <MiniLogo />
      </picture>
      <Menu isActiveMenu={isActiveMenu} />
      <IconBurguer
        isActiveMenu={isActiveMenu}
        setIsActiveMenu={setIsActiveMenu}
      />
    </div>
  );
};

export default Header;
