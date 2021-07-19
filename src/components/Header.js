import React from "react";
import { Logo, Togle } from "components";
const Header = () => {
  return (
    <div className="header">
      <picture className="header__picture">
        <Logo />
      </picture>
      <Togle />
    </div>
  );
};

export default Header;
