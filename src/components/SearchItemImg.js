import React, { useEffect, useState } from "react";
import { useImages } from "hooks/useImages";
import { useSearch } from "hooks/useSearch";
import { SearchSvg } from "components";

const SearchItemImg = ({ id, title }) => {
  const { getImageHeader } = useImages();
  const { stopFecth } = useSearch();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let mounted = true;
    const { signal, abortController } = stopFecth();
    async function getImg(signal) {
      const newUrl = await getImageHeader({ id, large: 50, signal });
      newUrl && mounted ? setUrl(newUrl) : setUrl(null);
    }
    getImg(signal);
    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {url ? (
        <img className="oneResult__url" src={url} alt={title} />
      ) : (
        <SearchSvg />
      )}
    </>
  );
};

export default SearchItemImg;
