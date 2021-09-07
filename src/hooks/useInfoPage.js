import { useContext, useEffect } from 'react';
import InfoPageContext from 'provider/InfoPage';
import { useParams } from 'react-router';
import { useGlobal } from 'hooks';
import getLinkLang from '../services/getLinkLang';

const languages = { es: 'en', en: 'es' };

export function useInfoPage() {
  const {
    page: doc, setParamPage, loading, setOtherTitle, otherTitle,
  } = useContext(InfoPageContext);
  const { title } = useParams();
  const { language: fx, page, setPage } = useGlobal();

  useEffect(() => {
    page && setParamPage(title);
    async function getAnotherLink() {
      const newTitle = await getLinkLang({ title, fx, lang: languages[fx] });
      setOtherTitle(newTitle);
    }
    setPage(false);
    getAnotherLink();
  }, [page]);
  /* useEffect(() => {
    async function getAnotherLink() {
      const otherTitle = await getLinkLang({ title, fx, lang: languages[fx] });
      setOtherTitle(otherTitle);
    }
    getAnotherLink();
  }, [title]); */
  /*   useEffect(() => {
    async function getPage() {
      const numSections = page.sections().length;
      for (let i = 1; i < numSections; i++) {
        const titulo = page.section(i).title();
        const indet = page.section(i).indentation();
        console.log({ titulo, indet });
      }
    }
    page && getPage();
  }, [page]); */

  function getTitle() {
    return doc && doc.title();
  }

  return {
    getTitle, loading, otherTitle,
  };
}
