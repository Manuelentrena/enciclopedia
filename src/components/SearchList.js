import React, { useEffect } from "react";
import { Spinner, SearchItem, Button } from "components";
import { useSearch } from "hooks/useSearch";
import { useGlobal } from "hooks/useGlobal";
import Lang from "Translations";

const SearchList = ({ text, selected, page, setPage }) => {
  const { language: fx, switchLanguage } = useGlobal();
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
      setState({ search: text, signal, mounted, page, language: fx });
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
        text &&
          (await setState({
            search: text,
            signal,
            mounted,
            page: 0,
            language: fx,
          }));
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

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;
    async function searchList(signal, mounted) {
      switchLanguage &&
        (await setState({
          search: textGlobal,
          signal,
          mounted,
          page: 0,
          language: fx,
        }));
      setPage(0);
      setGlobalPage(0);
    }
    searchList(signal, mounted);

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [fx]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (e) => {
    setPage((prev) => prev + 10);
    e.stopPropagation();
  };

  return isLoading ? (
    <Spinner />
  ) : isEmpty() ? (
    <p>{Lang[fx].search.results}</p>
  ) : (
    <>
      {search.map((item) => (
        <SearchItem key={item.id} selected={selected} {...item} />
      ))}
      {/* <button onClick={(e) => handleClick(e)}>
        {Lang[fx].search.moreResultsButton} "{textGlobal}"
      </button> */}
      <Button
        className="buttonSecond"
        text={Lang[fx].search.moreResultsButton + " '" + textGlobal + "'"}
        action={handleClick}
      />
    </>
  );
};

export default SearchList;
