import React, { useState, useEffect } from "react";
import { SearchModal, SearchList, Button } from "components";
import { useSearch } from "hooks/useSearch";
import Lang from "Translations";

import debounce from "just-debounce-it";
import { useGlobal } from "hooks/useGlobal";

const SearchForm = () => {
  const { language: fx, noScroll } = useGlobal();
  const { search, setTextGlobal, textGlobal } = useSearch();
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const [ids, setIds] = useState([]);
  const [selected, setSelected] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    noScroll(showModal);
  }, [showModal, noScroll]);

  useEffect(() => {
    setIds(search.map((item) => item.id));
    setSelected(0);
  }, [search]);

  useEffect(() => {
    debounce(() => (text ? setShowModal(true) : setShowModal(false)), 500)();
  }, [text]);

  useEffect(() => {
    text === "" && setTextGlobal("");
  }, [textGlobal, text, setTextGlobal]);

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

  const handleFocus = (e) => {
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
      <form className="searchForm" id="form" onSubmit={handleSubmit}>
        <div className="searchBody">
          <input
            className="searchForm__input"
            id="search"
            placeholder={Lang[fx].search.searchInput}
            value={text}
            onChange={handleChange}
            onFocus={handleFocus}
            onKeyDown={handleDown}
          ></input>
          <div className="searchClose">
            <svg
              viewBox="-6 -6 24 24"
              width="32"
              height="32"
              className="closeFormIcon"
              onClickCapture={handleClose}
            >
              <path d="M7.314 5.9l3.535-3.536A1 1 0 109.435.95L5.899 4.485 2.364.95A1 1 0 10.95 2.364l3.535 3.535L.95 9.435a1 1 0 101.414 1.414l3.535-3.535 3.536 3.535a1 1 0 101.414-1.414L7.314 5.899z" />
            </svg>
          </div>

          <Button
            className="buttonPrimary buttonSearch"
            text={Lang[fx].search.searchButton}
            type="submit"
          />
          <Button
            className="buttonPrimary buttonLens"
            type="submit"
            text={
              <svg width="24.3" height="24.3">
                <path d="M10.7 18.7c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.5 8 8 8zm8.4-1.5l4.8 4.8c.5.5.5 1.4 0 1.9s-1.4.5-1.9 0l-4.8-4.8c-4.7 3.6-11.4 2.8-15-1.9S-.6 5.8 4.1 2.2s11.4-2.8 15 1.9c3 3.9 3 9.3 0 13.1z" />
              </svg>
            }
          />
        </div>
      </form>
      {showModal && (
        <SearchModal onClose={handleClose}>
          <SearchList
            text={text}
            selected={selected > 0 ? ids[selected - 1] : null}
            page={page}
            setPage={setPage}
          />
        </SearchModal>
      )}
    </>
  );
};

export default SearchForm;
