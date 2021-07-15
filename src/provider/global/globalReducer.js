import { GLOBAL_ACTIONS } from "events/index";

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.CHANGE_DARK:
      return { ...state, theme: action.payload };
    case GLOBAL_ACTIONS.CHANGE_LIGHT:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const inicialState = {
  language: "en",
  theme: "light",
  lastSearch: "",
  token: null,
  userName: "userName",
};
