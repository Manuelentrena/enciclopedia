import React, { useState } from 'react';

const SearchContext = React.createContext({});

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState([]);
  const [textGlobal, setTextGlobal] = useState('');
  const [globalPage, setGlobalPage] = useState(0);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        textGlobal,
        setTextGlobal,
        globalPage,
        setGlobalPage,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
