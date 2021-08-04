import React from "react";
const IconArrow = ({ arrowOn }) => {
  return (
    <svg
      width="10.2"
      height="7.7"
      overflow="visible"
      className={arrowOn ? "iconArrow iconArrow--rotate" : "iconArrow"}
    >
      <path d="M6.1 7.2c-.4.6-1.5.6-2 0l-2-2.9-2-2.9C-.3.8.3 0 1.1 0h8c.9 0 1.4.8 1 1.4l-2 2.9-2 2.9z" />
    </svg>
  );
};

export default React.memo(IconArrow);
