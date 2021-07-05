import React, { useState, useContext } from "react";
import { useSearch } from "hooks/useSearch";
import SearchContext from "provider/SearchContext";

const Search = () => {
  const [text, setText] = useState("");
  const { getPages, getDescription } = useSearch();
  const { setResults } = useContext(SearchContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResults([]);
    if (text) {
      const titles = await getPages({ search: text });
      titles.forEach(async (title) => {
        const description = await getDescription({ search: title });
        setResults((prevState) => [
          ...prevState,
          { title, description: description ?? "" },
        ]);
      });
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        id="search"
        placeholder="Search terms here..."
        value={text}
        onChange={handleChange}
      ></input>
      <button type="submit">SEARCH</button>
    </form>
  );
};

export default Search;
