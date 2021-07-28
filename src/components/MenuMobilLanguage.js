import React, { useState } from "react";
import Lang from "Translations";
import { useParams, useLocation, useHistory } from "react-router";
import { ArrowMenu } from "components";
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

  const handleChange = (e) => {
    const value = e.target.id;
    if (lng === value) return false;
    const newPath = pathname.replace(pathname.slice(1, 3), value);
    history.push({ pathname: newPath });
  };

  return (
    <>
      <div className="menuMobil__container" onClick={handleClick}>
        <p>{Lang[fx].menu.language}</p>
        <ArrowMenu arrowOn={arrowOn} />
      </div>
      <ul className="menuMobil__list">
        {arrowOn
          ? languages.map((oneLanguage) => (
              <li
                className="menuMobil__item"
                key={oneLanguage}
                id={oneLanguage}
                onClick={handleChange}
              >
                {oneLanguage.toUpperCase() +
                  " " +
                  Lang[fx].menu.typeLang[oneLanguage]}
              </li>
            ))
          : null}
      </ul>
    </>
  );
};

export default MenuMobilLanguage;
