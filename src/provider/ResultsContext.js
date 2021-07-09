import React, { useState } from "react";

const ResultsContext = React.createContext({});

export function ResultsContextProvider({ children }) {
  const [results, setResults] = useState([]);

  return (
    <ResultsContext.Provider value={{ results, setResults }}>
      {children}
    </ResultsContext.Provider>
  );
}

export default ResultsContext;
