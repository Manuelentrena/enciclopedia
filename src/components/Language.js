import React, { useEffect, useState } from "react";
import { useGlobal } from "hooks/useGlobal";
import { useParams, useLocation, useHistory } from "react-router";
import debounce from "just-debounce-it";
import { ArrowMenu, LanguageTypes } from "components";
import Lang from "Translations";

const Language = () => {
  const { lng } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const { language: fx } = useGlobal();
  const [width, setWidth] = useState(window.innerWidth);
  const [arrowOn, setArrowOn] = useState(false);

  useEffect(() => {
    const HandleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 150);

    window.addEventListener("resize", HandleResize);

    return () => {
      window.removeEventListener("resize", HandleResize);
    };
  });

  const handleChange = (e) => {
    let value = "";
    if (e.target.value) {
      value = e.target.value;
    } else {
      value = e.target.id;
    }

    if (lng === value) return false;

    let newPath = "";
    if (lng) {
      newPath = pathname.replace(pathname.slice(1, 3), value);
    } else {
      newPath = `/${value}${pathname}`;
    }
    history.push({ pathname: newPath });
  };

  const handleClick = () => {
    setArrowOn((prev) => !prev);
  };

  const TypeSelect = ({ width }) => {
    if (width >= 769) {
      return (
        <select
          name="language"
          className="language__select"
          value={fx}
          onChange={handleChange}
        >
          <LanguageTypes type="select" />
        </select>
      );
    } else {
      return (
        <>
          <div className="language__container" onClick={handleClick}>
            <p>{Lang[fx].menu.language}</p>
            <ArrowMenu arrowOn={arrowOn} />
          </div>
          <ul className="language__list">
            <LanguageTypes arrowOn={arrowOn} handleChange={handleChange} />
          </ul>
        </>
      );
    }
  };

  return <TypeSelect width={width} />;
};

export default Language;
