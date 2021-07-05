import { useState } from "react";
import getlistOptionsSearch from "services/getlistOptionsSearch";
import getDescriptionbyResult from "services/getDescriptionbyResult";

export const useSearch = () => {
  const [pages, setPages] = useState([]);

  function getPages({ search }) {
    const URL = `
https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=${search}&prop=pageprops`;
    return getlistOptionsSearch(URL).then((results) => results[1]);
  }

  function getDescription({ search }) {
    const searchEnconde = encodeURI(search);
    const URL = `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&titles=${searchEnconde}&format=json`;
    return getDescriptionbyResult(URL).then((results) => {
      const page = results.query.pages;
      const pageid = Object.keys(page);
      return page[pageid]?.pageprops?.["wikibase-shortdesc"];
    });
  }

  return { pages, setPages, getPages, getDescription };
};
