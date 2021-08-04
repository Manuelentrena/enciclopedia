import React from "react";

const IconBurguer = ({ isActiveMenu, setIsActiveMenu }) => {
  const handleClick = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <div className="iconBurguer">
      <div
        className="iconBurguer__container"
        id="burguerIcon"
        onClick={handleClick}
      >
        <div
          className={
            isActiveMenu ? "activeMenu iconBurguer__bar1" : "iconBurguer__bar1"
          }
        ></div>
        <div
          className={
            isActiveMenu ? "activeMenu iconBurguer__bar2" : "iconBurguer__bar2"
          }
        ></div>
        <div
          className={
            isActiveMenu ? "activeMenu iconBurguer__bar3" : "iconBurguer__bar3"
          }
        ></div>
      </div>
    </div>
  );
};

export default IconBurguer;
