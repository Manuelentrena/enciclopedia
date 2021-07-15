import React, { useEffect } from "react";
import { Spinner, SearchItem } from "components";
import { useSearch } from "hooks/useSearch";

const SearchList = ({ text, selected, page, setPage }) => {
  const {
    isLoading,
    search,
    setState,
    stopFecth,
    isEmpty,
    textGlobal,
    setTextGlobal,
    globalPage,
    setGlobalPage,
  } = useSearch();

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;
    if (page !== 0 && page !== globalPage) {
      setState({ search: text, signal, mounted, page });
      setGlobalPage((prev) => prev + 10);
    }

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;

    if (text !== textGlobal) {
      async function searchList(text, signal, mounted) {
        text && (await setState({ search: text, signal, mounted, page: 0 }));
        setTextGlobal(text);
      }
      searchList(text, signal, mounted);
      setPage(0);
      setGlobalPage(0);
    }

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [text]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (e) => {
    setPage((prev) => prev + 10);
    e.stopPropagation();
  };

  return isLoading ? (
    <Spinner />
  ) : isEmpty() ? (
    <p>NO HAY RESULTADOS</p>
  ) : (
    <>
      {search.map((item) => (
        <SearchItem key={item.id} selected={selected} {...item} />
      ))}
      <button onClick={(e) => handleClick(e)}>
        More Results for "{textGlobal}"
      </button>
    </>
  );
};

export default SearchList;
