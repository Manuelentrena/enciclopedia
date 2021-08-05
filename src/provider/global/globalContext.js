import { useReducer, createContext, useCallback } from "react";
import { GLOBAL_ACTIONS } from "events/index";
import { globalReducer, inicialState } from "./globalReducer";

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
    (theme) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_THEME,
        payload: theme,
      });
    },
    [globalDispatch]
  );

  const setLanguage = useCallback(
    (language) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_LANGUAGE,
        payload: language,
      });
    },
    [globalDispatch]
  );

  const setTrending = useCallback(
    (value) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_TRENDING,
        payload: value,
      });
    },
    [globalDispatch]
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
