import { useContext } from 'react';
import GlobalContext from 'provider/global/globalContext';

export const useGlobal = () => {
  /* Context Global */
  const {
    theme,
    setTheme,
    language,
    setLanguage,
    switchLanguage,
    setTrending,
    trending,
    page,
    setPage,
  } = useContext(GlobalContext);

  function changeTheme() {
    const tagHtml = document.getElementsByTagName('html')[0];
    tagHtml.className = '';
    tagHtml.classList.add(theme);
  }

  function noScroll(scrollStop) {
    scrollStop
      ? document.getElementById('body').classList.add('noScroll')
      : document.getElementById('body').classList.remove('noScroll');
  }

  function getDay() {
    return new Date().getDate().toString();
  }

  function getMonth() {
    return new Date().getMonth() + 1;
  }

  function getDate() {
    return new Date().toLocaleDateString();
  }

  return {
    theme,
    setTheme,
    changeTheme,
    language,
    setLanguage,
    switchLanguage,
    noScroll,
    setTrending,
    trending,
    getDay,
    getMonth,
    getDate,
    page,
    setPage,
  };
};
