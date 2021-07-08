import React, { useState, useEffect } from "react";
import { useSearch } from "hooks/useSearch";
import { SearchModal, ListResult } from "components";

const Search = () => {
  const [text, setText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { setState, resetState } = useSearch();

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    if (text) {
      setShowModal(true);
      searching(signal);
    } else {
      setShowModal(false);
    }
    return () => {
      abortController.abort();
      resetState([]);
    };
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* searching(); */
    handleClose();
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const searching = (signal) => {
    setState({ search: text, signal });
  };

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
          <ListResult />
        </SearchModal>
      )}
    </>
  );
};

export default Search;
