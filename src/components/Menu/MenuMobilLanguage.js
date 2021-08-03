import React, { useState } from "react";
import Lang from "Translations";
import { useParams, useLocation, useHistory } from "react-router";
import { IconArrow, IconCheck, IconNoCheck } from "components";
import { useGlobal } from "hooks/useGlobal";

const languages = ["en", "es"];

const MenuMobilLanguage = () => {
  const { lng } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const { language: fx } = useGlobal();
  const [arrowOn, setArrowOn] = useState(false);

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const handleChange = (value) => {
    if (lng === value) return false;
    const newPath = pathname.replace(pathname.slice(1, 3), value);
    history.push({ pathname: newPath });
  };

  return (
    <>
      <div className="menuMobil__container" onClick={handleClick}>
        <p className="menuMobil__title">{Lang[fx].menu.language}</p>
        <IconArrow arrowOn={arrowOn} />
      </div>
      <ul className="menuMobil__list">
        {arrowOn
          ? languages.map((language) => (
              <li
                className={
                  language === fx
                    ? "menuMobil__item menuMobil__item--selected"
                    : "menuMobil__item"
                }
                key={language + "li"}
              >
                {language === fx ? <IconCheck /> : <IconNoCheck />}
                <p className="menuMobil__text">
                  {" "}
                  {language.toUpperCase() +
                    " " +
                    Lang[fx].menu.typeLang[language]}
                </p>
                <div
                  id={language}
                  key={language}
                  className="menuMobil__click"
                  onClick={() => handleChange(language)}
                ></div>
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default MenuMobilLanguage;
