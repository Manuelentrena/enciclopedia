import React, { useState } from "react";

const StarFav = () => {
  const [onClick, setOnClick] = useState(false);

  const handleCLick = () => {
    setOnClick((prev) => !prev);
  };

  return (
    <svg
      width="20.1px"
      height="19.3px"
      overflow="visible"
      onClick={handleCLick}
    >
      <path
        className="starFav__ext"
        d="M10,13.6l3.6,1.9l-0.7-3.9l2.9-2.8l-3.9-0.6L10,4.5L8.3,8.2L4.4,8.8l2.9,2.8l-0.7,3.9L10,13.6z M10,15.9l-6.2,3.2l1.2-7
	L0,7.3l7-1L10,0l3.1,6.3l7,1l-5,5l1.2,7C16.3,19.3,10,15.9,10,15.9z"
      />
      <path
        className={onClick ? "starFav__int startFav__click" : "starFav__int"}
        d="M13.1,6.3L10,0L7,6.3l-7,1l5,4.8l-1.2,7l6.2-3.2l6.3,3.4l-1.2-7l5-5L13.1,6.3z"
      />
    </svg>
  );
};

export default StarFav;
