import {
  prot,
  path,
  action,
  format,
  cors,
  prop,
  size,
} from 'services/settings';

export default function getImageById({
  id, large = 200, signal = null, language,
}) {
  const URL = `${prot}://${language}.${path[0]}?${action[1]}&${format}&${cors}&${prop[1]}&pageids=${id}&${size[0]}=${large}`;

  return fetch(URL, {
    method: 'GET',
    signal,
  })
    .then((res) => res.json())
    .then((data) => {
      const page = data?.query?.pages;
      const idPage = Object.keys(page)[0];
      const img = page[idPage]?.thumbnail?.source;
      return img;
    })
    .catch((error) => {
      if (!signal?.aborted) {
        console.error(error);
      }
    });
}
