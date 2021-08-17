import React, { useReducer, createContext, useCallback } from 'react';
import { GLOBAL_ACTIONS } from 'events/index';
import { globalReducer, inicialState } from './globalReducer';

const GlobalContext = createContext({});

export function GlobalStateProvider({ children }) {
  const [globalState, globalDispatch] = useReducer(globalReducer, inicialState);

  const {
    language,
    theme,
    lastSearch,
    token,
    userName,
    switchLanguage,
    trending,
  } = globalState;

  const setTheme = useCallback(
    ({ theme: the }) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_THEME,
        payload: the,
      });
    },
    [globalDispatch],
  );

  const setLanguage = useCallback(
    ({ language: fx }) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_LANGUAGE,
        payload: fx,
      });
    },
    [globalDispatch],
  );

  const setTrending = useCallback(
    (value) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_TRENDING,
        payload: value,
      });
    },
    [globalDispatch],
  );

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        switchLanguage,
        theme,
        setTheme,
        lastSearch,
        token,
        userName,
        trending,
        setTrending,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
