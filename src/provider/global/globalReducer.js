import { GLOBAL_ACTIONS } from "events/index";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.CHANGE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
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
  language: "es",
  theme: colorSchemeSystem(),
  lastSearch: "",
  token: null,
  userName: "userName",
};
