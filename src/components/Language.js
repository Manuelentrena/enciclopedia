import React, { useEffect } from "react";
import { useGlobal } from "hooks/useGlobal";
import { useParams, useLocation, useHistory } from "react-router";

const languages = ["en", "es"];

const Language = () => {
  const { lng } = useParams();
  const { pathname } = useLocation();
  const location = useLocation();
  const history = useHistory();
  const { language, setLanguage } = useGlobal();

  useEffect(() => {
    lng && setLanguage(lng);
  }, [lng]);

  const handleChange = (e) => {
    let newPath = "";
    if (lng) {
      newPath = pathname.replace(pathname.slice(1, 3), e.target.value);
    } else {
      newPath = `/${e.target.value}${pathname}`;
    }
    history.push(newPath);
  };

  return (
    <>
      <select
        name="language"
        className="language"
        value={language}
        onChange={handleChange}
      >
        {languages.map((oneLanguage) => (
          <option key={oneLanguage} value={oneLanguage}>
            {oneLanguage.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
};

export default Language;
