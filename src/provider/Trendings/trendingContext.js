import { useEffect, useState } from "react";
import { useReducer, createContext, useCallback } from "react";
import { TRENDING_ACTIONS } from "events/index";
import { trendingReducer, inicialState } from "./trendingReducer";
import { useGlobal } from "hooks";
import getTrendings from "services/getTrendings";

const TrendingContext = createContext({});

export function TrendingStateProvider({ children }) {
  const [loadingTrending, setLoadingTrending] = useState(false);
  const { trending, setTrending, language: fx } = useGlobal();
  const [trendingState, trendingDispatch] = useReducer(
    trendingReducer,
    inicialState
  );

  const { newTrendings, initialPosition, numArticlesByBlock, listTrendings } =
    trendingState;

  /* CARGAR TRENDINGS */
  useEffect(() => {
    if (trending) {
      setLoadingTrending(true);
      async function loadData() {
        cleanListTrendings();
        const dataTrendings = await getTrendings({ language: fx });
        setSearchTrending(dataTrendings);
        addBlockTrending(fx);
        setTrending(false);
        setLoadingTrending(false);
        return true;
      }
      loadData();
    }
  }, [trending]); // eslint-disable-line react-hooks/exhaustive-deps

  const setSearchTrending = useCallback(
    (dataTrendings) => {
      trendingDispatch({
        type: TRENDING_ACTIONS.ADD_TRENDINGS,
        payload: dataTrendings,
      });
    },
    [trendingDispatch]
  );

  const addInfoCard = useCallback(
    (dataInfo) => {
      trendingDispatch({
        type: TRENDING_ACTIONS.ADD_INFO,
        payload: dataInfo,
      });
    },
    [trendingDispatch]
  );

  const addBlockTrending = useCallback(
    (language) => {
      trendingDispatch({
        type: TRENDING_ACTIONS.ADD_BLOCK,
        payload: language,
      });
    },
    [trendingDispatch]
  );

  const cleanListTrendings = useCallback(() => {
    trendingDispatch({
      type: TRENDING_ACTIONS.CLEAN_LIST,
    });
  }, [trendingDispatch]);

  return (
    <TrendingContext.Provider
      value={{
        newTrendings,
        setSearchTrending,
        initialPosition,
        numArticlesByBlock,
        addBlockTrending,
        listTrendings,
        cleanListTrendings,
        addInfoCard,
        loadingTrending,
        setLoadingTrending,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
}

export default TrendingContext;
