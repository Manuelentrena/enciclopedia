import React, { useState, useEffect } from "react";
import { SearchModal, SearchList } from "components";
import { useSearch } from "hooks/useSearch";

import debounce from "just-debounce-it";

const SearchForm = () => {
  const { search } = useSearch();
  const [text, setText] = useState("");
  const [ids, setIds] = useState([]);
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIds(search.map((item) => item.id));
    setSelected(0);
  }, [search]);

  useEffect(() => {
    debounce(() => (text ? setShowModal(true) : setShowModal(false)), 500)();
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
    setSelected(0);
    e.stopPropagation();
  };

  const handleFocus = () => {
    text && setShowModal(true);
  };

  const handleDown = (e) => {
    if (e.keyCode === 38) {
      // up arrow
      selected > 1 && setSelected((prev) => prev - 1);
    }
    if (e.keyCode === 40) {
      // down arrow
      selected !== search.length && setSelected((prev) => prev + 1);
    }
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <input
          id="search"
          placeholder="Search terms here..."
          value={text}
          onChange={handleChange}
          onFocus={handleFocus}
          onKeyDown={handleDown}
        ></input>
        <button type="submit">SEARCH</button>
      </form>
      {showModal && (
        <SearchModal onClose={handleClose}>
          <SearchList
            text={text}
            selected={selected > 0 ? ids[selected - 1] : null}
          />
        </SearchModal>
      )}
    </>
  );
};

export default SearchForm;
