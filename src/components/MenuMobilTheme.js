import React, { useState } from "react";
import Lang from "Translations";
import { ArrowMenu } from "components";
import { useGlobal } from "hooks/useGlobal";

const themes = ["dark", "light"];

const MenuMobilTheme = () => {
  const { language: fx, setTheme, theme } = useGlobal();
  const [arrowOn, setArrowOn] = useState(false);

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const handleChange = (e) => {
    if (theme === e.target.id) return false;
    e.target.id === "dark" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div className="menuMobil__container" onClick={handleClick}>
        <p>{Lang[fx].menu.theme}</p>
        <ArrowMenu arrowOn={arrowOn} />
      </div>
      <ul className="menuMobil__list">
        {arrowOn
          ? themes.map((theme) => (
              <li
                className="menuMobil__item"
                key={theme}
                id={theme}
                onClick={handleChange}
              >
                {Lang[fx].menu.typeTheme[theme]}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default MenuMobilTheme;
