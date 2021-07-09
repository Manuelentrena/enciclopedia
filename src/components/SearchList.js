import React, { useEffect } from "react";
import { Spinner, SearchItem } from "components";
import { useSearch } from "hooks/useSearch";

const SearchList = ({ text }) => {
  const { isLoading, search, setState, stopFecth, isEmpty } = useSearch();

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    if (text) {
      async function getSearch(signal) {
        await setState({ search: text, signal });
      }
      getSearch(signal);
    }
    /* cancelamos peticion */
    return () => {
      abortController.abort();
    };
  }, [text]);

  return (
    <>
      {!isLoading ? (
        !isEmpty ? (
          search.map((oneSearch) => (
            <SearchItem key={oneSearch.id} {...oneSearch} />
          ))
        ) : (
          <p>NO HAY RESULTADOS</p>
        )
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SearchList;
