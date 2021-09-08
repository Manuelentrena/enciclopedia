import React, { useState, useEffect } from 'react';
import { useGlobal } from 'hooks';
import wtf from 'wtf_wikipedia';
import getImageById from 'services/getImageById';
import getLinkLang from '../services/getLinkLang';

const InfoPageContext = React.createContext({});
const languages = { es: 'en', en: 'es' };

export function InfoPageContextProvider({ children }) {
  const [doc, setDoc] = useState(null);
  const [otherTitle, setOtherTitle] = useState('');
  const [loading, setLoaging] = useState(false);
  const { language: fx, titlePage } = useGlobal();
  const [mainImg, setMainImg] = useState(null);

  useEffect(() => {
    async function getPage() {
      setDoc(null);
      setLoaging(true);
      wtf.fetch(titlePage, fx).then((newdoc) => {
        setDoc(newdoc);
        setLoaging(false);
      });
      const newTitle = await getLinkLang({ title: titlePage, fx, lang: languages[fx] });
      if (newTitle === undefined) {
        setOtherTitle(null);
      } else {
        setOtherTitle(newTitle);
      }
    }
    titlePage && getPage();
  }, [titlePage]);

  useEffect(() => {
    async function getMainImg() {
      const img = await getImageById({ id: doc.pageID(), large: 300, language: fx });
      setMainImg(img);
    }
    doc && getMainImg();
  }, [doc]);

  return (
    <InfoPageContext.Provider value={{
      doc, setDoc, loading, setOtherTitle, otherTitle, mainImg,
    }}
    >
      {children}
    </InfoPageContext.Provider>
  );
}

export default InfoPageContext;
