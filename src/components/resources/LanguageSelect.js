import React from 'react';
import { useGlobal } from 'hooks/useGlobal';

const languages = ['en', 'es'];

const LanguageSelect = () => {
  const { language: fx, setLanguage, setTrending } = useGlobal();

  const handleChange = (e) => {
    setLanguage({ language: e.target.value });
    setTrending(true);
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
