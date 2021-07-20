import { useContext } from "react";
import GlobalContext from "provider/global/globalContext";

export const useGlobal = () => {
  /* Context Global */
  const { theme, setTheme, language, setLanguage, switchLanguage } =
    useContext(GlobalContext);

  function changeTheme() {
    const tagHtml = document.getElementsByTagName("html")[0];
    tagHtml.className = "";
    tagHtml.classList.add(theme);
  }

  return {
    theme,
    setTheme,
    changeTheme,
    language,
    setLanguage,
    switchLanguage,
  };
};
