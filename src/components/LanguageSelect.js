import React from "react";
import { useGlobal } from "hooks/useGlobal";
import { useLocation, useHistory } from "react-router";

const languages = ["en", "es"];

const LanguageSelect = () => {
  const { language: fx } = useGlobal();
  const { pathname } = useLocation();
  const history = useHistory();

  const handleChange = (e) => {
    const newPath = pathname.replace(pathname.slice(1, 3), e.target.value);
    history.push({ pathname: newPath });
  };

  return (
    <select
      name="language"
      className="language__select"
      value={fx}
      onChange={handleChange}
    >
      {languages.map((oneLanguage) => (
        <option key={oneLanguage} value={oneLanguage}>
          {oneLanguage.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelect;
