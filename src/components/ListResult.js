import React, { useContext, useEffect } from "react";
import Result from "components/Result";
import SearchContext from "provider/SearchContext";

const ListResult = () => {
  const { results } = useContext(SearchContext);

  return (
    <>
      {results &&
        results.map((result) => <Result key={result.id} {...result} />)}
    </>
  );
};

export default ListResult;
