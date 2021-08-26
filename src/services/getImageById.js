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
  // "action=query", protocol to GET pages
  // "prop=pageimages"; propertis of img
  // "large"; dimension img
  const URL = `${prot}://${language}.${path[0]}?${action[1]}&${format}&${cors}&${prop[1]}&pageids=${id}&${size[0]}=${large}`;
  return fetch(URL, {
    method: 'GET',
    signal,
    /* headers: {
      'User-Agent': 'someone',
    }, */
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      if (!signal?.aborted) {
        console.error(error);
      }
    });
}
