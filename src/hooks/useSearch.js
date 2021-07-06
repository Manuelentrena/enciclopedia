import { useContext } from "react";
import getlistOfSearch from "services/getlistOfSearch";
import getInfoBySearch from "services/getInfoBySearch";
import getImageById from "services/getImageById";
import SearchContext from "provider/SearchContext";

export const useSearch = () => {
  const { setResults } = useContext(SearchContext);

  function getResults({ search }) {
    return getlistOfSearch({ search }).then((results) => results[1]);
  }

  function getMiniInfo({ search }) {
    const searchURI = encodeURI(search);
    return getInfoBySearch({ search: searchURI }).then((results) => {
      const page = results.query.pages;
      const pageid = Object.keys(page);
      const description = page[pageid]?.pageprops?.["wikibase-shortdesc"];
      return { pageid, description };
    });
  }

  function getImage({ id, large }) {
    return getImageById({ id, large }).then((res) => {
      return res.query.pages[id]?.thumbnail?.source;
    });
  }

  function actState({ id, title, description = "", img = "" }) {
    setResults((prevState) => [...prevState, { id, title, description, img }]);
  }

  function resetState(initialState) {
    setResults(initialState);
  }

  async function setState({ search }) {
    if (search) {
      const titles = await getResults({ search });
      titles.forEach(async (title) => {
        const { pageid, description } = await getMiniInfo({ search: title });
        const img = await getImage({ id: pageid[0], large: 500 });
        actState({ id: pageid[0], title, description, img });
      });
    }
  }

  return { setState, resetState };
};
