import React, { useEffect } from 'react';
import { Spinner, SearchItem, Button } from 'components';
import { useSearch } from 'hooks/useSearch';
import { useGlobal } from 'hooks/useGlobal';
import Lang from 'Translations';

const SearchList = ({
  text, selected, page, setPage,
}) => {
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
    numIds: numItems,
  } = useSearch();

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;
    if (page !== 0 && page !== globalPage) {
      setState({
        search: text, signal, mounted, page, language: fx,
      });
      setGlobalPage((prev) => prev + 10);
    }

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [page]);

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;

    async function searchList({ text: texto, signal: sign, mounted: moun }) {
      text
          && (await setState({
            search: texto,
            signal: sign,
            mounted: moun,
            page: 0,
            language: fx,
          }));
      setTextGlobal(text);
    }

    if (text !== textGlobal) {
      searchList({ text, signal, mounted });
      setPage(0);
      setGlobalPage(0);
    }

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [text]);

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    let mounted = true;
    async function searchList({ signal: sign, mounted: moun }) {
      switchLanguage
        && (await setState({
          search: textGlobal,
          signal: sign,
          mounted: moun,
          page: 0,
          language: fx,
        }));
      setPage(0);
      setGlobalPage(0);
    }
    searchList({ signal, mounted });

    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [fx]);

  const handleClick = (e) => {
    setPage((prev) => prev + 10);
    e.stopPropagation();
  };

  const hasItems = () => !isLoading && !isEmpty();

  const showText = () => `${Lang[fx].search.moreResultsButton} '${textGlobal}'`;

  const ButtonSecond = (
    <Button className="buttonSecond" text={showText()} action={handleClick} />
  );

  return hasItems() ? (
    <>
      {search.map((item) => (
        <SearchItem key={item.id} selected={selected} {...item} />
      ))}
      {numItems() === 10 && ButtonSecond}
    </>
  ) : (
    <Spinner />
  );
};

export default SearchList;
