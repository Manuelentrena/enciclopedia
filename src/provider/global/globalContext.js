import { useReducer, createContext, useCallback } from "react";
import { GLOBAL_ACTIONS } from "events/index";
import { globalReducer, inicialState } from "./globalReducer";

const GlobalContext = createContext({});

export function GlobalStateProvider({ children }) {
  const [globalState, globalDispatch] = useReducer(globalReducer, inicialState);

  const { language, theme, lastSearch, token, userName } = globalState;

  const setTheme = useCallback(
    (theme) => {
      globalDispatch({
        type: GLOBAL_ACTIONS.CHANGE_THEME,
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
        setTheme,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContext;
