import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "hooks";

const Category = ({ title, date, link, showLink, path }) => {
  const { language: fx } = useGlobal();
  return (
    <div className="category">
      <div className="category__header">
        <h2 className="category__title">{title}</h2>
        <span className="category__subTitle">{date}</span>
      </div>
      {showLink && (
        <Link to={`/${fx}/${path}`} className="category__see">
          {link}
        </Link>
      )}
    </div>
  );
};

export default Category;
