import React from "react";
import { Link } from "react-router-dom";

const Category = ({ title, link, showLink, language: fx }) => {
  return (
    <div className="category">
      <h2 className="category__title ">{title}</h2>
      {showLink && (
        <Link to={`/${fx}/trendings`} className="category__see">
          {link}
        </Link>
      )}
    </div>
  );
};

export default Category;
