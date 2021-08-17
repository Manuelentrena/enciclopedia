import {
  prot, path, action, format, cors, pag, find,
} from 'services/settings';

export default function getlistOfSearch({
  search, signal, page, language,
}) {
  // "action=opensearch", protocol to GET search
  const URL = `${prot}://${language}.${path[0]}?${cors}&${format}&${action[1]}&${find}&srsearch=${search}&${pag}=${page}`;

  return fetch(URL, {
    method: 'GET',
    signal,
    headers: {
      'User-Agent': 'someone',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const newSearch = data?.query?.search;
      if (!newSearch) return [];

      newSearch.forEach((searched) => {
        delete searched.ns;
        delete searched.size;
        delete searched.timestamp;
        delete searched.wordcount;
        searched.id = searched.pageid;
        delete searched.pageid;
        searched.description = searched.snippet;
        delete searched.snippet;
      });

      return newSearch;
    })
    .catch((error) => {
      if (!signal?.aborted) {
        console.error(error);
      }
      return [];
    });
}
