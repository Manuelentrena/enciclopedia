import React, { useState, useEffect } from 'react';
import {
  SearchModal,
  SearchList,
  Button,
  IconClose,
  IconLens,
} from 'components';
import { useSearch } from 'hooks/useSearch';
import Lang from 'Translations';

import debounce from 'just-debounce-it';
import { useGlobal } from 'hooks/useGlobal';

const SearchForm = () => {
  const { language: fx, noScroll } = useGlobal();
  const { search, setTextGlobal, textGlobal } = useSearch();
  const [text, setText] = useState('');
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
    text === '' && setTextGlobal('');
  }, [textGlobal, text, setTextGlobal]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFocus = () => {
    text && setShowModal(true);
  };

  const handleClose = (e) => {
    setShowModal(false);
    setSelected(0);
    e.stopPropagation();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose(e);
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
      <form
        className="searchForm quickpedia__header"
        id="form"
        onSubmit={handleSubmit}
      >
        <div className="searchBody">
          <div className="searchForm__myImput">
            <input
              className="searchForm__input"
              id="search"
              placeholder={Lang.search.searchInput[fx]}
              value={text}
              onChange={handleChange}
              onFocus={handleFocus}
              onKeyDown={handleDown}
            />
            <div className="searchClose">
              <IconClose handleClose={handleClose} />
            </div>
          </div>

          {/* Desktop */}
          <Button
            className="buttonPrimary buttonSearch"
            text={Lang.search.searchButton[fx]}
            type="submit"
            action={handleSubmit}
          />
          {/* Mobile */}
          <Button
            className="buttonPrimary buttonLens"
            type="submit"
            text={<IconLens />}
            action={handleSubmit}
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
