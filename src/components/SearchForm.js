import React, { useState, useEffect } from "react";
import { SearchModal, SearchList } from "components";
import debounce from "just-debounce-it";

const SearchForm = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);

  /* const debounceModal = debounce(
    () => (text ? setShowModal(true) : setShowModal(false)),
    1000
  ); */

  useEffect(() => {
    /* debounceModal(); */
    debounce(() => (text ? setShowModal(true) : setShowModal(false)), 1000)();
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
