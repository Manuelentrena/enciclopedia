import React, { useState } from "react";

const SearchContext = React.createContext({});

export function SearchContextProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <SearchContext.Provider value={{ results, setResults }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
