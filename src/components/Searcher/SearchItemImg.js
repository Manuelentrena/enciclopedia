import React, { useEffect, useState } from 'react';
import { useImages } from 'hooks/useImages';
import { useSearch } from 'hooks/useSearch';
import { IconImageNotFound } from 'components';

const SearchItemImg = ({ id, title }) => {
  const { getImageHeader } = useImages();
  const { stopFecth } = useSearch();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    let mounted = true;
    const { signal, abortController } = stopFecth();
    async function getImg({ signal: sing }) {
      const newUrl = await getImageHeader({ id, large: 50, sing });
      newUrl && mounted ? setUrl(newUrl) : setUrl(null);
    }
    getImg({ signal });
    return () => {
      mounted = false;
      abortController.abort();
    };
  }, [id]);

  return url ? (
    <img className="oneResult__url" src={url} alt={title} />
  ) : (
    <IconImageNotFound />
  );
};

export default SearchItemImg;
