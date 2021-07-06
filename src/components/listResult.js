import React, { useContext, useEffect } from "react";
import Result from "components/Result";
import SearchContext from "provider/SearchContext";

const ListResult = () => {
  const { results } = useContext(SearchContext);

  useEffect(() => {
    console.log("Render list...");
  });

  return (
    <>
      <h2>LIST OF RESULTS:</h2>
      {results.map((result, index) => (
        <Result key={index} {...result} />
      ))}
    </>
  );
};

export default ListResult;
