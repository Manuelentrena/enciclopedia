import { useContext } from "react";
import getlistOfSearch from "services/getlistOfSearch";
/* import getInfoBySearch from "services/getInfoBySearch"; */
import SearchContext from "provider/SearchContext";

export const useSearch = () => {
  const { setResults } = useContext(SearchContext);

  /*   function getMiniInfo({ search }) {
    const searchURI = encodeURI(search);
    return getInfoBySearch({ search: searchURI }).then((results) => {
      const page = results.query.pages;
      const pageid = Object.keys(page);
      const description = page[pageid]?.pageprops?.["wikibase-shortdesc"];
      return { pageid, description };
    });
  } */

  /*   function actState({ id, title, description = "", img = "" }) {
    setResults((prevState) => [...prevState, { id, title, description, img }]);
  } */

  function resetState(initialState) {
    setResults(initialState);
  }

  function setState({ search, signal }) {
    if (search) {
      const searchURI = encodeURI(search);
      getlistOfSearch({ search: searchURI, numPag: 0, signal }).then(
        (results) => setResults(results)
      );
      /* if (titles) {
        titles.forEach(async (title) => {
          const { pageid, description } = await getMiniInfo({ search: title });
          const img = await getImage({ id: pageid[0], large: 500 });
          actState({ id: pageid[0], title, description, img });
        });
      } */
    }
  }

  return { setState, resetState };
};
