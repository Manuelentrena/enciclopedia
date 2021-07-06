import React, { useState } from "react";
import { useSearch } from "hooks/useSearch";

const Search = () => {
  const [text, setText] = useState("");
  const { setState, resetState } = useSearch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetState([]);
    setState({ search: text });
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
