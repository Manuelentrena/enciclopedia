import React from "react";
import parse from "html-react-parser";
import { SearchItemImg } from "components";

const SearchItem = ({ description, title, id }) => {
  const handleClick = ({ e, id }) => {
    /* getlistImages({ id }); */
    console.log(id);
    e.stopPropagation();
  };

  return (
    <div className="oneResult" onClick={(e) => handleClick({ e, id })}>
      <div className="oneResult__img">
        <SearchItemImg title={title} id={id} />
      </div>
      <div className="oneResult__body">
        <h3 className="oneResult__title">{title}</h3>
        <p className="oneResult__description">{parse(description)}</p>
      </div>
    </div>
  );
};

export default React.memo(SearchItem);
