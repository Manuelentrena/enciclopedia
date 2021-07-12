import React, { useState, useEffect } from "react";
import { SearchModal, SearchList } from "components";

import debounce from "just-debounce-it";

const SearchForm = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    debounce(() => (text ? setShowModal(true) : setShowModal(false)), 1000)();
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose(e);
  };

  const handleClose = (e) => {
    setShowModal(false);
    e.stopPropagation();
  };

  const handleFocus = () => {
    text && setShowModal(true);
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
          onFocus={handleFocus}
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
