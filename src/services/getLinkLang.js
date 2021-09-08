import {
  path, action, format, cors, prot, langlink,
} from 'services/settings';

export default function getLinkLang({ title, fx, lang }) {
  const URL = `${prot}://${fx}.${path[0]}?${action[1]}&${format}&${cors}&${langlink}&lllang=${lang}&titles=${title}`;
  return fetch(URL, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      const page = data?.query?.pages;
      if (!page) return null;
      const idpage = Object.keys(page)[0];
      if (!idpage) return null;
      const anotherLink = page[idpage].langlinks[0]['*'];
      if (!anotherLink) return null;
      return anotherLink;
    })
    .catch((err) => console.error(`Error: ${err}`));
}
