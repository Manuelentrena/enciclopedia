import React from 'react';
import { useGlobal, useInfoPage } from 'hooks';
import { useHistory, useLocation, useParams } from 'react-router';

const languages = ['en', 'es'];

const LanguageSelect = () => {
  const { language: fx, setTitlePage } = useGlobal();
  const history = useHistory();
  const { title } = useParams();
  let { pathname } = useLocation();
  const { otherTitle } = useInfoPage();

  const handleChange = (e) => {
    const options = {};
    if (pathname === '/es'
    || pathname === '/en'
    || pathname === '/es/trendings'
    || pathname === '/en/trendings') {
      options.trendings = true;
    }
    if (pathname.startsWith('/es/page/') || pathname.startsWith('/en/page/')) {
      if (otherTitle) {
        pathname = pathname.replace(title, otherTitle);
        options.page = true;
      } else {
        pathname = pathname.replace(title, 'pageDontExit');
      }
    }
    setTitlePage(null);
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
