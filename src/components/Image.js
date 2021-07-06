import React, { useEffect } from "react";

const Image = ({ url }) => {
  useEffect(() => {
    /* console.log("Render image..."); */
  });

  return (
    <div className="image">
      {url ? <img src={url} alt={url} className="image__img" /> : null}
    </div>
  );
};

export default React.memo(Image);
