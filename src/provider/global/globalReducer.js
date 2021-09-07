import { GLOBAL_ACTIONS } from 'events/index';

export const globalReducer = (state, action) => {
  switch (action.type) {
    case GLOBAL_ACTIONS.CHANGE_THEME:
      return { ...state, theme: action.payload };
    case GLOBAL_ACTIONS.CHANGE_LANGUAGE:
      return { ...state, language: action.payload, switchLanguage: true };
    case GLOBAL_ACTIONS.CHANGE_TRENDING:
      return { ...state, trending: action.payload };
    case GLOBAL_ACTIONS.CHANGE_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const LanguageSystem = () => {
  const { pathname } = window.location;
  const Lng = pathname.slice(1, 3);
  if (Lng === 'es' || Lng === 'en') {
    return pathname.slice(1, 3);
  }
  return navigator.language?.substr(0, 2) ?? 'en';
};

const colorSchemeSystem = () => {
  const tagHtml = document.getElementsByTagName('html')[0];
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (isDark) {
    tagHtml.classList.add('dark');
    return 'dark';
  }
  tagHtml.classList.add('light');
  return 'light';
};

export const inicialState = {
  language: LanguageSystem(),
  switchLanguage: false,
  theme: colorSchemeSystem(),
  lastSearch: '',
  token: null,
  userName: 'userName',
  trending: true,
  page: true,
};
