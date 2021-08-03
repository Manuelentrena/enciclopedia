import React, { useState } from "react";
import Lang from "Translations";
import { IconArrow, IconNoCheck, IconCheck } from "components";
import { useGlobal } from "hooks/useGlobal";

const themes = ["dark", "light"];

const MenuMobilTheme = () => {
  const { language: fx, setTheme, theme: globalTheme } = useGlobal();
  const [arrowOn, setArrowOn] = useState(false);

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const handleChange = (theme) => {
    if (globalTheme === theme) return false;
    theme === "dark" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div className="menuMobil__container" onClick={handleClick}>
        <p className="menuMobil__title">{Lang[fx].menu.theme}</p>
        <IconArrow arrowOn={arrowOn} />
      </div>
      <ul className="menuMobil__list">
        {arrowOn
          ? themes.map((theme) => (
              <li
                className={
                  theme === globalTheme
                    ? "menuMobil__item menuMobil__item--selected"
                    : "menuMobil__item"
                }
                key={theme + "li"}
                onClick={(e) => handleChange(e.target.id)}
              >
                {theme === globalTheme ? <IconCheck /> : <IconNoCheck />}
                <p className="menuMobil__text">
                  {Lang[fx].menu.typeTheme[theme]}
                </p>
                <div
                  id={theme}
                  key={theme}
                  className="menuMobil__click"
                  onClick={() => handleChange(theme)}
                ></div>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default MenuMobilTheme;
