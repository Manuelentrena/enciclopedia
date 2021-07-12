import React, { useEffect } from "react";
import { Spinner, SearchItem } from "components";
import { useSearch } from "hooks/useSearch";

const SearchList = ({ text }) => {
  const {
    isLoading,
    search,
    setState,
    stopFecth,
    isEmpty,
    textGlobal,
    setTextGlobal,
  } = useSearch();

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;
    if (text !== textGlobal) {
      async function searchList(text, signal, mounted) {
        text && (await setState({ search: text, signal, mounted }));
        setTextGlobal(text);
      }
      searchList(text, signal, mounted);
    }

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {!isLoading ? (
        !isEmpty ? (
          search.map((item) => <SearchItem key={item.id} {...item} />)
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
