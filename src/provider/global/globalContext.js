import { useReducer, createContext, useCallback } from "react";
import { GLOBAL_ACTIONS } from "events/index";
import { globalReducer, inicialState } from "./globalReducer";

const GlobalContext = createContext({});

export function GlobalStateProvider({ children }) {
  const [globalState, globalDispatch] = useReducer(globalReducer, inicialState);

  const { language, theme, lastSearch, token, userName } = globalState;

  const setThemeDark = useCallback(
    (theme) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_DARK,
        payload: theme,
      });
    },
    [globalDispatch]
  );

  const setThemeLight = useCallback(
    (theme) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_LIGHT,
        payload: theme,
      });
    },
    [globalDispatch]
  );

  return (
    <GlobalContext.Provider
      value={{
        language,
        theme,
        lastSearch,
        token,
        userName,
        setThemeDark,
        setThemeLight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
