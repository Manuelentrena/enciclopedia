import React from 'react';
import { Togle, LanguageSelect } from 'components';

const MenuDesktop = () => (
  <div className="menuDesktop">
    <nav className="menuDesktop__nav">
      <div className="menuDesktop__item">
        <Togle />
      </div>
      <div className="menuDesktop__item">
        <LanguageSelect />
      </div>
    </nav>
  </div>
);

export default MenuDesktop;
