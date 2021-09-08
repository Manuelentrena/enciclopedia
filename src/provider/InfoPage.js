import React, { useState, useEffect } from 'react';
import { useGlobal } from 'hooks';
import wtf from 'wtf_wikipedia';
import getLinkLang from '../services/getLinkLang';

const InfoPageContext = React.createContext({});
const languages = { es: 'en', en: 'es' };

export function InfoPageContextProvider({ children }) {
  /* const [paramPage, setParamPage] = useState(null); */
  const [doc, setDoc] = useState(null);
  const [otherTitle, setOtherTitle] = useState('');
  const [loading, setLoaging] = useState(false);
  const { language: fx, titlePage } = useGlobal();

  useEffect(() => {
    console.log({ titlePage });
    async function getPage() {
      setDoc(null);
      setLoaging(true);
      wtf.fetch(titlePage, fx).then((newdoc) => {
        setDoc(newdoc);
        setLoaging(false);
      });
      const newTitle = await getLinkLang({ title: titlePage, fx, lang: languages[fx] });
      console.log(typeof newTitle);
      if (newTitle === undefined) {
        setOtherTitle(null);
      } else {
        setOtherTitle(newTitle);
      }
    }
    titlePage && getPage();
  }, [titlePage]);

  return (
    <InfoPageContext.Provider value={{
      doc, setDoc, loading, setOtherTitle, otherTitle,
    }}
    >
      {children}
    </InfoPageContext.Provider>
  );
}

export default InfoPageContext;
