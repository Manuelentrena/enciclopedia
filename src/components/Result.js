import React, { useEffect } from "react";
import { useDataPage } from "hooks/useDataPage";

const Result = ({ img, description, title, id }) => {
  const { getlistImages } = useDataPage();

  useEffect(() => {
    /* console.log("Render item..."); */
  });

  const handleClick = (id) => {
    getlistImages({ id });
  };

  return (
    <div onClick={() => handleClick(id)}>
      <h2>{title}</h2>
      <p>{description}</p>
      {img ? <img src={img} alt={title} /> : null}
    </div>
  );
};

export default React.memo(Result);
