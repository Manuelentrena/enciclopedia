import React, { useState } from 'react';
import Lang from 'Translations';
import { useHistory, useLocation, useParams } from 'react-router';
import { IconArrow, IconCheck, IconNoCheck } from 'components';
import { useGlobal } from 'hooks/useGlobal';
import { useInfoPage } from 'hooks';

const languages = ['en', 'es'];

const MenuMobilLanguage = () => {
  const { lng } = useParams();
  const { language: fx } = useGlobal();
  let { pathname } = useLocation();
  const { title } = useParams();
  const history = useHistory();
  const { otherTitle } = useInfoPage();
  const [arrowOn, setArrowOn] = useState(false);

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const handleChange = (value) => {
    if (lng === value) return false;
    const options = {};
    if (pathname === '/es'
    || pathname === '/en'
    || pathname === '/es/trendings'
    || pathname === '/en/trendings') {
      options.trendings = true;
    }
    if (pathname.startsWith('/es/page/') || pathname.startsWith('/en/page/')) {
      options.page = true;
      pathname = pathname.replace(title, otherTitle);
    }
    history.push(pathname.replace(fx, value), options);
    return true;
  };

  return (
    <>
      <div className="menuMobil__container" onClick={handleClick}>
        <p className="menuMobil__title">{Lang.menu.language[fx]}</p>
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
                  Lang.menu.typeLang[language][fx]}`}
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
