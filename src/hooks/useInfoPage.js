import { useContext } from 'react';
import InfoPageContext from 'provider/InfoPage';

export function useInfoPage() {
  const {
    doc, loading, mainImg, otherTitle,
  } = useContext(InfoPageContext);

  function getTitle() {
    return doc && doc.title();
  }

  function getPageId() {
    return doc && doc.pageID();
  }

  return {
    doc, loading, getTitle, getPageId, mainImg, otherTitle,
  };
}
