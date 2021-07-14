import { path, action, format, cors, pag, find } from "services/settings";

export default function getlistOfSearch({ search, signal, page }) {
  // "action=opensearch", protocol to GET search
  const URL = `${path}?${cors}&${format}&${action[1]}&${find}&srsearch=${search}&${pag}=${page}`;

  return fetch(URL, {
    method: "GET",
    signal: signal,
    headers: {
      "User-Agent": "someone",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const newSearch = data?.query?.search;
      if (!newSearch) return [];

      newSearch.forEach((search) => {
        delete search.ns;
        delete search.size;
        delete search.timestamp;
        delete search.wordcount;
        search.id = search.pageid;
        delete search.pageid;
        search.description = search.snippet;
        delete search.snippet;
      });

      return newSearch;
    })
    .catch((error) => {
      if (!signal?.aborted) {
        console.log(error);
      }
      return [];
    });
}
