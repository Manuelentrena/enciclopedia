import { useContext, useEffect } from 'react';
import InfoPageContext from 'provider/InfoPage';
import { useParams } from 'react-router';

export function useInfoPage() {
  const { page: doc, setParamPage, loading } = useContext(InfoPageContext);
  const { title } = useParams();

  useEffect(() => {
    setParamPage(title);
  }, []);

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
    getTitle, loading,
  };
}
