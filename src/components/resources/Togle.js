import React, { useEffect, useState } from "react";
import { useGlobal } from "hooks/useGlobal";

const Togle = () => {
  const { theme, setTheme } = useGlobal();
  const [togle, setTogle] = useState(theme);

  useEffect(() => {
    setTogle(theme);
  }, [theme]);

  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <div className="togle">
      <div className="togle__icon" onClick={handleClick}>
        <div
          className={`togle__subicon ${togle === "dark" ? "iconMove" : null}`}
        ></div>
      </div>
    </div>
  );
};

export default Togle;
