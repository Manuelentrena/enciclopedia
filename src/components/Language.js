import React from "react";
import { useGlobal } from "hooks/useGlobal";

const languages = ["en", "es"];

const Language = () => {
  const { language, setLanguage } = useGlobal();

  const handleChange = (e) => {
    setLanguage(e.target.value);
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
