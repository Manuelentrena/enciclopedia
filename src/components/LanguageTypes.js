import React from "react";
import { useGlobal } from "hooks/useGlobal";
import Lang from "Translations";

const languages = ["en", "es"];

const LanguageTypes = ({ type, arrowOn, handleChange }) => {
  const { language: fx } = useGlobal();
  return type === "select"
    ? languages.map((oneLanguage) => (
        <option key={oneLanguage} value={oneLanguage}>
          {oneLanguage.toUpperCase()}
        </option>
      ))
    : arrowOn
    ? languages.map((oneLanguage) => (
        <li
          className="language__item"
          key={oneLanguage}
          id={oneLanguage}
          onClick={handleChange}
        >
          {oneLanguage.toUpperCase() +
            " " +
            Lang[fx].menu.typeLang[oneLanguage]}
        </li>
      ))
    : null;
};

export default LanguageTypes;
