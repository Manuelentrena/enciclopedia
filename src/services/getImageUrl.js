import {
  prot,
  path,
  action,
  format,
  cors,
  urlImage,
  size,
} from 'services/settings';

export default function getImageUrl({ search, width, language }) {
  // "action=query", protocol to GET pages
  // "prop=image"; all images of page
  // "titles"; encode name img
  // "urlImage = prop=imageinfo&iiprop=url; data url img"
  // "size = iiurlwidth=size, width img"
  const URL = `${prot}://${language}.${path[0]}?${action[1]}&${format}&${cors}&${urlImage}&${size[1]}=${width}&titles=${search}`;

  return fetch(URL, {
    method: 'GET',
    /* headers: {
      'User-Agent': 'someone',
    }, */
  })
    .then((res) => res.json())
    .then((data) => {
      const idPage = Object.keys(data?.query?.pages);
      if (!idPage) return null;
      const info = data?.query?.pages[idPage]?.imageinfo;
      if (!info) return null;
      const indexUrl = Object.keys(data?.query?.pages[idPage]?.imageinfo);
      return data.query.pages[idPage].imageinfo[indexUrl].thumburl;
    })
    .catch((err) => console.error(`Error: ${err}`));
}
