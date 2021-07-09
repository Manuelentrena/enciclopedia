import React, { useEffect, useState } from "react";
import { useImages } from "hooks/useImages";
import { useSearch } from "hooks/useSearch";
import parse from "html-react-parser";
import initialUrl from "assets/default.jpg";

const SearchItem = ({ description, title, id }) => {
  const { getImageHeader } = useImages();
  const { stopFecth } = useSearch();
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    const { signal, abortController } = stopFecth();
    async function changeURL(signal) {
      const newUrl = await getImageHeader({ id, large: 50, signal });
      newUrl ? setUrl(newUrl) : setUrl(initialUrl);
    }
    changeURL(signal);
    return () => {
      abortController.abort();
    };
  }, [id, getImageHeader, stopFecth]);

  const handleClick = (id) => {
    /* getlistImages({ id }); */
    console.log("item");
  };

  return (
    <div className="oneResult" onClick={() => handleClick(id)}>
      <div className="oneResult__img">
        <img className="oneResult__url" src={url} alt={title} />
      </div>
      <div className="oneResult__body">
        <h3 className="oneResult__title">{title}</h3>
        <p className="oneResult__description">{parse(description)}</p>
      </div>
    </div>
  );
};

export default React.memo(SearchItem);
