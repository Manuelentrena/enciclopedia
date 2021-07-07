import React, { useEffect, useState } from "react";
import { useImages } from "hooks/useImages";

const Image = ({ title }) => {
  const { getImage } = useImages();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function getUrl() {
      setUrl(await getImage({ title, size: 100 }));
    }
    getUrl();
  }, [title, getImage]);

  return (
    <div className="image">
      {url ? <img src={url} alt={title} className="image__img" /> : null}
    </div>
  );
};

export default React.memo(Image);
