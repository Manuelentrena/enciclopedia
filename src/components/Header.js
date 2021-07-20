import React from "react";
import { Logo, Togle, Language } from "components";
const Header = () => {
  return (
    <div className="header">
      <picture className="header__picture">
        <Logo />
      </picture>
      <div className="header__menu">
        <Togle />
        <Language />
      </div>
    </div>
  );
};

export default Header;
