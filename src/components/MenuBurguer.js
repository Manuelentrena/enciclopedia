import React, { useState } from "react";

const MenuBurguer = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="burguer" id="burguerIcon" onClick={handleClick}>
      <div
        className={isActive ? "activeMenu burguer__bar1" : "burguer__bar1"}
      ></div>
      <div
        className={isActive ? "activeMenu burguer__bar2" : "burguer__bar2"}
      ></div>
      <div
        className={isActive ? "activeMenu burguer__bar3" : "burguer__bar3"}
      ></div>
    </div>
  );
};

export default MenuBurguer;
