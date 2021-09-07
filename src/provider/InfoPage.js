import React, { useState, useEffect } from 'react';
import { useGlobal } from 'hooks';
import wtf from 'wtf_wikipedia';

const InfoPageContext = React.createContext({});

export function InfoPageContextProvider({ children }) {
  const [paramPage, setParamPage] = useState(null);
  const [page, setPage] = useState(null);
  const [otherTitle, setOtherTitle] = useState('');
  const [loading, setLoaging] = useState(false);
  const { language: fx } = useGlobal();

  useEffect(() => {
    async function getPage() {
      setLoaging(true);
      wtf.fetch(paramPage, fx).then((doc) => {
        setPage(doc);
        setLoaging(false);
      });
    }
    paramPage && getPage();
  }, [paramPage]);

  return (
    <InfoPageContext.Provider value={{
      paramPage, setParamPage, page, setPage, loading, setOtherTitle, otherTitle,
    }}
    >
      {children}
    </InfoPageContext.Provider>
  );
}

export default InfoPageContext;
