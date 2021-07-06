import React, { useEffect } from "react";

const Result = ({ img, description, title, id }) => {
  useEffect(() => {
    console.log("Render item...");
  });

  const handleClick = (id) => {
    console.log(id);
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
