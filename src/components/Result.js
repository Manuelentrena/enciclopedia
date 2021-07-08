import React, { useEffect, useState } from "react";
import { useImages } from "hooks/useImages";
import parse from "html-react-parser";
import initialUrl from "assets/default.jpg";

const Result = ({ description, title, id }) => {
  const { getlistImages, getImageHeader } = useImages();
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    /* create abortController by mini-imgs of search */
    const abortController = new AbortController();
    const { signal } = abortController;

    async function changeURL(signal) {
      const newUrl = await getImageHeader({ id, large: 50, signal });
      newUrl ? setUrl(newUrl) : setUrl(initialUrl);
    }
    changeURL(signal);
    return () => {
      abortController.abort();
    };
  }, [id]);

  const handleClick = (id) => {
    /* getlistImages({ id }); */
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

export default React.memo(Result);
