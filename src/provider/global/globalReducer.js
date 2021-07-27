import { GLOBAL_ACTIONS } from "events/index";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.CHANGE_THEME:
      return { ...state, theme: action.payload };
    case GLOBAL_ACTIONS.CHANGE_LANGUAGE:
      return { ...state, language: action.payload, switchLanguage: true };
    default:
      return state;
  }
};

const LanguageSystem = () => {
  return navigator.language?.substr(0, 2) ?? "en";
};

const colorSchemeSystem = () => {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDark) {
    return "dark";
  } else {
    return "light";
  }
};

export const inicialState = {
  language: LanguageSystem(),
  switchLanguage: false,
  theme: colorSchemeSystem(),
  lastSearch: "",
  token: null,
  userName: "userName",
};
