import React, { useReducer, createContext, useCallback } from 'react';
import { TRENDING_ACTIONS } from 'events/index';
import { trendingReducer, inicialState } from './trendingReducer';

const TrendingContext = createContext({});

export function TrendingStateProvider({ children }) {
  const [trendingState, trendingDispatch] = useReducer(
    trendingReducer,
    inicialState,
  );

  const {
    newTrendings, initialPosition, numArticlesByBlock, listTrendings,
  } = trendingState;

  const setSearchTrending = useCallback(
    (dataTrendings) => {
      trendingDispatch({
        type: TRENDING_ACTIONS.ADD_TRENDINGS,
        payload: dataTrendings,
      });
    },
    [trendingDispatch],
  );

  const addInfoCard = useCallback(
    (dataInfo) => {
      trendingDispatch({
        type: TRENDING_ACTIONS.ADD_INFO,
        payload: dataInfo,
      });
    },
    [trendingDispatch],
  );

  const addBlockTrending = useCallback(() => {
    trendingDispatch({
      type: TRENDING_ACTIONS.ADD_BLOCK,
    });
  }, [trendingDispatch]);

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
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
}

export default TrendingContext;
