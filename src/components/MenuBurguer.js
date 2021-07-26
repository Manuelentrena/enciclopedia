import React from "react";

const MenuBurguer = ({ isActiveMenu, setIsActiveMenu }) => {
  const handleClick = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <div className="burguer__container">
      <div className="burguer" id="burguerIcon" onClick={handleClick}>
        <div
          className={
            isActiveMenu ? "activeMenu burguer__bar1" : "burguer__bar1"
          }
        ></div>
        <div
          className={
            isActiveMenu ? "activeMenu burguer__bar2" : "burguer__bar2"
          }
        ></div>
        <div
          className={
            isActiveMenu ? "activeMenu burguer__bar3" : "burguer__bar3"
          }
        ></div>
      </div>
    </div>
  );
};

export default MenuBurguer;
