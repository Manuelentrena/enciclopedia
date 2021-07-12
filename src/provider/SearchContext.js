import React, { useState, useEffect } from "react";

const SearchContext = React.createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState([]);
  const [textGlobal, setTextGlobal] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (search?.length === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [search]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, isEmpty, textGlobal, setTextGlobal }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
