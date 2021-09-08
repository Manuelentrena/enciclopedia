import { useContext } from 'react';
import InfoPageContext from 'provider/InfoPage';

export function useInfoPage() {
  const { doc, loading, otherTitle } = useContext(InfoPageContext);

  function getTitle() {
    return doc && doc.title();
  }

  return {
    doc, loading, otherTitle, getTitle,
  };
}
