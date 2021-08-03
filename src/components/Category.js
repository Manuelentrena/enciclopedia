import React from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "hooks";
import Lang from "Translations";

const Category = () => {
  const { language: fx } = useGlobal();
  return (
    <div className="category">
      <h2 className="category__title ">{Lang[fx].category.tendencies}</h2>
      <Link to={`/${fx}/trendings`} className="category__see">
        {Lang[fx].category.link}
      </Link>
    </div>
  );
};

export default Category;
