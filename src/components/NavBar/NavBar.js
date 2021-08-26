import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  Logo, MiniLogo, Menu, IconBurguer,
} from 'components';
import { useGlobal } from 'hooks';

const NavBar = () => {
  const history = useHistory();
  const { language: fx } = useGlobal();
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleInit = () => {
    history.push(`/${fx}`);
  };

  return (
    <div className="navbar quickpedia__header">
      <picture className="navbar__picture" onClick={handleInit}>
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

export default NavBar;
