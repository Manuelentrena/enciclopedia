import React, { useState } from 'react';
import Lang from 'Translations';
import { useParams } from 'react-router';
import { IconArrow, IconCheck, IconNoCheck } from 'components';
import { useGlobal } from 'hooks/useGlobal';

const languages = ['en', 'es'];

const MenuMobilLanguage = () => {
  const { lng } = useParams();
  const { language: fx, setLanguage, setTrending } = useGlobal();
  const [arrowOn, setArrowOn] = useState(false);

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const handleChange = (value) => {
    if (lng === value) return false;
    setLanguage({ language: value });
    setTrending(true);
    return true;
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
                    ? 'menuMobil__item menuMobil__item--selected'
                    : 'menuMobil__item'
                }
              key={`${language}li`}
            >
              {language === fx ? <IconCheck /> : <IconNoCheck />}
              <p className="menuMobil__text">
                {' '}
                {`${language.toUpperCase()
                } ${
                  Lang[fx].menu.typeLang[language]}`}
              </p>
              <div
                id={language}
                key={language}
                className="menuMobil__click"
                onClick={() => handleChange(language)}
              />
            </li>
          ))
          : null}
      </ul>
    </>
  );
};

export default MenuMobilLanguage;
