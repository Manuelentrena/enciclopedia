import React, { useState, useEffect } from "react";
import { SearchModal, SearchList } from "components";

const SearchForm = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    text ? setShowModal(true) : setShowModal(false);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
  };

  const handleClose = (e) => {
    e.stopPropagation();
    console.log("padre");
  };
  /* 
  const handleCloseChild = (e) => {
    console.log("hijo");
    e.stopPropagation();
  }; */

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="search"
          placeholder="Search terms here..."
          value={text}
          onChange={handleChange}
        ></input>
        <button type="submit">SEARCH</button>
      </form>
      {showModal && (
        <SearchModal onClose={handleClose}>
          <SearchList text={text} />
        </SearchModal>
      )}
    </>
  );
};

export default SearchForm;
