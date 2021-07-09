import { useContext, useState } from "react";
import getlistOfSearch from "services/getlistOfSearch";
import SearchContext from "provider/SearchContext";

export const useSearch = () => {
  const { search, setSearch, isEmpty } = useContext(SearchContext);
  const [isLoading, setIsLoading] = useState(false);

  function resetState(initialState) {
    setSearch(initialState);
  }

  function stopFecth() {
    /* Creamos el abortController */
    const abortController = new AbortController();
    const { signal } = abortController;
    return { signal, abortController };
  }

  async function setState({ search, signal }) {
    setIsLoading(true);
    if (search) {
      const searchURI = encodeURI(search);
      const data = await getlistOfSearch({
        search: searchURI,
        numPag: 0,
        signal,
      });
      setIsLoading(false);
      setSearch(data);
    }
  }

  return { setState, resetState, stopFecth, isLoading, search, isEmpty };
};
