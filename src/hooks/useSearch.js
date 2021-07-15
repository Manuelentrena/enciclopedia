import { useContext, useState } from "react";
import getlistOfSearch from "services/getlistOfSearch";
import SearchContext from "provider/SearchContext";
import GlobalContext from "provider/global/globalContext";

export const useSearch = () => {
  /* Context Search */
  const {
    search,
    setSearch,
    textGlobal,
    setTextGlobal,
    globalPage,
    setGlobalPage,
  } = useContext(SearchContext);
  /* Context Global */
  const { language } = useContext(GlobalContext);
  /* State useSearch */
  const [isLoading, setIsLoading] = useState(false);

  function isEmpty() {
    if (search?.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  function listIds() {
    return search.map((item) => item.id);
  }

  function resetState(initialState) {
    setSearch(initialState);
  }

  function stopFecth() {
    /* Creamos el abortController */
    const abortController = new AbortController();
    const { signal } = abortController;
    return { signal, abortController };
  }

  async function setState({ search, signal, mounted, page }) {
    setIsLoading(true);
    if (search) {
      const searchURI = encodeURI(search);
      const data = await getlistOfSearch({
        search: searchURI,
        page,
        signal,
        language,
      });
      mounted && setSearch(data);
    }
    setIsLoading(false);
  }

  return {
    setState,
    resetState,
    stopFecth,
    isLoading,
    search,
    isEmpty,
    textGlobal,
    setTextGlobal,
    listIds,
    setGlobalPage,
    globalPage,
  };
};
