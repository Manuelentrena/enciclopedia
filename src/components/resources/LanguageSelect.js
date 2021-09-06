import React from 'react';
import { useGlobal } from 'hooks/useGlobal';
import { useHistory, useLocation } from 'react-router';

const languages = ['en', 'es'];

const LanguageSelect = () => {
  const { language: fx } = useGlobal();
  const history = useHistory();
  const { pathname } = useLocation();

  const handleChange = (e) => {
    let options = {};
    if (pathname === '/es' || pathname === '/en' || pathname === '/es/trendings' || pathname === '/en/trendings') options = { trendings: true };
    history.push(pathname.replace(fx, e.target.value), options);
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
