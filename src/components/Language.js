import React, { useEffect, useState } from "react";
import { useGlobal } from "hooks/useGlobal";
import { useParams, useLocation, useHistory } from "react-router";
import debounce from "just-debounce-it";
import { ArrowMenu } from "components";

const languages = ["en", "es"];

const Language = () => {
  const { lng } = useParams();
  const { pathname } = useLocation();
  const history = useHistory();
  const { language, setLanguage } = useGlobal();
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

  useEffect(() => {
    lng && setLanguage(lng);
  }, [lng, setLanguage]);

  const handleChange = (e) => {
    let value = "";
    if (e.target.value) {
      value = e.target.value;
    } else {
      value = e.target.id;
    }

    let newPath = "";
    if (lng) {
      newPath = pathname.replace(pathname.slice(1, 3), value);
    } else {
      newPath = `/${value}${pathname}`;
    }
    history.push(newPath);
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
          value={language}
          onChange={handleChange}
        >
          {languages.map((oneLanguage) => (
            <option key={oneLanguage} value={oneLanguage}>
              {oneLanguage.toUpperCase()}
            </option>
          ))}
        </select>
      );
    } else {
      return (
        <>
          <div className="language__container" onClick={handleClick}>
            <p>Language</p>
            <ArrowMenu arrowOn={arrowOn} />
          </div>
          <ul className="language__list">
            {arrowOn
              ? languages.map((oneLanguage) => (
                  <li
                    className="language__item"
                    key={oneLanguage}
                    id={oneLanguage}
                    onClick={handleChange}
                  >
                    {oneLanguage.toUpperCase()}
                  </li>
                ))
              : null}
          </ul>
        </>
      );
    }
  };

  return <TypeSelect width={width} />;
};

export default Language;
